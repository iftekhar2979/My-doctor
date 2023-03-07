import { createBrowserRouter } from 'react-router-dom';
import About from '../Component/Pages/About/About';
import Appointment from '../Component/Pages/Appointment Page/Appointment';
import MyAppointment from '../Component/Pages/Dashboard/MyAppointment';
import Home from '../Component/Pages/Home/Home';
import Login from '../Component/Pages/Login/Login';
import SignUp from '../Component/Pages/Login/SignUp';
import DashBoardLayout from '../Component/Pages/Root/DashBoardLayOut';
import Root from '../Component/Pages/Root/Root';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/appointment',
        element: <Appointment></Appointment>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>,
      },
      {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        children:[
          {  path:"/dashboard",
            element:<MyAppointment></MyAppointment>},
            {  path:"/dashboard/myappointment",
            element:<MyAppointment></MyAppointment>}
        ]
     
      },
    ],
  },

]);
