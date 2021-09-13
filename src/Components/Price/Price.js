import React from "react";
import Header from "../Home/Header/Header";
import "./Price.css";
const Price = () => {
  const style1 = {
    maxWidth: "400px",
    margin: "auto",
  };
  return (
    <div>
      <Header></Header>

      <form className="form1">
        <h2 className="text-center">Request a Free Quote Now</h2>
        <p className="text-center">
          {" "}
          Exceptional Customer Service | Flexible Financing Options Our Team of
          Experts will help you Innovate and Market Your App
        </p>
        
        <div className="Icon-inside name">
          <input type="text" placeholder="Name" />
          <i className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
         
        </div>
      
        <div className="Icon-inside email mt-3">
          <input type="text" placeholder="Email" />
          <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>
          <button type="submit " class="btn btn-danger bt2 my-1">
          GET IN TOUCH
        </button>
        </div>
 
        <div className="Icon-inside phone ">
          <input type="text" placeholder="Phone " />
          <i className="fa fa-phone fa-lg fa-fw" aria-hidden="true"></i>
        </div>
        <textarea id="w3review" name="w3review" placeholder="Message" rows="4" cols="55"></textarea> <br/>
        <button type="submit " class="btn btn-danger bt1 my-1">
          SUBMIT
        </button>
       <div>
       
       </div>
      </form>
    </div>
  );
};

export default Price;
