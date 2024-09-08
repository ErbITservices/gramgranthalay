import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

import "bootstrap/dist/css/bootstrap.min.css";

const Forgotpassword = () => {
  const [user, setUser] = useState({
    email: "",
    
  });
  const [loder, setloader] = useState("false");
  const [message, setmessage] = useState("Wait a Minutes Sending Mail");

  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    console.log("mihir");
    
    setloader("true");

    try {
      const response = await fetch(`http://localhost:5555/admin/sendpasswordlink`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("mihir "+response);
      const res_data = await response.json();
      if (res_data.msg === "invalid email") {
        setUser({
          email: "",
        });
        alert("Mail is note register");
        setloader("false");
      } else {
        alert("Mail is sended");
        setloader("false");
      }
    } catch (err) {
      console.log(err);
      setloader("false");
      setmessage("Sorry Mail not sended")
      
    }
  };

  
  return (
    <>
      <NavBar titel={"વડોદરા લોગીન"}></NavBar>
      {loder === "false" && (
        <section>
          <main>
            <div className="section-registration">
              <div className="container grid grid-two-cols">
                <div className="registration-image reg-img"></div>
                {/* our main registration code  */}
                <div className="registration-form">
                  <h1 className="main-heading mb-3">Forgot Password</h1>
                  <br />
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label>E mail </label>
                      <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleInput}
                        placeholder="Email"
                      />
                    </div>

                    <br />
                    <button type="submit " className="btn  btn-primary mb-3">
                      Send Mail
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </section>
      )}
      {loder === "true" && (
        
          <Loader message={message}></Loader>
          
        
      )}
    </>
  );
};

export default Forgotpassword;
