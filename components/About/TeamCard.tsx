import React from "react";

export default function TeamCard() {
  return (
    <div className="flex-col items-center">
      <img
        src="/assets/clients/user.jpg"
        className="mx-auto h-[100px] w-auto"
      />
      <p className="text-xl font-bold">NITIN S BARDESKAR</p>
      <p className="text-lg uppercase">
        <b>EDUCATION</b> - Diploma in tool and die makers
      </p>
      <p className="text-lg">
        <b>AGE</b> - 36
      </p>
      <p className="font-bold">WORK EXP :- </p>
      <p className="text-lg">
        SHAPER INDIA PVT,LTD (MNC) ( 9 YEAR EXPERIENCE )
      </p>
      <p>GLOTECH MOLD INDIA PVT,LTD ( MNC ) (1.5 YEARS EXPERIENCE)</p>
    </div>
  );
}
