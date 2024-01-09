import { TSelectInputProps, Option } from "@/types/ComponentsTypes";
import React from "react";

const SelectInput: React.FC<TSelectInputProps> = ({
  options,
  name,
  value,
  onChange,
  css,
  disabled = false,
  defaultValue,
  onBlur,
  error,
  label,
}) => {
  return (
    <div>
      <label htmlFor={name} className="text-sm text-primary mb-2">
        {label}
      </label>

      <div className=" flex flex-col w-full relative">
        <select
          name={name}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onBlur={onBlur}
          data-testid="select-input"
          className={` ${css} rounded-sm border-borderGrey border-[1px] h-[45px] pl-4 outline-none bg-gray-200 text-xs text-darkGrey cursor-pointer appearance-none bg-transparent pr-8 focus:border-darkGreen`}
        >
          {options.map((option: Option) => (
            <option key={option.value} value={option.value} className="bg-white cursor-pointer">
              {option.label}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute  inset-y-0 top-0 right-0 flex items-center pr-3">
          <svg className="fill-current h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6l-6 6z" clipRule="evenodd" />
          </svg>
        </div>
        {error && (
          <small className="text-red-500 text-xs transition-all duration-300" data-testid="error message">
            {error}
          </small>
        )}
      </div>
    </div>
  );
};

export default SelectInput;
