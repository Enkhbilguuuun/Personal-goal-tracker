import React from "react";
import {Card, CardBody, Checkbox} from "@nextui-org/react";
import useState from "react";

export default function App() {

    const [isSelected, setIsSelected] = React.useState(false);

  return (
    <Card>  
      <CardBody className="w-[70%] flex justify-center items-center">
      <Checkbox isSelected={isSelected} onValueChange={setIsSelected}>
        EXAMPLE : Make beautiful websites regardless of your design experience.
      </Checkbox>
      <p className="text-default-500">
        Selected: {isSelected ? "true" : "false"}
      </p>
      </CardBody>
    </Card>
  );
}
