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

  function goalInputHandler() {
    goalInput.current?.focus();
    console.log(goalInput.current?.value);
  }

  const [value, setValue] = useState<CalendarDate | undefined>(
    today(getLocalTimeZone())
  );

  const handleChange = (newValue: CalendarDate | undefined) => {
    setValue(newValue);
    console.log(newValue);
  };

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
            <Button radius="lg" className="sm:w-[80%] h-[40%] self-center overflow-visible gap-[5px]" onClick={goalInputHandler}>Add</Button>
          </CardBody>
        </CardBody>
        <CardBody className="h-auto w-full flex justify-center items-center bg-green-200 col-span-12 sm:col-span-8 grid grid-rows-4 grid-cols-1">
          <CardHeader className="row-span-4 sm:row-span-1 ">
            Objectives of {value?.month}.{value?.day}
          </CardHeader>
          <CardBody className="h-full w-full bg-blue-100 row-span-4 sm:row-span-3">
            <Goal />
          </CardBody>
        </CardBody>
      </Card>
    </>
  );
}
