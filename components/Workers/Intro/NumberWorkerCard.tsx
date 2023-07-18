import React from "react";

interface IProps {
  number: number;
  position: string;
  qualification: string;
}

export default function NumberWorkerCard({
  number,
  position,
  qualification,
}: IProps) {
  return (
    <div className="space-y-2">
      <p className="text-[4rem] font-bold text-blue-500">{number}</p>
      <div>
        <p>{position}</p>
        <p className="font-bold">{qualification}</p>
      </div>
    </div>
  );
}
