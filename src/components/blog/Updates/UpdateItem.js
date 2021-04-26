import YelloRoundButton from "components/Buttons/YelloRoundButton";
import React from "react";

function UpdateItem(props) {
  const { title, imageUrl, detail, _id } = props.update;

  return (
    <div className="Card">
      <div>
        <div className='foto'>
          <img src={imageUrl} alt={title} />
        </div>
        <div className='content'>
          <h3>{title}</h3>
          <p>{detail}</p>
        </div>
      </div>
     <YelloRoundButton text='Read more' />
    </div>
  );
}

export default UpdateItem;
