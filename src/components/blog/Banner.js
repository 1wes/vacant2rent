import LogoTitle from "components/LogoTitle";
import React from "react";

function Banner() {
  return (
    <header>
      <div className="blog-banner flex col text-white">
        <div>
          <img src="" alt="logo" />
          <LogoTitle />
        </div>
        <p className="uppercase" style={{fontSize:'24px'}}>Welcome to </p>
        <h1 className="uppercase" style={{fontSize:'72px', fontWeight:900}}>Our Blog</h1>
        <p>April 25</p>
      </div>
    </header>
  );
}

export default Banner;
