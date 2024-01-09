import { TPrimaryButton } from "@/types/ComponentsTypes";
import React from "react";

const PrimaryButton: React.FC<TPrimaryButton> = ({ type, text, onClick, css }) => {
  return (
    <button
      className={`"flex items-center space-x-3 ${css}  border-[1px] border-b-[2px] border-primary px-4 py-2 rounded-sm cursor-pointer"`}
      onClick={onClick}
      type={type}
    >
      <p className="text-sm">{text}</p>
    </button>
  );
};

export default PrimaryButton;
