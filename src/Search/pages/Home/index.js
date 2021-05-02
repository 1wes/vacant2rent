import * as React from 'react'
import oops from "../../../assets/team-1-800x800.jpg";
import woof from "../../../assets/team-2-800x800.jpg";
import mom from "../../../assets/team-3-800x800.jpg";
import idea from "../../../assets/team-4-470x470.png";
import aboutus from "../../../assets/aboutus.png";
import houseclear from "../../../assets/houseclear.png";
import "./index.css";
import {FaPhoneAlt} from "react-icons/fa"
import insight1 from "../../../assets/insight1.png";
import insight2 from "../../../assets/insight2.png";
import insight3 from "../../../assets/insight3.png";
import insight4 from "../../../assets/insight4.png";

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

const listingButtonStyle={
  padding: '5px 1.5rem',
  borderRadius: '50px',
  // margin: '.5rem auto',
  margin:'0 auto',
  fontWeight: 'bold',
  minWidth: '130px',
  width:'20%',
  // marginLeft:'6em',
  color:"purple",
  backgroundColor:'orange '
}

const RectangularButton={
  padding: '15px 15px 15px 15px',
  borderRadius: '10px',
  // margin: '.5rem auto',
  margin:'0 auto',
  fontWeight: 'bold',
  minWidth: '130px',
  width:'30%',
  // marginLeft:'6em',
  color:"purple",
  backgroundColor:'orange ',
  marginTop:"-1em"
}

