import React from "react";

export default function AboutIntro() {
  return (
    <React.Fragment>
      <div className="w-full py-[150px]  flex-col  items-center justify-center text-center">
        <div className="flex-col space-y-10 items-center">
          <p className="font-bold text-5xl text-center uppercase">
            Company Details
          </p>
          <img src="/assets/logo.jpg" className="h-[200px] w-auto mx-auto" />
          <div>
            <p className="text-4xl uppercase font-bold">Smart Technology</p>
            <p className="text-3xl uppercase font-bold">
              Total machining solutions
            </p>
          </div>
          <p className="text-2xl uppercase font-bold">
            All Types of Machining solutions Die & Moulds investment
            casting,press tools jigs & fixture Pattern, CAD Cam Facility
          </p>
        </div>
        <p className="text-4xl uppercase font-bold my-[100px]" id="#team">
          PERSONAL DETAILS
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-y-10">
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

          <div className="flex-col items-center">
            <img
              src="/assets/clients/user.jpg"
              className="mx-auto h-[100px] w-auto"
            />
            <p className="text-xl font-bold">MANOJ G BHALERAO</p>
            <p className="text-lg uppercase">
              <b>EDUCATION</b> - BE machicnical
            </p>
            <p className="text-lg">
              <b>AGE</b> - 31
            </p>
            <p className="font-bold">WORK EXP :- </p>
            <p className="text-lg">
              SHAPER INDIA PVT,LTD (MNC) ( 2 YEAR EXPERIENCE )
            </p>
            <p>SM AUTO PVT,LTD ( MNC ) (1.5 YEARS EXPERIENCE)</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
