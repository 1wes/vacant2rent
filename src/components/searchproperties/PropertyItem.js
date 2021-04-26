import CompareDetails from "components/CompareDetails";
import LoveComponent from "components/LoveComponent";
import React from "react";
import { Link } from "react-router-dom";

function PropertyItem({ listing }) {
  const { id, image, title, address, description, price } = listing;
  return (
    
    <Link to={`/search_property/${id}`} className='col-sm-12 col-md-4 car-link d-block' >
      <div className="property-card">
        <div className="w-100 top">
          <img src={`/server/${image}`} alt={title} className="w-100" />
          <div className="ovalay">
            <div className="">
              <button className="btn bg-yellow" style={{borderRadius:0}}>Verified</button>
            </div>
           <LoveComponent background='black' color='white' />
          </div>
        </div>
        <div className="p-2 text-dark">
          <h3 className="color-primary h4">{title}</h3>
          <p className="color-primary">{address}</p>
          <p>{description}</p>
          <CompareDetails />
          <p className="color-primary">Ksh {price}</p>
        </div>
      </div>
    </Link>
  );
}

export default PropertyItem;
