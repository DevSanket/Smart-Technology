import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface IProps {
  icon: IconDefinition;
  title: string;
  description: string;
}

export default function MissionCard({ icon, title, description }: IProps) {
  return (
    <div className="flex-col items-center justify-center  bg-white  py-10 px-5 text-center shadow space-y-4 hover:scale-105">
      <FontAwesomeIcon
        icon={icon}
        size="3x"
        className="bg-blue-400 p-7 rounded-full text-white "
      />
      <p className="font-bold bg-white">{title}</p>
      <p className="text-start bg-white">{description}</p>
    </div>
  );
}
