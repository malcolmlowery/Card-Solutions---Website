import React from "react";
import "./button";
import FlagIcon from "../../assets/images/flag_icon-01.png";
import ArrowDownIcon from "../../assets/images/arrow_down_icon-01.png";

const Button = ({ buttonType }) => {
  const renderButton = () => {
    switch (buttonType) {
      case "pillBtn": {
        return (
          <div className="button button--pillBtn">
            <img src={FlagIcon} />
            <p>USA</p>
            <img src={ArrowDownIcon} />
          </div>
        );
      }
      default: {
        return (
          <div className="button">
            <p>Default Button</p>
          </div>
        );
      }
    }
  };

  return renderButton();
};

export default Button;
