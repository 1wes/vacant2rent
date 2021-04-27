import AddListForm from "components/AddListForm";
import AppLayout from "components/Layouts/AppLayout";
import AddressForm from "Payment/AddressForm";
import React from "react";

function AddLists() {
 
  return (
    <AppLayout>
      <main className="color-primary">
        <div className="container">
          <div style={{ padding: "100px 0 50px 0" }}>
            <h1 className="color-primary text-center">Add Property</h1>
          </div>
          <AddListForm />
        </div>
      </main>
    </AppLayout>
  );
}

export default AddLists;
