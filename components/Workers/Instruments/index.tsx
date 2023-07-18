import React from "react";
import InstrumentDetailsCard from "./InstrumentDetailsCard";

export default function Instrument() {
  return (
    <React.Fragment>
      <div className="w-full  flex-col pb-[150px]  items-center justify-center text-center">
        <div className="flex-col space-y-10">
          <p className="font-bold text-5xl text-center uppercase">
            Instrument Details
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            ipsum expedita id tempore quaerat aliquid et aspernatur pariatur non
            eligendi?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-5 py-5">
            <InstrumentDetailsCard
              src="/assets/instruments/Caliper.png"
              name="Vernier Calliper"
              size="(0-150,0-300)"
            />

            <InstrumentDetailsCard
              src="/assets/instruments/digitalVernier.png"
              name="Digital Vernier Calliper"
              size="(0-150)"
            />
            <InstrumentDetailsCard
              src="/assets/instruments/micrometer.png"
              name="Micrometre"
              size="(0-25,25-50,50-75,75-100)"
            />
            <InstrumentDetailsCard
              src="/assets/instruments/bore-gauge.png"
              name="Bore Gauge"
              size="(18-35,35-60)"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
