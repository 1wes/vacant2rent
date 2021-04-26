import React from "react";

function UpdateItem(props) {
  const { title, imageUrl} = props.update;

  return (
    <div className="ads-item col-sm-12 col-md-4">
          <img src={imageUrl} alt={title} /> 
          <h3>{title}</h3>
    </div>
  );
}

export default UpdateItem;
