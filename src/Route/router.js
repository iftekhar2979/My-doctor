import { createBrowserRouter } from "react-router-dom";
import About from "../Component/Pages/About/About";
import Appointment from "../Component/Pages/Appointment Page/Appointment";
import Home from "../Component/Pages/Home/Home";
import Root from "../Component/Pages/Root/Root";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },{
                path:'/appointment',
                element:<Appointment></Appointment>
            }
        ]
    }
])