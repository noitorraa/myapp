"use client";
import React from "react";

const Input = ({
  onChange,
  value,
  bgColor,
  textColor,
  placeholder,
  disabled,
  type,
  className,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`
        px-3 py-2 border border-gray-600 rounded 
        ${bgColor} 
        ${textColor} 
        ${className}
        ${disabled ? "bg-gray-300 cursor-not-allowed" : "focus:ring-2 focus:ring-blue-500"} 
        outline-none
      `}
      disabled={disabled}
    />
  );
};

export default Input;
