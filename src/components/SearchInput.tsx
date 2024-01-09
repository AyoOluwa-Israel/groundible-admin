import { TInputProps } from "@/types/ComponentsTypes";
import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchInput: React.FC<TInputProps> = ({ type, placeholder, value, onBlur, onChange, name, error }) => {
  return (
    <div className="border-gray-400 border-[1px] rounded h-[40px] flex items-center bg-white">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        className={` text-xs placeholder:text-xs pl-4 outline-none focus:border-darkGreen transition-all duration-300 bg-transparent w-[90%] ${
          error ? "border-red-500 bg-errorBg" : ""
        }`}
      />

      <FiSearch className="border-gray-400" />
    </div>
  );
};

export default SearchInput;
