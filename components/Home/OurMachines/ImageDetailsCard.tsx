import React from 'react'

interface IProps {
    src : string;
    title : string;
    description ?: string;
}

export default function ImageDetailsCard({src,title,description} : IProps) {
  return (
    <div className="flex-col items-center space-y-5 ">
    <img src={src}  className="w-[100px] h-[100px] rounded-full mx-auto object-cover"  />
   <div className="flex-col">
   <p className="font-bold ">{title}</p>
    <p>{description}</p>
   </div>
  </div>
  )
}
