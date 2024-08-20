import React from "react";
import {Calendar, Card, CardBody, CardHeader} from "@nextui-org/react";
import {today, getLocalTimeZone, CalendarDate} from "@internationalized/date";
import { useState, useEffect, createContext } from "react";
import Goal from "./Goal";

export default function App() {

  const DateContext = createContext<Date | undefined>(undefined);

  const [value, setValue] = useState<CalendarDate | undefined>(today(getLocalTimeZone()));


  const handleChange = (newValue: CalendarDate | undefined) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
   <>
   <Card className="h-auto w-full grid grid-cols-12 grid-rows-1">
    <CardBody className="h-auto w-full flex justify-center items-center bg-green-200 col-span-12 sm:col-span-4">
    <Calendar
      aria-label="Date (Min Date Value)"
      defaultValue={today(getLocalTimeZone())}
      minValue={today(getLocalTimeZone())}
      onChange={handleChange} 
      className=""
    />
    </CardBody>
    <CardBody className="h-auto w-full flex justify-center items-center bg-green-200 col-span-12 sm:col-span-8 grid grid-rows-4 grid-cols-1">
      <CardHeader className="row-span-4 sm:row-span-1 ">
        Objectives of {value?.month}.{value?.day}
      </CardHeader>
      <CardBody className="h-full w-full bg-blue-100 row-span-4 sm:row-span-3">
        <Goal/>
      </CardBody>
    </CardBody>
   </Card>
   </>
  );
}
