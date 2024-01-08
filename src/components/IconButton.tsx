import { TIconButton } from "@/types/ComponentsTypes";
import React from "react";

const IconButton: React.FC<TIconButton> = ({ type, text, position, onClick, icon }) => {
  return (
    <button
      className="flex items-center space-x-3 bg-[#ECE4FF] border-[1px] border-b-[2px] border-primary px-4 py-2 rounded-sm cursor-pointer"
      onClick={onClick}
      type={type}
    >
      {position === "left" ? <div>{icon}</div> : null}

      <p className="text-sm">{text}</p>

      {position === "right" ? <div>{icon}</div> : null}
    </button>
  );
};

export default IconButton;
