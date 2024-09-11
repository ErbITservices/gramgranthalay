import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Report from "../components/Report";
import { useEffect, useState } from "react";
import axios from "axios";

function Adl_meshana_dashboard() {
  const navigator = useNavigate();
  const [data, setData] = useState([]);
  const [showdata, setshowdata] = useState("false");
  const [loader, setloader] = useState("false");

  function Logout() {
    navigator("/All_Login");
    localStorage.setItem("login", "");
  }
  useEffect(() => {
     setloader("true");
    const dataget = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5555/district/Meshana`
        );
        console.log(response.data), setData(response.data);
        setloader("false");
      } catch (error) {
        console.log(error);
        setloader("false");
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
      <NavBar></NavBar>
      {loader === "true" && (
        <div className="loader">
          <h1>Loading...</h1>
          <FadeLoader color="#00008b" />
        </div>
      )}
      {loader === "false" && (
        <div>
          {showdata === "false" && (
            <div class=" mb-3 btn-container">
              <form class="container-fluid justify-content-start">
                <button
                  onClick={handleshowdata}
                  class="btn m-3 button-25 "
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

                <button
                  class="btn btn-danger m-3 "
                  onClick={Logout}
                  type="button"
                >
                  Log Out
                </button>
              </form>
            </div>
          )}
          {showdata === "true" && (
            <Report
              handleback={handleback}
              arr={data}
              title={"Scl gandhinagar"}
            />
          )}
        </div>
      )}

      <div>
        <Footer></Footer>
      </div>
    </>
  );
}
export default Adl_meshana_dashboard;
