import Image from "next/image";
import React from "react";

export default function InforContainer() {
  return (
    <div className="w-full md:py-[150px] py-[100px]  flex  items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex-col space-y-5 items-center justify-center animation-custom">
          {/* <img src='/assets/logo.jpg' height={200} width={200} /> */}
          <p className="font-bold text-3xl uppercase">
            Welcome to Smart Technology
          </p>
          <p>
            Comprehensive, one-stop mechanical engineering solution. SPM
            Manufacturing, Tool & Die Design, CAD design, and mould design.
            Competitive pricing, quality work, experienced engineers, reliable
            service, and preventive maintenance drive our success.
          </p>
        </div>
        <div className="flex justify-center animation-custom">
          <img
            src="/assets/StartImg.png"
            className="md:h-[300px] h-auto mt-0"
          />
        </div>
      </div>
    </div>
  );
}
