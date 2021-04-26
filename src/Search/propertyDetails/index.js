import * as React from "react";
import classnames from "classnames";

import KeyFeatures from "../keyFeatures";
import Gallery from "../gallery";
// import Map from '../map'

import { asCurrency } from "../utils/number";
import styles from "./styles.module.css";
import LoveComponent from "components/LoveComponent";
import CompareDetails from "components/CompareDetails";
import DescriptionComponent from "components/Details/DescriptionComponent";
import PropertyList from "components/searchproperties/PropertyList";
import YelloRoundButton from "components/Buttons/YelloRoundButton";

function PropertyDetails({ listing }) {
  if (!listing) {
    return null;
  }

  const {
    image,
    title,
    address,
    description,
    price,
    features,
    details,
  } = listing;
  const priceClasses = classnames(styles.price, "text-success", "text-right");
  return (
    <div className='container'>
      <h2 className="color-primary">Property Review</h2>
      <div className="d-flex justify-content-between align-items-center color-primary">
        <h2 className="">{title}</h2>
        <p className="uppercase">Ksh {price}</p>
      </div>
      <p className="font-weight-bold">{address}</p>
      <img src={`/server/${image}`} alt="" className="w-100" />
      {/* <Gallery image={image} title={title} className='w-100'  /> */}

      <div className="d-flex justify-content-between py-3 align-center">
        <CompareDetails />
        <div className="d-flex align-center">
          <p className="mr-3 font-weight-bold">Compare</p>
          <i class="fas fa-exchange-alt"></i>
        </div>
      </div>

      <DescriptionComponent description={details} />
      <PropertyList count='3' />
      <div className='d-flex justify-content-center align-center    '>
        <YelloRoundButton text='edit' />
        <YelloRoundButton text='submit' />
      </div>
    </div>
  );
}

export default PropertyDetails;
