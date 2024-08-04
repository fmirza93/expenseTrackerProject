// src/components/CustomButton.jsx
import React from 'react';

const Button = ({ onClick, children, variant }) => {
  const baseClasses = "min-w-[150px] text-center px-6 py-3 text-base m-1 cursor-pointer rounded-2xl transition-colors duration-300";

  const primaryClasses = "bg-primary text-white hover:bg-primaryHover border-none";
  const secondaryClasses = "bg-transparent border border-primary text-primary hover:bg-primaryHover hover:text-white";

  const classes = variant === "secondary" ? `${baseClasses} ${secondaryClasses}` : `${baseClasses} ${primaryClasses}`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
