import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cards from "../cards/Cards";

export default class ViewProperty extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Helmet>
          <style type="text/css">{`
            
                  body {
                    background: blue url(https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);
                    background-repeat: no-repeat;
                    background-size: cover;
                    opacity:0.9;
                    font: 13px 'Lucida sans', Arial, Helvetica;
                    color: #eee;
                    text-align: center;
                }
                
                a {
                    color: #ccc;
                }
                
                /*-------------------------------------*/
                
                .cf:before, .cf:after{
                  content:"";
                  display:table;
                }
                
                .cf:after{
                  clear:both;
                }
            
                .cf{
                  zoom:1;
                }
            
                /*-------------------------------------*/	
                
                .form-wrapper {
                    width: 550px;
                    padding: 15px;
                    margin: 150px auto 50px auto;
                    background: #444;
                   
                    -moz-border-radius: 10px;
                    -webkit-border-radius: 10px;
                    border-radius: 10px;
                    -moz-box-shadow: 0 1px 1px rgba(0,0,0,.4) inset, 0 1px 0 rgba(255,255,255,.2);
                    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.4) inset, 0 1px 0 rgba(255,255,255,.2);
                    box-shadow: 0 1px 1px rgba(0,0,0,.4) inset, 0 1px 0 rgba(255,255,255,.2);
                }
                
                .form-wrapper input {
                    width:70%;
                    height: 20px;
                    padding: 10px 5px;
                    float: left;    
                    font: bold 15px 'lucida sans', 'trebuchet MS', 'Tahoma';
                    border: 0;
                    background: #eee;
                    -moz-border-radius: 3px 0 0 3px;
                    -webkit-border-radius: 3px 0 0 3px;
                    border-radius: 3px 0 0 3px;      
                }
                
                .form-wrapper input:focus {
                    outline: 0;
                    background: #fff;
                    -moz-box-shadow: 0 0 2px rgba(0,0,0,.8) inset;
                    -webkit-box-shadow: 0 0 2px rgba(0,0,0,.8) inset;
                    box-shadow: 0 0 2px rgba(0,0,0,.8) inset;
                }
                
                .form-wrapper input::-webkit-input-placeholder {
                   color: #999;
                   font-weight: normal;
                   font-style: italic;
                }
                
                .form-wrapper input:-moz-placeholder {
                    color: #999;
                    font-weight: normal;
                    font-style: italic;
                }
                
                .form-wrapper input:-ms-input-placeholder {
                    color: #999;
                    font-weight: normal;
                    font-style: italic;
                }    
                
                .form-wrapper button {
                    overflow: visible;
                    position: relative;
                    float: right;
                    width:15%;
                    // padding:3Spx;
                    border: 0;
                    cursor: pointer;
                    // height: 40px;
                    // width: 20%;
                    font: bold 15px/40px 'lucida sans', 'trebuchet MS', 'Tahoma';
                    color: #fff;
                    text-transform: uppercase;
                    background:rgb(248, 103, 6);
                    -moz-border-radius: 0 3px 3px 0;
                    -webkit-border-radius: 0 3px 3px 0;
                    border-radius: 0 3px 3px 0;      
                    text-shadow: 0 -1px 0 rgba(0, 0 ,0, .3);
                }   
                  
                .form-wrapper button:hover{		
                    background: #e54040;
                }	
                  
                .form-wrapper button:active,
                .form-wrapper button:focus{   
                    background: #c42f2f;    
                }
                
                .form-wrapper button:before {
                    content: '';
                    position: absolute;
                    border-width: 8px 8px 8px 0;
                    border-style: solid solid solid none;
                    border-color: transparent #d83c3c transparent;
                    top: 12px;
                    left: -6px;
                }
                
                .form-wrapper button:hover:before{
                    border-right-color: #e54040;
                }
                
                .form-wrapper button:focus:before{
                    border-right-color: #c42f2f;
                }    
                
                .form-wrapper button::-moz-focus-inner {
                    border: 0;
                    padding: 0;
                }
            .byline p{
              text-align:center;
              color:#c6c6c6;
              font: bold 18px Arial, Helvetica, Sans-serif;
              text-shadow: 0 2px 3px rgba(0,0,0,0.1);
            }
            
            .byline p a{
              color:#d83c3c;
              text-decoration:none;
            }


   
                  `}</style>
        </Helmet>

        <form class="form-wrapper cf" style={{ marginBottom: "15rem" }}>
          <input
            type="text"
            placeholder="Enter your V2R code here..."
            className="p-4"
            style={{ marginRight: "2rem" }}
            required
          />
          <button type="submit">OK</button>
        </form>

        <Cards />
        <Footer />
      </div>
    );
  }
}
