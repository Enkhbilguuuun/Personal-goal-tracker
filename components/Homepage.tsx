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
            <CardBody>
                <Calendar/>
            </CardBody>
            <CardFooter>
            </CardFooter>
        </Card> 
    );
}