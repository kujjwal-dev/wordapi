import React from 'react'

export default function Information() {
  return (

    //serach section

    <div className='flex flex-row gap-2 items-center px-20'>
        <input type='search' name='search' id='search' placeholder='enter to get information' className='w-full rounded-full border bg-white px-4 py-1 text-gray-900 outline-none'  />
        <button type='submit' name='submit' id='submit' className='bg-blue-500 text-white px-4 py-1 rounded-full text-sm'>Search</button>
    </div>


  )
}
