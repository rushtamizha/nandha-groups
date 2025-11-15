import React from 'react'
import { IoMdClose } from "react-icons/io";
const Contact = () => {
  return (
    <div className='fixed top-1/2 left-1/2 -translate-x-1/2 z-99 w-100 '>
        <div className='bg-white p-6 rounded-xl font-stretch-105% shadow-xl border border-gray-200'>
            <div className='flex w-full justify-between items-center mb-4 text-red-500 '><p className='text-xl font-medium text-gray-900'>Contact Details </p><  IoMdClose className='bg-red-100 border rounded text-xl outline outline-red-100' /></div>
            <div><input className='p-2 w-full border my-1  rounded-lg border-gray-200 outline outline-gray-100 ' placeholder='Enter Your Name (optional )' type="text" /></div>
            <div><input className='p-2 w-full border my-1  rounded-lg border-gray-200 outline outline-gray-100 ' placeholder='Enter Your Name (optional )'  type="text" /></div>
            <div><input className='p-2 w-full border my-1  rounded-lg border-gray-200 outline outline-gray-100 ' placeholder='Enter Your Name (optional )'  type="text" /></div>
            <div><input className='p-2 w-full border my-1  rounded-lg border-gray-200 outline outline-gray-100 ' placeholder='Enter Your Name (optional )' type="text" /></div>
        </div>
    </div>
  )
}

export default Contact