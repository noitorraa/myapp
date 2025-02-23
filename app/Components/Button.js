"use client";
import React from "react";

const Button = ({ onClick, bgColor, textColor, text, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded 
        ${bgColor} 
        ${textColor} 
        ${className} 
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"} 
        transition-all
      `}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
