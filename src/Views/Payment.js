
import AppLayout from "components/Layouts/AppLayout";
import PaymentCard from "components/PaymentCard";
import React from "react";

function Payment() {
  return (
    <AppLayout>
      <main>
        <div className="container ">
          <div style={{ padding: "100px 0 50px 0" }}>
            <h1 className="color-primary text-center">Cart</h1>
          </div>
          <div className="cards row justify-content-around">
            <PaymentCard
              bgr='red'
              bgl='red'
              btnTextColor='white'
              week='1 week'
              btnWidth='50%'
              btnText='Select'
              price='800'
            />
            <PaymentCard
              bgr='green'
              bgl='green'
              btnTextColor='white'
              week='2 week'
              btnWidth='50%'
              btnText='Select'
              price='2,500'
            />
            <PaymentCard
              bgr='orange'
              bgl='orange'
              btnTextColor='white'
              week='4 week'
              btnWidth='50%'
              btnText='Select'
              price='4,000'
            />
          </div>
        </div>
      </main>
    </AppLayout>
  );
}

export default Payment;
