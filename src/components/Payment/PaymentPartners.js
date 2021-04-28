import React from "react";
import photo1 from 'assets/photo1.jpg'
import photo2 from 'assets/photo2.jpg'
import YelloRoundButton from "components/Buttons/YelloRoundButton";
function PaymentPartners() {
  return (
    <div className="d-md-flex color-primary">
      <div className="col-md-6 mb-5">
        <div className="d-flex flex-column align-items-center">
          <img src={photo1} alt="mpesa" className=" mb-5" />
          <form>
            <legend className="mb-3 font-weight-bold capitalize">
              credit card info
            </legend>
            <div className="mb-3">
              <label className="d-block small uppercase" for="card_number">
                card number
              </label>
              <input type="text" id="card_number" name="card_number" />
            </div>
            <div className="mb-3">
              <label className="uppercase d-block small" for="card_holder_name">
                card holder's name
              </label>
              <input
                type="text"
                id="card_holder_name"
                name="card_holder_name"
              />
            </div>
            <div className="mb-3">
              <label className="uppercase d-block small" for="expire_date">
                expire date
              </label>
              <input type="date" id="expire_date" name="expire_date" />
            </div>
            <div className="mb-3">
              <label className="uppercase d-block small" for="cw">
                cw
              </label>
              <input type="number" id="cw" name="cw" />
            </div>
            <div className="d-flex mb-3">
              <YelloRoundButton text="submit" />
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-6 mb-5">
        <div className="d-flex flex-column align-items-center">
          <img src={photo1} alt="membesa" className=" mb-5" />
          <form>
            <div className=" mb-5 mt-3">
              <label for="phone_number" className="d-block small">
                phone number
              </label>
              <input type="text" id="phone_number" name="phone_number" />
            </div>
            <div className="d-flex flex-column">
              <YelloRoundButton text="submit" /> 
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentPartners;
