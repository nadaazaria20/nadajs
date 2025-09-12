import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, disabled, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`bg-pink-600 text-white px-6 py-3 rounded shadow transition duration-300 ease-in-out transform hover:scale-110 hover:rotate-3 disabled:bg-gray-400 disabled:cursor-not-allowed ${
        disabled ? "" : "hover:bg-pink-600"
      }`}
    >
      {children}
    </button>
  );
}