import React from "react";
import "./Ctarea.css";
const Ctarea = () => {
  return (
    <section className="cta-area-wrapper">
      <div className="cta-area-content-wrapper p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-xl-8 col-lg-8 offset-md-2 offset-xl-2 offset-lg-2">
              <div className="cta-box text-center">
                <p>
                  We create User-Friendly Apps for every industry.
                  <br />
                  We offer Flexible Financing options.
                  <br />
                  Start developing your App, Today!
                </p>
                <a href="/price">Learn More</a>
              </div>
            </div>

            <div className="service-area row">
              <div className="section-title text-center">
                <h4>
                  Take a Chance
                  <br />
                  Bring Your Vision <br />
                  To Fruition
                </h4>
              </div>
              <div className="col-md-4 col-lg-4 col-xl-4 col-12 col-xs-12 col-sm-12 mt-5">
                <div className="single-service-wrapper">
                  <h4>Apps We Develop</h4>
                  <p>
                    IOS Development <br /> Android Development <br /> React
                    Native Development <br />
                    Flutter Development
                  </p>
                </div>
              </div>

              <div className="col-md-4 col-lg-4 col-xl-4 col-12 col-xs-12 col-sm-12">
                <div className="single-service-wrapper">
                  <h4>We Help Market Apps</h4>
                  <p>
                    We can help solve <br /> your company's marketing problems.
                    <br /> We can also put your App <br /> on our company's
                    platforms <br /> and on our company's marketing materials{" "}
                    <br /> in order to get your App more exposure
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 col-xl-4 col-12 col-xs-12 col-sm-12 mt-5">
                <div className="single-service-wrapper">
                  <h4>We Show You How To Make More Money With Your App</h4>
                  <p>
                    We can help you <br /> bring in more revenue <br /> through
                    your app <br /> using creativity & marketing tips
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ctarea;
