import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

const Login2 = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "adlvadodara",
  });

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

    try {
      const response = await fetch(`http://localhost:5555/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const res_data = await response.json();
        console.log("jaimin", res_data);
        //storeTokenInLs(res_data.token);

        localStorage.setItem("login", "Adlvadodara");
         localStorage.setItem("district", "vadodara");
        localStorage.setItem("id", user.email);
        localStorage.setItem("pass", user.password);
        setUser({
          email: "",
          password: "",
        });
        console.log("dhh");
        
        navigate("/Home2");
      } else {
        alert("Invalid data");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NavBar titel={"વડોદરા લોગીન"}></NavBar>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img"></div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">vadodara</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label> યુઝર નામ </label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="User Name"
                    />
                  </div>

                  <div>
                    <label>પાસવર્ડ</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="Password"
                    />
                  </div>
                  <br />
                  <button type="submit " className="btn  btn-primary mb-3">
                    લોગીન
                  </button>
                  <a href="/Forgotpassword">
                    <p>Forgot Password</p>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Login2;
