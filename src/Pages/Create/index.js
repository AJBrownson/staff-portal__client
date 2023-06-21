import React from "react";
import SignInForm from "../../Components/SignInForm";
import "./styles.css";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <div className="outer-wrapper">
        <div className="inner-wrapper">
          <SignInForm />
          <div className="button">
            <Link to="/staff">
              <button className="floating-btn">R</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
