import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <section>
      <div className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12 col-xl-6 offset-md-6 offset-lg-6 offset-xl-6 col-12">
              <div className="hero-right text-center">
                <h2>
                  Build Your Very Own <br />
                  Mobile App for IOS & Android
                </h2>
                <p style={{ color: "white" }}>
                  {" "}
                  We Create Apps for Individuals, Small Businesses, and
                  Enterprises
                </p>
                <a href="/price">Request a Free Quote Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
