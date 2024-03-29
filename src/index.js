import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    QueryClient,
    QueryClientProvider
} from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from './Component/Context/UserContext';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { router } from './Route/router';
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
       <QueryClientProvider client={queryClient}>
       <UserContext>
       <ToastContainer />
     <RouterProvider router={router}></RouterProvider>
     </UserContext>
     </QueryClientProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals())
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
