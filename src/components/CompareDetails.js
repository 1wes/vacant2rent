import React from "react";

function CompareDetails({ background, color }) {
  const bgc = background ? background : "transparent";
  const text_color = color ? color : "black";
  return (
    <div className="d-flex h5">
      <div className="mr-3 col-3">
        <p>bedrooms</p>
        <p>
          <i className="fas fa-bed mr-3"></i>
          <span>6</span>
        </p>
      </div>
      <div className="mr-3 col-3">
        <p>bathrooms</p>
        <p>
          <i className="mr-3 fas fa-bath"></i>
          <span>6</span>
        </p>
      </div>
      <div className="col-6">
        <p>area</p>
        <p className="h5">
          <i class="far fa-square mr-3"></i>
          <span>8000sq</span>
        </p>
      </div>
    </div>
  );
}

export default CompareDetails;
