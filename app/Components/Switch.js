"use client";
import React from "react";

const Switch = ({ text, checked, onChange, bgColor, textColor, className }) => {
  return (
    <label className={`flex items-center space-x-2 cursor-pointer ${className}`}>
      <span className={`${textColor}`}>{text}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <div className={`w-10 h-5 flex items-center ${bgColor} rounded-full p-1 transition-all`}>
        <div
          className={`
            bg-white w-4 h-4 rounded-full shadow transform 
            duration-300 
            ${checked ? "translate-x-5" : ""}
          `}
        ></div>
      </div>
    </label>
  );
};

export default Switch;
