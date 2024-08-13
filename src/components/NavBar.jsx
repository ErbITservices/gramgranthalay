import { useState } from "react";

function NavBar({ titel }) {
  // const [login, loginstate] = useState();
  return (
    <center>
      <div className="head">
        <div className="logodiv">
          <img className="logo" src="src/assets/logo.png" alt="logo" />
        </div>
        <div className="titel">
          <h1>
            {titel}
            <span className="icon"> </span>{" "}
          </h1>
        </div>
      </div>
    </center>
  );
}
export default NavBar;
