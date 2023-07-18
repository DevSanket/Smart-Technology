import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurClient from "@/components/Home/OurClients";
import React from "react";

export default function Contact() {
  return (
    <main className="w-full h-full ">
      <Header />
      <div className="max-w-[1200px] mx-auto  px-5 md:px-0">
      <div className="w-full py-[150px]  flex-col  items-center justify-center text-center">
        <div className="flex-col space-y-10 items-center">
          <p className="font-bold text-5xl text-center uppercase">
            Contact Us
          </p>
          <img src="/assets/logo.jpg" className="h-[200px] w-auto mx-auto" />
          <div>
            <p className="text-4xl uppercase font-bold">Smart Technology</p>
            <p className="text-3xl uppercase font-bold">
              Total machining solutions
            </p>
          </div>
          <p className="text-2xl uppercase font-bold">
          Design, Development & Manufacturing
          </p>
          <p className="text-2xl uppercase font-bold">
          Works: Near Reliance office,Telco Road, Ganesh Nagar,
MIDC, Bhosari Pune-411026.
          </p>
          <p className="text-2xl uppercase font-bold">
         Email : Smartechnologgy14@gmail.com
          </p>
          <p className="text-2xl uppercase font-bold">
          MOBILE: 9370048964 / 9561477292/9975524589
          </p>
        </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}