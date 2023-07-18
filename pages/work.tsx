import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Instrument from "@/components/Workers/Instruments";
import Intro from "@/components/Workers/Intro";
import React from "react";

export default function Workers() {
  return (
    <main className="w-full h-full ">
      <Header />
      <div className="max-w-[1200px] mx-auto  px-5 md:px-0">
        <Intro />
        <Instrument />
      </div>
      <Footer />
    </main>
  );
}
