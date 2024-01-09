import React, { ReactNode } from "react";
import { SlClose } from "react-icons/sl";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const ModalWithClose: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="bg-modalGrey backdrop-blur-[2px]  fixed top-0 bottom-0 left-0 h-[100vh] w-full flex justify-center items-center z-[9] ">
      <div className="bg-white text-[#292D32] rounded-[8px] p-6 md:w-auto w-[90%]">
        <div className="flex justify-between items-center">
          <p className="text-sm">Filter by:</p>
          <SlClose onClick={onClose} className="cursor-pointer" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalWithClose;
