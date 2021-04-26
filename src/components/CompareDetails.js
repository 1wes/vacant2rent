import React from "react";

function CompareDetails({ background, color }) {
  const bgc = background ? background : 'transparent';
  const text_color = color ? color : 'black';
  return (
    <div className="d-flex">
            <div className="mr-3">
              <p>bedrooms</p>
              <p>
                <i className="mr-3">bed</i>
                <span>6</span>
              </p>
            </div>
            <div className="mr-3">
              <p>bathrooms</p>
              <p>
                <i className="mr-3">bath</i>
                <span>6</span>
              </p>
            </div>
            <div>
              <p>area</p>
              <p>
                <i className="mr-3">area</i>
                <span>8000sq</span>
              </p>
            </div>
          </div>
  );
}

export default CompareDetails;
