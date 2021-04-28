import React from "react";
import RectangularButton from "components/Buttons/RectangularButton";

function PaymentCard({bgr, bgl, btnTextColor, week, btnWidth, btnText, price}) {
  console.log(bgr, bgl)
  return (
    <div className=" bg-light col-sm mx-1 my-2 px-0 pb-5 " style={{maxWidth:'300px'}}>
      <div
        className="card-header  text-center d-flex align-items-center justify-content-center "
        style={{ height: "130px", backgroundColor:`${bgl}`, borderRadius: "0 0 55% 55%" }}
      >
        <p className="uppercase text-white h2 font-weight-bold">{week}</p>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="text-center pb-4 pt-2">
          <p className="h3 mb-0 pb-2 font-weight-bold">Ksh {price}/-</p>
          <p className="uppercase mb-0 small pb-2 border-bottom">per listing</p>
        </div>
        <div className="w-75 capitalize">
          <p className="border-bottom pl-4  py-2 mb-0">
            <i className="fas fa-check-circle text-success pr-2"></i>{" "}
            <span className="small">Upload property listing</span>
          </p>
          <p className="border-bottom pl-4  py-2 mb-0">
            <i className="fas fa-check-circle text-success pr-2"></i>{" "}
            <span className="small">View property lister</span>
          </p>
          <p className="border-bottom pl-4  py-2 mb-0">
            <i className="fas fa-times-circle text-danger pr-2"></i>
            <span className="small">ulimited view of listers</span>
          </p>
          <p className="border-bottom pl-4  py-2 mb-0">
            <i className="fas fa-times-circle text-danger pr-2"></i>
            <span className="small">dashboard</span>
          </p>
          <div className="d-flex justify-content-center mt-4">
            <RectangularButton
              text={btnText}
              bgr={bgr}
              bgl={bgl}
              color={btnTextColor} 
              width={btnWidth}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
