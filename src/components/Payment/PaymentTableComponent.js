import React from "react";

function PaymentTableComponent() {
  return (
    <div
      className="border pay w-md-50 d-flex flex-col justify-content-center align-items-center color-primary p-3"
      style={{ borderRadius: "50px", margin: "1rem auto" }}
    >
      <table className="">
        <thead>
          <tr>
            <th className="border-left-0 border-top-0">No.</th>
            <th className="border-top-0">Name of property</th>
            <th className="border-top-0">period of listing</th>
            <th className="border-right-0 border-top-0">price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-left-0">1.</td>
            <td>EdenVill App</td>
            <td>
              <select>
                <option value="1 weeks" className="">
                  1 week
                </option>
                <option value="2 weeks">2 weeks</option>
                <option value="3 weeks">3 weeks</option>
                <option value="4 weeks">4 weeks</option>
              </select>
            </td>
            <td className="border-right-0">2500/-</td>
          </tr>
          <tr>
            <td className="border-left-0">2.</td>
            <td>Smart Vill</td>
            <td>
              <select>
                <option value="1 weeks">1 week</option>
                <option value="2 weeks">2 weeks</option>
                <option value="3 weeks">3 weeks</option>
                <option value="4 weeks">4 weeks</option>
              </select>
            </td>
            <td className="border-right-0">1500/-</td>
          </tr>
          <tr>
            <td className="border-left-0">3.</td>
            <td>Another Vill</td>
            <td>
              <select>
                <option value="1 weeks">1 week</option>
                <option value="2 weeks">2 weeks</option>
                <option value="3 weeks">3 weeks</option>
                <option value="4 weeks">4 weeks</option>
              </select>
            </td>
            <td className="border-right-0">2500/-</td>
          </tr>
          <tr>
            <td className="border-left-0">4.</td>
            <td>SomeMore Vill</td>
            <td>
              <select>
                <option value="1 weeks">1 week</option>
                <option value="2 weeks">2 weeks</option>
                <option value="3 weeks">3 weeks</option>
                <option value="4 weeks">4 weeks</option>
              </select>
            </td>
            <td className="border-right-0">2500/-</td>
          </tr>
          <tr>
            <td className="border-right-0 border-left-0"></td>
            <td className="border-right-0 border-left-0"></td>
            <td colspan="2" className="border-right-0 border-left-0">
              <p className="d-flex justify-content-between mb-0 border p-1">
                <span className="">Total</span>
                <span className="">{"2555"}/-</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button
          className="px-4 py-2 font-weight-bold my-3 yellow-bg"
          style={{ borderRadius: "50px" }}
        >
          Add Property <i className="fas fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default PaymentTableComponent;
