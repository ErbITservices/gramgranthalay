import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Report from "../components/Report";
import { useEffect, useState } from "react";
import axios from "axios";

function Scl_gandhinagar_dashboard() {
    const navigator = useNavigate();
    const [data, setData] = useState();
    const [showdata, setshowdata] = useState("false");

  function Logout() {
    navigator("/All_Login");
    localStorage.setItem("login", "");
    
    }
    useEffect(() => {
      const dataget = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5555/district/gandhinagar`
          );
          console.log(response.data), setData(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      dataget();
    }, []);
    function handleshowdata() {
        
        setshowdata("true");
    }
    function handleback() {
        setshowdata("false");
    }
  return (
    <>
      <NavBar titel={"ગ્રામ ગ્રંથાલયનુ પોર્ટલ"}></NavBar>

      {showdata === "false" && (
        <div class=" mb-3 btn-container">
          <form class="container-fluid justify-content-start">
            <button
              onClick={handleshowdata}
              class="btn m-3 btn-info "
              type="button"
            >
              Report
            </button>

            <a href="/Addnew">
              <button class="btn btn-success m-3" type="button">
                નવી લાઇબ્રેરી ઉમેરો
              </button>
            </a>
            <a href="/master">
              <button class="btn btn-info m-3" type="button">
                નિરીક્ષણ અહેવલ ફોમ
              </button>
            </a>

            <button class="btn btn-danger m-3 " onClick={Logout} type="button">
              Log Out
            </button>
          </form>
        </div>
      )}
      {showdata === "true" && <Report handleback={handleback} arr={data} />}

      <div>
        <Footer></Footer>
      </div>
    </>
  );
}
export default Scl_gandhinagar_dashboard;
