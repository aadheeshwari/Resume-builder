import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import './App.css'
import Personal_Details from './Personal_Details'
import Education_details from './Edu/Education_details'

const Routers = [
  {path : "/", element : <Personal_Details/> },
  {path : "education" , element : <Education_details/>}
]
const router = createBrowserRouter(Routers);

function App() {

  return (
    <>
        {/* <h1>Welcome to react</h1> */}
        {/* <Personal_Details/> */}
        {/* <Education_details/> */}
        <RouterProvider router={router} />
           </>
  )
}

export default App
