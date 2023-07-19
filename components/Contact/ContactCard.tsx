import React from 'react'

export default function ContactCard() {
  return (
    <div className='shadow-sm p-10  bg-white rounded-md'>
        <p className='font-bold text-center text-2xl'>Lets Have a Conversation</p>
        <form className='flex-col space-y-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 gap-0 mt-5'>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow" placeholder="Ex.John" required />
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black ">Last name</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow" placeholder="Ex.Doa" required />
        </div>
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black ">Email</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow" placeholder="Ex.test@gmail.com" required />
        </div>
        <div className='mt-5'>
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black ">Message</label>
        <textarea
            tabIndex={3}
            placeholder='Enter Message'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow"
        />
        </div>
        <input className="w-full mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 shadow" type="submit" />
        </form>
    </div>
  )
}
