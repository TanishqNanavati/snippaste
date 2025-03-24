// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams, useSearchParams } from 'react-router';
// import { add, update} from '../redux/PasteSlice';


// const ViewPaste = () => {

//   const {id}=useParams();
//   const allPaste=useSelector((state)=>state.paste.pastes);

//   const paste=allPaste.filter((p)=>p._id===id)[0];


//   return (
//     <div className='flex flex-row gap-7 place-content-between'>
//       <div>
//       <label htmlFor="a">Enter: </label>
//         <input 
//         className='p-1 rounded-2xl w-[80%] mt-4 pl-4'
//         type="text"
//         placeholder='Enter'
//         value={paste.title}
//         disabled
//         onChange={(e)=>setTitle(e.target.value)}
//         id="a"
//          />
//       </div>
//       <div className='mt-8'>
//         <textarea
//         type="text"
//         className='rounded-2xl p-2 mt-4 min-w-[500px]'
//         value={paste.content}
//         placeholder=' Enter your content here'
//         disabled
//         onChange={(e)=>setValue(e.target.value)}
//         rows={20}
//         />
//       </div>
//     </div>
//   )
// }

// export default ViewPaste


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router';
import { add, update} from '../redux/PasteSlice';

const ViewPaste = () => {

  const {id}=useParams();
  const allPaste=useSelector((state)=>state.paste.pastes);

  const paste=allPaste.filter((p)=>p._id===id)[0];

  return (
    <div className='flex flex-col items-center justify-center p-6'>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="mb-4">
          <label htmlFor="a" className="block text-xl font-semibold text-gray-700">Title:</label>
          <input 
            className='p-3 rounded-2xl w-full mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
            type="text"
            placeholder='Enter'
            value={paste.title}
            disabled
            onChange={(e)=>setTitle(e.target.value)}
            id="a"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="content" className="block text-xl font-semibold text-gray-700">Content:</label>
          <textarea
            className='p-3 rounded-2xl w-full mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={paste.content}
            placeholder='Enter your content here'
            disabled
            onChange={(e)=>setValue(e.target.value)}
            rows={15}
            id="content"
          />
        </div>
      </div>
    </div>
  )
}

export default ViewPaste
