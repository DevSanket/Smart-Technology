import React from "react";

interface IProps {
  src: string;
  name: string;
  edu: string;
  age: string | number;
  exp: string[];
}

export default function TeamCard({ src, name, edu, age, exp }: IProps) {
  return (
    <div className="flex-col items-center shadow gap-5  p-5 bg-gray-100 rounded-sm">
      <div className="flex items-center justify-start">
        <div className="w-[35%]">
          <img src={src} className="mx-auto h-[100px] w-auto " />
        </div>
        <div className="text-start hidden md:block">
          <p className="text-xl font-bold">{name}</p>
          <p className="text-lg uppercase">
            <b>EDUCATION</b> - {edu}
          </p>
          <p className="text-lg">
            <b>AGE</b> - {age}
          </p>
        </div>
      </div>
      <div className="text-start sm:block md:hidden">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-lg uppercase">
          <b>EDUCATION</b> - {edu}
        </p>
        <p className="text-lg">
          <b>AGE</b> - {age}
        </p>
      </div>
      <hr className="my-5" />
      <div className="text-start ">
        <p className="font-bold">WORK EXP :- </p>
        <p className="text-lg">{exp[0]}</p>
        <p>{exp[1]}</p>
      </div>
    </div>
  );
}
