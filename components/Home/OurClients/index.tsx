import React from 'react'
import ClientCard from './ClientCard'

export default function OurClient() {
  return (
    <React.Fragment>
        <div className="w-full py-[200px]  flex-col  items-center justify-center text-center">
       <div className='flex-col space-y-10'>
        <p className='font-bold text-5xl text-center uppercase'>Our Clients</p>
        
        <div className='md:flex md:flex-wrap grid grid-cols-1 gap-10 w-full md:items-center md:justify-center'>
           <ClientCard src='/assets/clients/shapers.png' name='SHAPERS INDIA PVT. LTD' />
           <ClientCard src='/assets/clients/J.png' name='JINI POLYMECH ENGINEERING PVT LTD' />
           <ClientCard src='/assets/clients/user.jpg' name='SRI SRI INDUSTRIES' />
           <ClientCard src='/assets/clients/voss.png' name='VOSS EXOTECH AUTOMOTIVE PVT.LTD' />
           <ClientCard src='/assets/clients/protod.jpeg' name='PROTO-D ENGINEERING' />
        </div>
        </div>
        </div>
    </React.Fragment>
  )
}
