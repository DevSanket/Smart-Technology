import React from 'react'

interface IProps{
    src : string;
    name :string;
}

export default function ClientCard({src,name} : IProps) {
  return (
    <div className='flex-col space-y-5 space-x-10 justify-center items-center mt-10'>
    <img src={src} className='h-[100px] w-auto mx-auto' />
    <p className='font-bold text-2xl'>{name}</p>
    </div>
  )
}
