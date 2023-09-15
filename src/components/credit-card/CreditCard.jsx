import React from "react";
import "./credit-card";
import MasterCardIcon from "../../assets/images/mastercard-logo-01.png";

const CreditCard = ({
  cardColor,
  cardNumber,
  validDate,
  cardholderName,
  style,
  backgroundStyle,
}) => {
  return (
    <div className="credit-card" style={style}>
      <div
        className="credit-card__background"
        style={{ backgroundColor: cardColor }}
      ></div>
      <div className="credit-card__header">
        <div className="credit-card__header__logo">
          <img src={MasterCardIcon} />
          <p>Mastercard</p>
        </div>
        <div className="credit-card__header__chip"></div>
      </div>
      <div className="credit-card__body">
        <p>Card Number</p>
        <h1>{cardNumber}</h1>
      </div>
      <div className="credit-card__footer">
        <h1>{cardholderName}</h1>
        <div className="credit-card__footer__validDate">
          <p>Vaild Thru</p>
          <h1>{validDate}</h1>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