function Home() {
  return (
    <BaseLayout>
      <div className="">

        {/* recent properties */}
        <div className="container">
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
        </div>

        {/* insights */}
        <div className="flex flex-wrap items-center mt-3" id="insights" style={{color:"white",backgroundColor:""}}>
          <div className="mt-5 container" style={{backgroundColor:"", textAlign:"center"}}>
              <div className="w-full md:w-8/12 px-4 mr-auto ml-auto">
                <h2 style={{fontWeight:"bold"}}>
                  DID YOU KNOW YOU CAN BECOME VERIFIED?
                </h2>
              </div>    
          </div>
          <div className="w-full md:w-6/12 px-4 mr-auto ml-auto" style={{backgroundColor:""}}>
            <div className="relative flex flex-col min-w-0 break-words  w-full md:w-6/12 mr-0 ml-auto mb-0"
             style={{backgroundColor:"", display:"", verticalAlign:"", marginRight:"auto"}}>
              <img src={insight1} alt="insight1"style={{height:"auto", width:"100%",maxWidth:"10em", float:"left"}} />
              <span style={{float:"right"}}>There is some text here</span>
            </div>
          </div>
            
          <div className="w-full md:w-6/12 px-4 mr-auto ml-auto" style={{color:"white",backgroundColor:"" }}>
            <div className="relative flex flex-col min-w-0 break-words  w-full md:w-6/12 mr-auto ml-0 mb-0" style={{backgroundColor:""}}>
              <img src={insight2} alt="insight2" style={{height:"auto", width:"100%",maxWidth:"10em"}}/>There is some text here
            </div> 
          </div>

          <div className="w-full md:w-6/12 px-4 mr-auto ml-auto" style={{color:"white",backgroundColor:""}}>
            <div className="relative flex flex-col min-w-0 break-words  w-full md:w-6/12 mr-3 ml-auto mb-0" style={{backgroundColor:""}}>
              <img src={insight3} alt="insight3" style={{height:"auto", width:"100%",maxWidth:"10em", align:"left"}} />There is some text here
            </div>
          </div>
            
          <div className="w-full md:w-6/12 px-4 mr-auto ml-auto" style={{color:"white",backgroundColor:"" }}>
            <div className="relative flex flex-col min-w-0 break-words  w-full md:w-6/12 mr-auto ml-0 mb-0" style={{backgroundColor:""}}>
              <img src={insight4} alt="insight4" alt="insight4" style={{height:"auto", width:"100%",maxWidth:"10em",align:"left"}} />
              <span>There is some text here</span>
            </div>
          </div>

          <div className="mt-5 container" style={{backgroundColor:"", textAlign:"center"}}>
              <div className="w-full md:w-8/12 px-4 mr-auto ml-auto mt-0 mb-5">
                    <button style={RectangularButton}>
                      LIST  NOW
                    </button>
              </div>    
          </div>

        </div>
        
        <div className="container">
        <div className="flex flex-wrap items-center mt-3">
          {/* about us */}
          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 rounded-lg">
                <img
                  alt="..."
                  src={aboutus}
                  className="w-full align-middle rounded-t-lg"
                />
              </div>
            </div>
                    
              <div className="w-full md:w-5/12 px-4 mr-0 ml-0" style={{color:"purple"}}>
                <h3 className="text-3xl mb-2 mt-0 font-semibold leading-normal" style={{textAlign:"center"}}>
                  About us
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700" style={{color:"black",fontSize:"15px", lineHeight:"1.5em"}}>
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
            </div>

            {/* meet our agents */}
          <section className="pt-5 pb-48">
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
                    <h5 className="text-xl font-bold" style={{color:"purple"}}>Virginia Muli </h5>
                    <ul>
                      <li className="agent-phone-number">
                        <div>
                          08784758347 <span><FaPhoneAlt/></span>
                        </div>                        
                      </li>

                      <li>

                      </li>
                    </ul>

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
                <div className="px-3">
                  <img
                    alt="..."
                    src={woof}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold" style={{color:"purple", width:"100%"}}>Shadrack Omwami</h5>

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
                    src={mom}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold" style={{color:"purple"}}>Vincent Omolo</h5>
                    <p>
                      Some text
                    </p>

                    <p style={{marginTop:"-1em"}}>
                      Some text
                    </p>

                    <div className="no-of-properties" style={{color:"purple", marginTop:"-1em"}}>
                      <span style={{fontWeight:"bold", fontSize:"2em"}}>
                        6
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
                    <h5 className="text-xl font-bold" style={{color:"purple"}}>Sarah Wanjiru</h5>
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

    <div className="flex flex-wrap items-center" id="listing-cta" 
    style={{marginTop:"-10em"}}>
      <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 mt-1"> 
         <div className="w-full md:w-6/12 px-4 mr-auto ml-auto" style={{textAlign:"center", color:"whitesmoke", backgroundColor:"yell"}}> 
            <div className="agent-prompt">
                  <p style={{fontWeight:"bold", fontSize:"30px", marginBottom:"0", marginTop:"1.5em"}}>
                    ARE YOU AN AGENT WITH HOUSES READY TO BE LISTED?
                  </p>

                  <hr style={{border:"1px solid white", marginTop:"0"}}/>

                  <p style={{fontWeight:"bold"}}>
                    Lets walk this path together with less hustle 
                  </p>

                  <div className="listing-redirect" style={{marginBottom:"1.5em"}}>
                      <button style={listingButtonStyle}>
                          List with us
                      </button>
                  </div>
            </div>
         </div>
      </div>      
    </div>

    <div className="flex flex-wrap items-center" id="news-updates-header" 
    style={{marginTop:"1em"}}>
      <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 mt-4"> 
         <div className="w-full md:w-8/12 px-4 mr-auto ml-auto" style={{textAlign:"center", color:"whitesmoke", backgroundColor:"yell"}}> 
            <div className="updates-header">
                <h2 style={{textAlign:"center", color:"purple",fontWeight:"bold"}}>Updates and News</h2>
            </div>
         </div>
      </div>      
    </div>

    {/* updates */}
    <div className="container" style={{backgroundColor:""}}>
      <div className="flex flex-wrap items-left mt-0">

        <div className="w-full md:w-2/12 px-4 mr-0 ml-0" style={{backgroundColor:"", width:"20em"}}>
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-0" style={{height:"100%", width:"100%"}}>
            <img
              alt="..."
              src={houseclear}
              className="w-full align-left"
              style={{
                height:"100%",
                width:"100%",
                // maxWidth:"20em"
              }}
            />
          </div>
        </div>
            
        <div className="w-full md:w-6/12 px-4 mr-0 ml-5" style={{color:"purple",backgroundColor:"" }}>
          <h3 className="text-2xl mb-2 font-semibold leading-normal" style={{width:"60%"}}>
            What you need to know about furnished
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-0 text-gray-700" style={{
            backgroundColor:"",
            color:"black", 
            lineHeight:"1.3em", 
            fontSize:"15px", 
            width:"100%"
            }}>
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
      </div>
    </div>
    <hr style={{border:"1px dotted black",marginTop:"1em"}} />

    <div className="flex flex-wrap items-left mt-0">

      <div className="w-full md:w-2/12 px-4 mr-0 ml-0" style={{backgroundColor:"", width:"20em"}}>
        <div className="relative flex flex-col min-w-0 break-words  w-full mb-0" style={{height:"100%", width:"100%"}}>
          <img
            alt="..."
            src={houseclear}
            className="w-full align-left"
            style={{
            height:"100%",
            width:"100%",
            // maxWidth:"20em"
             }}
           />
         </div>
        </div>
    
        <div className="w-full md:w-6/12 px-4 mr-0 ml-5" style={{color:"purple",backgroundColor:"" }}>
            <h3 className="text-2xl mb-2 font-semibold leading-normal" style={{width:"60%"}}>
            Covid 19 and real estate
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-0 text-gray-700" style={{
              backgroundColor:"",
              color:"black", 
              lineHeight:"1.3em", 
              fontSize:"15px", 
              width:"100%"
              }}>
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
          </div>
        </div>

        <div className="news-cta-button" style={{marginTop:"3.5em", textAlign:"center"}}>
            <button style={listingButtonStyle}>
                Read more
            </button>
        </div>
      </div>
    </BaseLayout>
  )
}

export default Home
