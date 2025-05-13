"use client"
import React from "react";

interface ButtonProps {
  label: string;
  cb?: Function;
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  cb,
  variant = "primary",
  size = "md",
  disabled = false,
  iconLeft,
  iconRight,
  className = "",
}) => {
  // Variant styles
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border border-gray-600 text-gray-600 hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  // Size styles
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };


  const handleClick=()=>{
    if(typeof cb === 'function'){
        cb()
    }
}

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`flex items-center gap-2 rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2
        ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}`}
    >
      {iconLeft && <span>{iconLeft}</span>}
      {label}
      {iconRight && <span>{iconRight}</span>}
    </button>
  );
};

export default Button;
