import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const Login3 = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
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
      const response = await fetch(`http://localhost:5555/admin/r`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("login successful");

        const res_data = await response.json();
        console.log("jaimin", res_data);
        //storeTokenInLs(res_data.token);

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
      <NavBar titel={"ગાંધીનગર લોગીન"}></NavBar>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img"></div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login </h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label>User Name </label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="User Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="Password"
                    />
                  </div>
                  <br />
                  <button type="submit " className="btn btn-submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login3;
