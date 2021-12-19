import React from "react";

export default function NewInput({ onInput }) {
  return (
    <React.Fragment>
      <span>
        <input type="text" onInput={onInput} />
      </span>
      <button>Click</button>
    </React.Fragment>
  );
}

export const Label = ({ children }) => {
  return <lable>{children}</lable>
}