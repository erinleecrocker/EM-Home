import React from "react";
import Logo from "../../images/circle-logo-01.png";
import "./ProductTitle.css";

const ProductTitle = () => {
  return (
    <div className="mt-5 row">
      <div className="col-md-7 mr-4 color-one">
        <div className="row justify-content-end">
            {/* product title */}
          <h1 id="product-title">EM Home</h1>
        </div>
        <div className="row justify-content-end">
            {/* product detail text */}
          <p>iO's first product.</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="row">
            {/* product logo */}
          <img src={Logo} alt="em home logo" id="main-logo" />
        </div>
      </div>
    </div>
  );
};

export default ProductTitle;
