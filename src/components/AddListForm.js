import React from "react";

function AddListForm() {
  const Btn = { padding: '1rem 2rem', color: 'white', backgroundColor: 'orange', margin: '1rem auto' };
  return (
    <div className=" addlist" style={{ padding: "10px 0 50px 0",fontWeight:'700' }}>
      <form>
        <div className="d-flex align-center justify-content-center mb-4">
          <label for="owner" className="capitalize">
            owner
          </label>
          <input
            type="radio"
            name="gender"
            id="owner"
            value="owner"
            className="mx-3"
            checked
          />
          <label for="agent" className="capitalize">
            agent
          </label>
          <input
            type="radio"
            name="gender"
            id="agent"
            value="agent"
            className="mx-3 border-dark border-top-0 border-right-0 border-left-0 border-bottom "
          />
        </div>
        <div className="pr-0">
          <div className="d-flex mr-0 mb-2">
            <label for="name" className="px-0 col-4 col-md-2">
              name/company
            </label>
            <input
              type="text"
              name="name"
              id="name"
              lassName="pr-0"
              className="w-100 border-dark border-top-0 border-right-0 border-left-0 border-bottom "
            />
          </div>
          <div className="d-md-flex px-0">
            <div className="d-flex col-md-6 px-0">
              <label for="email" className="px-0 col-4 mb-2 ">
                email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mb-2 w-100 border-dark border-top-0 border-right-0 border-left-0 border-bottom "
              />
            </div>
            <div className="d-flex col-md-6 px-0">
              <label for="phone" className="px-0 col-4 ml-md-5">
                tel no
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="mb-2 w-100 border-dark border-top-0 border-right-0 border-left-0 border-bottom "
              />
            </div>
          </div>
          <div className="d-flex mr-0 mb-2">
            <label for="property_name" className="px-0 col-4 col-md-2">
              Property name
            </label>
            <input
              type="text"
              name="property_name"
              id="property_name"
              className="mb-2 w-100 border-dark border-top-0 border-right-0 border-left-0 border-bottom "
            />
          </div>
          <div className="d-md-flex px-0">
            <label className="col-4 pl-0">location </label>
            <select name="country" className=" mb-2 mr-4">
              <option value="">country</option>
              <option value="">Kenya</option>
              <option value="">Nigeria</option>
              <option value="">USA</option>
              <option value="">UK</option>
            </select>
            <select name="Area" className=" mb-2">
              <option value="">area</option>
              <option value="">area 1</option>
              <option value="">area 2</option>
              <option value="">area 3</option>
              <option value="">area 4</option>
            </select>
          </div>
          <div className="my-3 d-md-flex">
            <div className="mb-sm-2 col-md-3 pl-0">
              <label className="col-3 col-md-6 pl-0">{" apartment"}</label>
              <input
                type="radio"
                value="apartment"
                name="building"
                className="mx-3"
              />
            </div>
            <div className="mb-sm-2 col-md-3">
              <label className="col-3 col-md-6 pl-0">{" Masionatt"}</label>
              <input
                type="radio"
                value="masionatt"
                name="building"
                className="mx-3"
              />
            </div>{" "}
            <div className="mb-sm-2 col-md-3">
              <label className="col-3 col-md-6 pl-0">{"Mansion"}</label>
              <input
                type="radio"
                value="mansion"
                name="building"
                className="mx-3"
              />
            </div>{" "}
            <div className="mb-sm-2 col-md-3">
              <label className="col-3 col-md-6 pl-0">{"Bungalow "}</label>
              <input
                type="radio"
                value="bungalow"
                name="building"
                className="mx-3"
              />
            </div>
          </div>
          <div>
            <div className="d-md-flex">
              <div className="col-md-4 pl-0 mb-2">
                <label for="entry_location" className="col-7 pl-0">
                  entry location
                </label>
                <input
                  type="text"
                  name="entry_location"
                  id="entry_location"
                  className="col-5 pl-0 rounded"
                />
              </div>
              <div className="col-md-4 pl-0 mb-2">
                <label for="doors_and_windows" className="col-7 pl-0">
                  doors && windows
                </label>
                <input
                  type="text"
                  name="doors_and_windows"
                  id="doors_and_windows"
                  className="col-5 pl-0 rounded"
                />
              </div>
              <div className="col-md-4 pl-0 mb-2">
                <label for="bathrooms" className="col-7 pl-0">
                  bathrooms
                </label>
                <input
                  type="text"
                  name="bathrooms"
                  id="bathrooms"
                  className="col-5 pl-0 rounded"
                />
              </div>
            </div>

            <div className="d-md-flex">
              <div className="col-md-4 align-center pl-0 mb-2">
                <label for="exterior_construction" className="col-7 pl-0">
                  exterior construction
                </label>
                <input
                  type="text"
                  name="exterior_construction"
                  id="exterior_construction"
                  className="col-5 pl-0 rounded"
                />
              </div>
              <div className="col-md-4 align-center pl-0 mb-2">
                <label for="year_built" className="col-7 pl-0">
                  year built
                </label>
                <input
                  type="text"
                  name="year_built"
                  id="year_built"
                  className="col-5 pl-0 rounded"
                />
              </div>
              <div className="col-md-4 align-center pl-0 mb-2">
                <label for="parking" className="col-7 pl-0">
                  packing
                </label>
                <input
                  type="text"
                  name="parking"
                  id="parking"
                  className="col-5 pl-0 rounded"
                />
              </div>
            </div>

            <div className="d-md-flex">
              <div className="col-md-4 align-center pl-0 mb-2">
                <label for="another" className="col-7 pl-0">
                  Another
                </label>
                <input
                  type="text"
                  name="another"
                  id="another"
                  className="col-5 pl-0 rounded"
                />
              </div>
              <div className="col-md-4 align-center pl-0 mb-2">
                <label for="lot_size" className="col-7 pl-0">
                  lot size
                </label>
                <input
                  type="text"
                  name="lot_size"
                  id="lot_size"
                  className="col-5 pl-0 rounded"
                />
              </div>
              <div className="col-md-4 pl-0 mb-2">
                <label for="nearby_ammenities" className="col-7 pl-0">
                  nearby ammenities
                </label>
                <input
                  type="text"
                  name="nearby_ammenities"
                  id="nearby_ammenities"
                  className="col-5 pl-0 border-dark rounded"
                />
              </div>
            </div>
          </div>
        </div>
        <button type="submit" style={Btn} className="rounded align-self-center text-bold">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddListForm;
