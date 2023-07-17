import React from 'react'

interface IProps {
    src : string;
}

export default function SmallCardImage({src} : IProps) {
  return (
    <div
    className="md:h-[200px] sm:h-[160px] w-full flex items-center justify-center overflow-clip relative service-image-card"
  >
    <img
      src={src}
      alt="img-1"
      className="w-full h-full relative z-10 cursor-pointer"
    /> 
  </div>
  )
}
