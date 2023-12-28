import React from "react";

const sizeClasses = {
  txtInterExtraBold12: "font-extrabold font-inter",
  txtInterExtraBold30: "font-extrabold font-inter",
  txtInterExtraBold12WhiteA700: "font-extrabold font-inter",
  txtInterExtraBold60: "font-extrabold font-inter",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
