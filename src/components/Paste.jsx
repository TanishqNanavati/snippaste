

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/PasteSlice';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router';

const Paste = () => {

  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const filterdata = pastes.filter(
    (paste) => paste.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (pasteId) => {
    dispatch(remove(pasteId));
  }

  const sharebutton = (paste) => {
    const shareUrl = `${window.location.origin}/view/${paste._id}`;
    if (navigator.share) {
      navigator.share(
        {
          title: paste.title,
          text: paste.content,
          url: shareUrl,
        }
      ).then(() => toast.success("Shared Successfully!"))
        .catch((error) => toast.error("Error sharing " + error));
    }
    else {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => toast.success("Link copied to clipboard!"))
        .catch((error) => toast.error("Error Copying the link " + error));
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long', 
      year: 'numeric', 
      month: 'long',   
      day: 'numeric',  
    });
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl">
        <label htmlFor="search" className="text-xl font-semibold">Search: </label>
        <input
          className='p-2 rounded-2xl min-w-[600px] mt-5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
          type="search"
          placeholder='Search here'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id='search'
        />

        <div className='flex flex-col gap-5 mt-5'>
          {
            filterdata.length > 0 &&
            filterdata.map((paste) => {
              return (
                <div className='border p-4 rounded-lg shadow-md' key={paste._id}>
                  <div className="font-semibold text-lg text-blue-700">{paste.title}</div>
                  <div className="text-gray-600 mt-2">{paste.content}</div>

                  <div className='flex flex-row gap-4 place-content-evenly mt-4'>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>
                      <NavLink to={`/?pasteId=${paste._id}`}>📝</NavLink>
                    </button>

                    <button className='bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600'>
                      <NavLink to={paste?._id}>👀</NavLink>
                    </button>

                    <button
                      className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600'
                      onClick={() => handleDelete(paste?._id)}>
                      🗑️
                    </button>

                    <button
                      className='bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600'
                      onClick={() => {
                        navigator.clipboard.writeText(paste?.content);
                        toast.success("Copied to clipboard");
                      }}>
                      📋
                    </button>

                    <button
                      className='bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600'
                      onClick={() => sharebutton(paste)}>
                      📤
                    </button>
                  </div>

                  <div className="text-sm text-gray-500 mt-2">
                    {formatDate(paste.createdAt)}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Paste
