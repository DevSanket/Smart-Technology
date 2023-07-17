import React from "react";
import SmallCardImage from "./SmallCardImage";
import ImageDetailsCard from "./ImageDetailsCard";

export default function OurMachines() {
  return (
    <React.Fragment>
      <div className="w-full py-[200px]  flex  items-center justify-center text-center">
        <div className="flex-col space-y-10">
          <p className='font-bold text-5xl uppercase'>Our Machines</p>
          <section className="grid grid-cols-1 md:grid-cols-4 gap-5 space-y-3" >
          
              <ImageDetailsCard src="/assets/Machines/M1.png" title="VMC Machine" description="COSMOS SIZE 850 X 500 X 500" />
              <ImageDetailsCard src="/assets/Machines/M3.png" title="Milling Machine" description="DUFOUR 3 850 X 390 X 400 (2 NOS)" />
              <ImageDetailsCard src="/assets/Machines/M2.png" title="MITR Machine" description="MIKROCUT 750 X 320 X 300 (2 NOS)" />
              <ImageDetailsCard src="/assets/Machines/M4.png" title="Lathe Machine" description="7 Feet 14 Inch (2 NOS)" />
              <ImageDetailsCard src="/assets/Machines/M5.jpg" title="Hacksaw" />
              <ImageDetailsCard src="/assets/Machines/M6.jpg" title="Bench Grinder" />
              <ImageDetailsCard src="/assets/Machines/M7.jpg" title="Air Compressor" />
              <ImageDetailsCard src="/assets/Machines/M8.jpg" title="Surfaces Digital Height Gauge" />
          </section>
          <section className="relative">
            <div className="grid tablet:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">
              <div className="md:h-[420px] sm:h-[160px] w-full flex items-center justify-center overflow-clip relative service-image-card">
                <img
                  src={"/assets/Machines/M2.png"}
                  alt="img-1"
                  className="w-full h-full relative z-10 cursor-pointer"
                />
              </div>
              <div className="grid tablet:grid-cols-2 md:grid-cols-2 gap-5">
                <SmallCardImage src="/assets/Machines/M1.png" />
                <SmallCardImage src="/assets/Machines/M2.png" />
                <SmallCardImage src="/assets/Machines/M3.png" />
                <SmallCardImage src="/assets/Machines/M4.png" />
              </div>
            </div>
          </section>
        
        </div>
      </div>
    </React.Fragment>
  );
}
