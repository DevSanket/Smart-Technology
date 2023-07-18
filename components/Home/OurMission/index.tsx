import React from "react";
import {
  faScrewdriverWrench,
  faPaintBrush,
  faIndustry,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MissionCard from "@/components/MissionCard";

export default function OurMission() {
  return (
    <div id="mission" className="w-full  flex  items-center justify-center">
      <div className="flex-col space-y-10">
        <p className="font-bold text-5xl text-center uppercase">
          Mission Statement
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          <MissionCard
            icon={faScrewdriverWrench}
            title="Development"
            description="Our dedication to continuous development empowers us to evolve, adapt, and excel in a rapidly changing world."
          />
          <MissionCard
            icon={faPaintBrush}
            title="Design"
            description="Design is the essence of our creations, where creativity and aesthetics harmoniously merge to inspire extraordinary experiences."
          />
          <MissionCard
            icon={faIndustry}
            title="Manufacturing"
            description="Through meticulous craftsmanship and state-of-the-art processes, our manufacturing endeavors yield exceptional quality and precision in every product."
          />
          <MissionCard
            icon={faCheckCircle}
            title="Quality"
            description="Quality is ingrained in our DNA, driving us to uphold unwavering standards, exceed expectations, and deliver unparalleled excellence."
          />
        </div>

        <p>
          Our mission is to build our reputation for integrity, excellence, and
          leadership as one of the finest Engineering companies by continuously
          improving the standards and quality of our services; Constantly
          striving to exceed each client’s expectations; Maintaining our
          dedication to the highest moral principles and; Providing a
          challenging and secure environment for our people.
        </p>
      </div>
    </div>
  );
}
