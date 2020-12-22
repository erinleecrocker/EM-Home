import React from "react";
import LargeImage from "../../images/product-image-01.png";
import './LargeCard.css';

const LargeCard = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <img src={LargeImage} alt="product"/>
      </div>
      <div className="col-md-4 mt-5 ml-4">
        <h5 className="color-two"> Current Features</h5>
        <ul className="color-one">
          <li>Live and historical energy tracking</li>
          <li>
            Energy consumption reduction competitions with people you know
          </li>
          <li>Energy usage statistics</li>
        </ul>
      </div>
    </div>
  );
};

export default LargeCard;
