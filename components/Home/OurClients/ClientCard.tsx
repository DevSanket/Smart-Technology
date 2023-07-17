import React from 'react'

interface IProps{
    src : string;
    name :string;
}

export default function ClientCard({src,name} : IProps) {
  return (
    <div className='flex-col space-y-5 md:space-x-10 md:justify-center md:items-center md:mt-10 text-center '>
    <img src={src} className='h-[100px] w-auto mx-auto' />
    <p className='font-bold text-2xl'>{name}</p>
    </div>
  )
}
