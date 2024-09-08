import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
function ConfirmPassword() {
    const [user, setUser] = useState({
      password: "",
    });
  const [loder, setloader] = useState("false");
  const [message, setmessage] = useState("Wait a Minutes Password Updating");
const navigate = useNavigate();


    const handleInput = (e) => {
      let name = e.target.name;
      let value = e.target.value;

      setUser({
        ...user,
        [name]: value,
      });
  };
  
  const { id, token } = useParams();
  // const userValid = async () => {
  //   console.log('p');
    
  //   const res = await fetch(
  //     `http://localhost:5555/forgotpassword/${id}/${token}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   console.log('23',res);
    
  //   const data = await res.json()
  //   if (data.status==200) {
  //     console.log("uservalid");
      
  //   }
  //   else {
  //     console.log("notvalid");
      
  //   }
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = user.password;

    try {

      setloader("true");

      const res = await fetch(
        `http://localhost:5555/admin/${id}/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({password})
        }
      );
      const data = await res.json();
      if (data.status == 400) {
        console.log("not done");
        alert("password is not updated");
        setloader("false");
      }
      else {
        console.log(" done");
        console.log(data);
        alert("Password is updated");
        setloader("false");
        navigate("/");
      }
    } catch (err) {
      setloader("false");
      setmessage("Sorry somthing Wrong");
      
    }
  };
  // useEffect(() => { userValid() },[])

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
                    <h1 className="main-heading mb-3">Set Password</h1>
                    <br />
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label>Password </label>
                        <input
                          type="password"
                          name="password"
                          value={user.password}
                          onChange={handleInput}
                          placeholder="Email"
                        />
                      </div>
                      <div>
                        <label>conform Password </label>
                        <input
                          type="password"
                          name="pass"
                          // value={user.pass}
                          // onChange={handleInput}
                          placeholder="Email"
                        />
                      </div>

                      <br />
                      <button type="submit " className="btn  btn-primary mb-3">
                        Set Password
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </main>
          </section>
        )}
        {loder === "true" && <Loader message={message}></Loader>}
      </>
    );
}
export default ConfirmPassword;