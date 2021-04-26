import React, { useEffect, useState } from "react";
import PropertyItem from "./PropertyItem";

function PropertyList({count}) {

  const [propertyListings, setPropertyListings] = useState([])
  
  useEffect(() => {
    fetch('/server/listings.json')
      .then(res => res.json())
      .then(res => {
        setPropertyListings(res)
      })
  }, [])
  const listed = propertyListings.map((listing, index) => {
    return <PropertyItem listing={listing} key={listing.id} />
   })
    
  
  return (
    <section className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          propertyListings.map((listing, index) => {
            if (count) {
              if (index < count) {
                return <PropertyItem listing={listing} key={listing.id} />
              }else{ return}
            } else {
              return <PropertyItem listing={listing} key={listing.id} />
            }
           })
       }
      </div>
    </section>
  );
}

export default PropertyList;
