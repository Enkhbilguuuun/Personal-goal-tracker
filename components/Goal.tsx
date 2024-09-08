import React from "react";
import {Card, CardBody, Checkbox} from "@nextui-org/react";
import useState from "react";

export default function App(goal : any, k : number) {

    const [isSelected, setIsSelected] = React.useState(false);

    

  return (
    <Card className="m-2">  
      <CardBody className="w-[70%] flex justify-center items-center">
      <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
       {goal.goals}
      </Checkbox>
      <p className="text-default-500">
        Selected: {isSelected ? "true" : "false"}
      </p>
      </CardBody>
    </Card>
  );
}
