import { useState } from "react";

function NavBar({ titel }) {
  // const [login, loginstate] = useState();
  return (
    <center>
      <div className="head">
        <div className="logodiv">
          <img className="logo" src="src/assets/logo1.jpg" alt="logo" />
        </div>
        <div className="titel">
         
          <h2>SPORTS, YOUTH & CULTURAL ACTIVITIES DEPARTMENT</h2>
          <br />
          <h4>DIRECTOR OF LIBRARIES GUJARAT STATE, GANDHINAGAR</h4>
        </div>
        <div className="logodiv2">
          <img className="logo" src="src/assets/logo2.jpg" alt="logo" />
        </div>
      </div>
    </center>
  );
}
export default NavBar;
