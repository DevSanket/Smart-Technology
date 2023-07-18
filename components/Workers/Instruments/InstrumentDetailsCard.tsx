import React from "react";

interface IProp {
  src: string;
  name: string;
  size: string;
}

export default function InstrumentDetailsCard({ src, name, size }: IProp) {
  return (
    <div className="space-y-5">
      <img src={src} className="h-[100px] w-[100px] mx-auto" />
      <div className="space-y-2">
        <p className="font-bold">{name}</p>
        <p>{size} </p>
      </div>
    </div>
  );
}
