import Image from 'next/image'
import React from 'react'

export default function InforContainer() {
  return (
    <div className='w-full py-[200px]  flex  items-center justify-center text-center'>
       
       <div className='flex-col space-y-5'>
        {/* <img src='/assets/logo.jpg' height={200} width={200} /> */}
        <p className='font-bold text-5xl'>Welcome to Smart Technology</p>
        <p>SMART TECHNOLOGY is a brand-new tooling solution, covering most accepts of 
work in the area of Mechanical engineering ranging from SPM Manufacturing, Tool & Die 
Design, to CAD design and mould design, all in one place! 
 Our success is based on the continuous commitment that SMART Technology gives to 
all our clients by being up-to-date with the latest processes, and importantly, in this time of 
rising costs – competitive pricing structure. 
Our consistency of work quality, experienced mechanical engineers, reliable service, and 
preventative maintenance have also contributed towards our success.</p>
       </div>
      
    </div>
  )
}
