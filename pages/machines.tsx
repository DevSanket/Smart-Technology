import AboutIntro from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurMachines from "@/components/Home/OurMachines";
import Instrument from "@/components/Workers/Instruments";

import React from "react";

export default function About() {
  return (
    <main className="w-full h-full ">
      <Header />
      <div className="max-w-[1200px] mx-auto  px-5 md:px-0">
        <OurMachines />
      </div>
      <Footer />
    </main>
  );
}
