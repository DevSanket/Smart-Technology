import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface IProps {
    icon : IconDefinition;
    title:string;
    description : string
}

export default function MissionCard({icon,title,description} : IProps) {
  return (
    <div className='flex-col items-center justify-center text-center bg-gray-100  py-10 px-5 shadow space-y-4'>
    <FontAwesomeIcon icon={icon}  size="3x" className='bg-pink-600 p-7 rounded-full text-white' />
    <p className='font-bold'>{title}</p>
    <p>{description}</p>
    </div>
  )
}
