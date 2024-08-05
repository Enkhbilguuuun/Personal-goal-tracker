import {Card, CardHeader, CardBody, CardFooter, Divider} from "@nextui-org/react";
import Navbar from './Navbar';
import Calendar from './Calendar';
import Goal from './Goal';


export default function App() {
    return (    
        <Card radius="none">
            <CardHeader>
                <Navbar/>
            </CardHeader>
            <CardBody className="h-auto w-full grid grid-cols-12 grid-rows-1" >
                <div className="h-auto w-full flex justify-center items-center bg-green-100 col-span-12 sm:col-span-4">
                <Calendar/>
                </div>
                <div className="h-[300px] w-full col-span-12 sm:col-span-8 bg-blue-100 ">
                    <CardHeader className="text-center font-bold justify-center">Goals of the Day</CardHeader>
                    <Divider/>
                    <Goal/>
                </div>
            </CardBody>
            <CardFooter>
            </CardFooter>
        </Card> 
    );
}