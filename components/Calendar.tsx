import React from "react";
import {
  Calendar,
  Card,
  CardBody,
  CardHeader,
  Input,
  Button,
} from "@nextui-org/react";
import { today, getLocalTimeZone, CalendarDate } from "@internationalized/date";
import { useState, useEffect, createContext, useRef } from "react";
import Goal from "./Goal";

export default function App() {

  const DateContext = createContext<Date | undefined>(undefined);
  const goalInput = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState<CalendarDate | undefined>(
    today(getLocalTimeZone())
  );
  const [dataBase, setDataBase] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState<number | undefined>();
  const [dependency, setDependency] = useState(0);


  const handleChange = (newValue: CalendarDate | undefined) => {
    setValue(newValue);
    const id = dataBase.find(
      (d) => d.date === `${newValue?.month}.${newValue?.day}`
    )?._id;
    setSelectedId(id);
    
  
  };



  useEffect(() => {
    fetch("http://localhost:3000/api/get", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setDataBase(data.documents);
      })
      .catch((error) => console.error(error));
      "fetched the database again";

     handleChange(value);
  }, [dependency]);


  function goalInputHandler() {

    setDependency(dependency + 1);

    const IdExists = dataBase.find((d) => d._id === selectedId && d.date === `${value?.month}.${value?.day}`)

    if (
      IdExists && goalInput.current?.value
    ) {
      console.log("this is matched id", selectedId);
      fetch(`http://localhost:3000/api/update?id=${selectedId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          goals: [
            ...dataBase.find((d) => d.date === `${value?.month}.${value?.day}`)
              ?.goals,
            goalInput.current?.value,
          ],
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    } else if (goalInput.current?.value) {
      console.log("this is not matched id", selectedId);
      fetch("http://localhost:3000/api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: `${value?.month}.${value?.day}`,
          goals: [goalInput.current?.value],
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));


    }
  }

  function goalDeleteHandler() {
    fetch("http://localhost:3000/api/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: `${value?.month}.${value?.day}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  function goalAddHandler() {
    fetch("http://localhost:3000/api/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        goals: [goalInput.current?.value],
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  return (
    <>
      <Card className="h-auto w-full grid grid-cols-12 grid-rows-1">
        <CardBody className="h-full w-full flex justify-center items-end bg-yellow-200 grid grid-cols-1 grid-rows-4 col-span-12 sm:col-span-4">
          <CardBody className="bg-red-300 row-span-4 sm:row-span-3 flex justify-center items-center">
            <Calendar
              aria-label="Date (Min Date Value)"
              defaultValue={today(getLocalTimeZone())}
              minValue={today(getLocalTimeZone())}
              onChange={handleChange}
            />
          </CardBody>
          <CardBody className="h-[9vh] rounded-lg p-2 w-full bg-blue-100 row-span-4 sm:row-span-1 grid grid-rows-1 grid-cols-5 overflow-visible">
            <Input
              className="w-[100%] col-span-5 sm:col-span-4"
              type="text"
              variant="underlined"
              label="Goal"
              ref={goalInput}
              placeholder="Enter your goal"
            />
            <Button
              radius="lg"
              className="sm:w-[80%] h-[40%] self-center overflow-visible gap-[5px]"
              onClick={goalInputHandler}
            >
              Add
            </Button>
          </CardBody>
        </CardBody>
        <CardBody className="h-auto w-full flex justify-center items-center bg-green-200 col-span-12 sm:col-span-8 grid grid-rows-4 grid-cols-1">
          <CardHeader className="row-span-4 sm:row-span-1 ">
            Objectives of {value?.month}.{value?.day}
          </CardHeader>
          <CardBody className="h-full w-full bg-blue-100 row-span-4 sm:row-span-3">
         {dataBase.find((d) => d._id === selectedId)?.goals?.map((goal: any) => (
           goal && goal.trim() !== "" ? <Goal goals={goal} /> : <p>No data</p>
         )) ?? <p className="text-default-500 self-center ">No Goals Yet ;D</p>}
          </CardBody>
        </CardBody>
      </Card>
    </>
  );
}
