import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router';
import { add, update} from '../redux/PasteSlice';

const Home = () => {

    const [title,setTitle]=useState('');
    const [value,setValue]=useState('');
    const [search,setSearch]=useSearchParams('');
    const pasteId=search.get("pasteId");
    const dispatch=useDispatch();

    const allPaste=useSelector((state)=>state.paste.pastes);

    useEffect(() => {

      if(pasteId){
        const paste=allPaste.find((p)=>p._id===pasteId);
        setTitle(paste.title);
        setValue(paste.content);
      }

    }, [pasteId])
    

    const createSnip=()=>{
      const paste={
        title:title,
        content:value,
        _id:pasteId || Date.now().toString(36),
        createdAt:new Date().toISOString(),
      }

      if(pasteId){
        dispatch(update(paste));
      }
      else{
        dispatch(add(paste));
      }

      setTitle('');
      setValue('');
      setSearch({});
    }

  return (
    <div className="flex flex-col lg:flex-row gap-7 place-content-center mt-10 p-4 lg:p-16">
      <div className='flex flex-col w-full lg:w-1/2 mb-8 lg:mb-0'>
      <label htmlFor="a" className="text-xl font-semibold mb-2 text-gray-700">Enter: </label>
        <input 
        className='p-3 rounded-lg border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
        type="text"
        placeholder='Enter'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        id="a"
         />
         <button className='mt-4 py-2 px-4 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300'
           onClick={createSnip}
         >
          {
            pasteId ? "Update" :"Create New"
          }
         </button>
      </div>
      <div className='w-full lg:w-1/2'>
      <label htmlFor="content" className="text-xl font-semibold mb-2 text-gray-700">Enter Content:</label>
        <textarea
        id='content'
        type="text"
        className='rounded-lg p-3 border-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
        value={value}
        placeholder=' Enter your content here'
        onChange={(e)=>setValue(e.target.value)}
        rows={20}
        />
      </div>
    </div>
  )
}

export default Home
