import React from "react";
import NumberWorkerCard from "./NumberWorkerCard";

export default function Intro() {
  return (
    <React.Fragment>
      <div className="w-full py-[150px]  flex-col  items-center justify-center text-center">
        <div className="flex-col space-y-10">
          <p className="font-bold text-5xl text-center uppercase">
            Worker Details
          </p>
          <p>
          Our dedicated team of skilled professionals brings expertise, passion, and commitment to every project, ensuring exceptional results and client satisfaction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-5">
            <NumberWorkerCard
              number={1}
              position="Designer"
              qualification="(B.E Mech)"
            />
            <NumberWorkerCard
              number={1}
              position="Accountant"
              qualification="(B.COM)"
            />
            <NumberWorkerCard
              number={1}
              position="Programmer"
              qualification="(B.E Mech)"
            />
            <NumberWorkerCard
              number={1}
              position="Quality"
              qualification="(DIP. Mech)"
            />
            <NumberWorkerCard
              number={2}
              position="Vmc Operator"
              qualification="(ITI)"
            />
            <NumberWorkerCard
              number={1}
              position="Trainee"
              qualification="(ITI)"
            />
            <NumberWorkerCard
              number={2}
              position="Milling Operator"
              qualification="(ITI)"
            />
            <NumberWorkerCard
              number={1}
              position="M1TR Operator"
              qualification="(ITI)"
            />
            <NumberWorkerCard
              number={1}
              position="Helper"
              qualification="(10th)"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
