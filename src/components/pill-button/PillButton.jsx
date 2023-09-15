import React from "react";
import "./pill-button";

const PillButton = ({ children, style }) => {
  return (
    <div className="pill-button" style={style}>
      {children}
    </div>
  );
};

export default PillButton;
