import * as React from 'react'
import oops from "../../../assets/team-1-800x800.jpg";
import woof from "../../../assets/team-2-800x800.jpg";
import mom from "../../../assets/team-3-800x800.jpg";
import idea from "../../../assets/team-4-470x470.png";

import {
  PropertyListingsProvider,
  PropertyListingsConsumer
} from '../../context/PropertyListingsProvider'

import BaseLayout from '../../baseLayout/index'
import Listing from '../../listing/index'
import Filter from '../../filter/index'
import PropertyItem from 'components/searchproperties/PropertyItem'

// button style
const buttonStyle = {
  padding: '5px 1.5rem',
  borderRadius: '50px',
  // margin: '.5rem auto',
  margin:'0 auto',
  fontWeight: 'bold',
  minWidth: '130px',
  width:'60%',
  // marginLeft:'6em',
  color:"purple",
  backgroundColor:'orange '
}

function Home() {
  return (
    <BaseLayout>
      <div className="container">

        {/* recent properties */}
        <PropertyListingsProvider>
          <PropertyListingsConsumer>
            {({ propertyListings, allListings, updateFilter }) => (
              <>
                <Filter
                  updateFilter={updateFilter}
                  count={propertyListings.length}
                  postcodes={allListings
                    .map(listing => listing.postcode.split(' ')[0])
                    .filter((item, i, arr) => arr.indexOf(item) === i)}
                />

              <h4 className="recent-properties" style={{textAlign:"center", color:"purple", marginTop:"2em", fontWeight:"bold"}}>
                Recent properties
              </h4>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  {propertyListings.map(listing => (
                    <PropertyItem listing={listing} />
                  ))}
                </div>
              </>
            )}
          </PropertyListingsConsumer>
        </PropertyListingsProvider>

        {/* about us */}
        <div className="flex flex-wrap items-center mt-3">

        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-blue-600">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
              </div>
            </div>
                    
              <div className="w-full md:w-5/12 px-4 mr-0 ml-0" style={{color:"purple"}}>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  About us
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700" style={{color:"purple", lineHeight:"1.5em"}}>
                  Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                  do eiusmod tempor incididuntut consec tetur adipisicing
                  elit,Lorem ipsum dolor sit amet.
                  Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                  do eiusmod tempor incididuntut consec tetur adipisicing
                  elit,Lorem ipsum dolor sit amet.
                  Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
                  do eiusmod tempor incididuntut consec tetur adipisicing
                  elit,Lorem ipsum dolor sit amet.
                </p>

                {/* button */}
                    <div className="read-more-about-us" style={{textAlign:"center"}}>
                      <button className="" style={buttonStyle}>
                        Read more
                      </button>
                    </div>
              </div>
            </div>

            {/* meet our agents */}
            <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-3">
              <div className="w-full lg:w-6/12 px-4 mb-0">
                <h2 className="text-4xl font-semibold" style={{color:"purple"}}>Meet our Agents</h2>
              </div>
            </div>
            <div className="flex flex-wrap mt-0" style={{}}>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={oops}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px"}}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold" style={{color:"purple"}}>Ryan Tompson</h5>
                    <p>
                      Some text
                    </p>

                    <p style={{marginTop:"-1em"}}>
                      Some text
                    </p>

                    <div className="no-of-properties" style={{color:"purple", marginTop:"-1em"}}>
                      <span style={{fontWeight:"bold", fontSize:"2em"}}>
                        8
                      </span>

                      <div style={{marginTop:"-.5em"}}>
                        Properties listed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={woof}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold" style={{color:"purple"}}>Romina Hadid</h5>

                    <p>
                      Some text
                    </p>

                    <p style={{marginTop:"-1em"}}>
                      Some text
                    </p>

                    <div className="no-of-properties" style={{color:"purple", marginTop:"-1em"}}>
                    <span style={{fontWeight:"bold", fontSize:"2em"}}>
                        12
                    </span>

                    <div style={{marginTop:"-.5em"}}>
                        Properties listed
                    </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={mom}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold" style={{color:"purple"}}>Alexa Smith</h5>
                    <p>
                      Some text
                    </p>

                    <p style={{marginTop:"-1em"}}>
                      Some text
                    </p>

                    <div className="no-of-properties" style={{color:"purple", marginTop:"-1em"}}>
                      <span style={{fontWeight:"bold", fontSize:"2em"}}>
                        5
                      </span>

                      <div style={{marginTop:"-.5em"}}>
                        Properties listed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={idea}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold" style={{color:"purple"}}>Jenna Kardi</h5>
                    <p>
                      Some text
                    </p>

                    <p style={{marginTop:"-1em"}}>
                      Some text
                    </p>

                    <div className="no-of-properties" style={{color:"purple", marginTop:"-1em"}}>
                      <span style={{fontWeight:"bold", fontSize:"2em"}}>
                        4
                      </span>

                      <div style={{marginTop:"-.5em"}}>
                        Properties listed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    <div className="flex flex-wrap items-center mt-3" style={{backgroundColor:"red"}}>

      ldjfkjdfjahsdfh

      <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-blue-600" style={{backgroundColor:"blue"}}> 

         me

         <div className="w-full md:w-8/12 px-4 mr-auto ml-auto" style={{backgroundColor:"maroon"}}> 
                      inner most
         </div>
      </div>
      
    </div>
    </BaseLayout>
  )
}

export default Home
