import React from "react";

export const Button = React.forwardRef(
  ({ children, onClick, type, ...props }, ref) => {
    return (
      <button ref={ref} type={type || "button"} onClick={onClick} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Knopka, Broo";
