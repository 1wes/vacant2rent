import YelloRoundButton from "components/Buttons/YelloRoundButton";
import React from "react";

function EventItem(props) {
  const { title, detail, imageUrl } = props.event;
  return (
    <div className="col-sm-12 col-md-6 text-center mb-5 hover">
      <img src={imageUrl} alt={title} className="w-100 mb-2" />
      <h2 className="mb-2">{title}</h2>
      <p className="mb-2">{detail}</p>
      <div className="row flex-direction-row justify-content-between ">
        <div className="row align-items-center col-6">
          <div className="col-6 d-flex align-items-center">
            <span className="mr-3">Yes</span>
            <span className="text-yellow">103</span>
          </div>
          <div className="col-6 d-flex align-items-center">
            <span className="mr-3">May be</span>
            <span className="text-yellow">32</span>
          </div>
        </div>
        <div className="row align-items-center justify-content-center col-5">
          <i class="far fa-bell"></i>
          <YelloRoundButton text="Read More" className="" />
        </div>
      </div>
    </div>
  );
}

export default EventItem;
