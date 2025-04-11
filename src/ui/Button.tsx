import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary' }) => {
  const baseStyles = "px-4 py-2 rounded-md font-semibold transition duration-300";

  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-[#000] text-white hover:bg-[#fff] hover:outline outline-2 outline-black hover:text-black",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
