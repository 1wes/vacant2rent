import YelloRoundButton from "components/Buttons/YelloRoundButton";
import React from "react";
import image from "../../assets/team-4-470x470.png";
function DescriptionComponent({ description }) {
  return (
    <section className=''>
      <h2 className="color-primary">Description</h2>
      <div className="d-md-flex">
        <div className="w-100">
          <div className=" ">
            <p>{description}</p>
          </div>
          <div className="d-md-flex align-stretch">
            <div className="col-md-6">
              <img src={image} alt={"hello"} className="" />
            </div>
            <div className="text-center font-weight-bold text-dark col-md-6 justify-content-center d-flex align-center">
              <p className="align-self-center">view location</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className='text-center border pt-2 pb-4 px-4 rounded'>
            <img src={image} alt="hello" className= 'mb-3 rounded-circle' />
            <p className='capitalize color-primary h5 mb-1'>Virginia Mull</p>
            <p>to get contract request</p>
            <form>
              <div className= 'mb-3'>
                <label htmlFor="name">Name:</label>
                <input name="name" type="text" className= 'border-dark border-top-0 border-right-0 border-left-0 border-bottom p-1 w-100' />
              </div>
              <div className= 'mb-3'>
                <label htmlFor="email">Email:</label>
                <input name="email" type="email" className= 'border-dark border-top-0 border-right-0 border-left-0 border-bottom p-1 w-100' />
              </div>
              <div>
                <p className='color-primary h3'>12</p>
                <p>lorem ipsum</p>
                <YelloRoundButton text='Contact Agent'/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DescriptionComponent;
