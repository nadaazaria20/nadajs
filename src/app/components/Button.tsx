import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
};

export default function Button({ 
  children, 
  disabled, 
  variant = 'primary',
  size = 'md',
  className = '',
  ...props 
}: ButtonProps) {
  const baseClasses = "rounded shadow transition-all duration-300 ease-in-out transform font-semibold focus:outline-none focus:ring-4";
  
  const variants = {
    primary: "bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline: "border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const disabledClasses = "disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none";

  return (
    <button
      {...props}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${disabledClasses}
        ${!disabled && 'hover:scale-105 hover:shadow-lg active:scale-95'}
        ${className}
      `}
    >
      {children}
    </button>
  );
}