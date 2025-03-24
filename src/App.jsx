import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';
import toast,{Toaster} from 'react-hot-toast';

const router=createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <div className='flex flex-row lg:flex-row gap-2 p-4  bg-gray-100 '>
        <Navbar/>
      </div>
      <div>
        <Home/>
      </div>
      </div>
    },
    {
      path:"/snips",
      element:
      <div>
      <div className='flex flex-row lg:flex-row gap-2 p-4 bg-gray-100'>
      <Navbar/>
    </div>
    <div>
      <Paste/>
    </div>
    </div>
    },
    {
      path:"/snips/:id",
      element:
      <div>
      <div className='flex flex-row lg:flex-row gap-2 p-4 +bg-gray-100 '>
      <Navbar/>
    </div>
    <div>
      <ViewPaste/>
    </div>
    </div>
    },
  ]
);

function App() {

  return (
    <div className='bg-white'>
      <RouterProvider router={router}/>
      <Toaster position='top-center'/>
    </div>
  )
}

export default App
