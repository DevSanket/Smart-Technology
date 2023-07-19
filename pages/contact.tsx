import ContactCard from "@/components/Contact/ContactCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurClient from "@/components/Home/OurClients";
import { faEnvelope, faLocationDot, faMailForward, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Contact() {
  return (
    <main className="w-full h-full ">
      <Header />
      <div className="max-w-[1200px] mx-auto  px-5 md:px-0">
      <div className="w-full py-[150px]  grid grid-cols-1 md:grid-cols-2 gap-5">

        <div className="flex-col space-y-5 items-center">
            <p className="font-bold text-3xl">Contact us</p>
            <p>
            Feel free to reach out to us for any inquiries, collaborations, or opportunities. We are eagerly awaiting your message or call to assist you promptly.
            </p>

            <div className="grid grid-cols-1 gap-5">
              <div className="flex items-center space-x-5">
              <FontAwesomeIcon icon={faPhone} size="2xl" color="#5AFF17" />
              <div className="flex-col w-3/4">
                <p className="font-bold">Phone</p>
                <p>09370048964/9975524589</p>
              </div>
              </div>
              <div className="flex items-center space-x-5">
              <FontAwesomeIcon icon={faEnvelope} size="2xl" color="#17FFF8" />
              <div className="flex-col ">
                <p className="font-bold">Email</p>
                <p>smartechnologgy14@gmail.com</p>
              </div>
              </div>
              <div className="flex items-center space-x-5">
              <FontAwesomeIcon icon={faLocationDot} size="3x" color="#FF172C" />
              <div className="flex-col ">
                <p className="font-bold">Address</p>
                <p>NEAR RELIENCE OFFICE, TELCO ROAD GANESH NAGER,MIDC BHOSARI PUNE-411026</p>
              </div>
              </div>
            </div>
        </div>
        <ContactCard />
        </div>
      </div>
      <Footer />
    </main>
  );
}