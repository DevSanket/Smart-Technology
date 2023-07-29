import React from "react";
import TeamCard from "./TeamCard";

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
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          {/* <TeamCard
            name="NITIN S BARDESKAR"
            edu="Diploma in tool and die makers"
            age={36}
            src="/assets/clients/user.jpg"
            exp={[
              "SHAPER INDIA PVT,LTD (MNC) ( 9 YEAR EXPERIENCE )",
              "GLOTECH MOLD INDIA PVT,LTD ( MNC ) (1.5 YEARS EXPERIENCE)",
            ]}
          /> */}

          <TeamCard
            name="MANOJ G BHALERAO"
            edu="BE machicnical"
            age={31}
            src="/assets/clients/user.jpg"
            exp={[
              "SHAPER INDIA PVT,LTD (MNC) ( 2 YEAR EXPERIENCE )",
              "SM AUTO PVT,LTD ( MNC ) (1.5 YEARS EXPERIENCE)",
            ]}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
