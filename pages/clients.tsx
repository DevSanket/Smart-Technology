import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurClient from "@/components/Home/OurClients";
import React from "react";

export default function Clients() {
  return (
    <main className="w-full h-full ">
      <Header />
      <div className="max-w-[1200px] mx-auto  px-5 md:px-0">
        <OurClient />
      </div>
      <Footer />
    </main>
  );
}
