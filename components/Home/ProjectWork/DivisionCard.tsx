import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface IProps{
    icon : IconProp;
    title:string;
    description : string;
    color:string
}

export default function DivisionCard({icon,title,description,color} : IProps) {
  return (
    <div className='flex shadow p-5  gap-4 items-center'>
    <FontAwesomeIcon icon={icon} size='4x' className='w-4/12' color={color} />
    <div className='flex-col md:w-8/12'>
        <p className='font-bold'>{title}</p>
        <p>{description}</p>
    </div>
</div>
  )
}
