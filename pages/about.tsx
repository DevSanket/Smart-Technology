import AboutIntro from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function About() {
  return (
    <main className="w-full h-full ">
      <Header />
      <div className="max-w-[1200px] mx-auto  px-5 lg:px-0">
        <AboutIntro />
      </div>
      <Footer />
    </main>
  );
}
