import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Report from "../components/Report";
import axios from "axios";
import { FadeLoader } from "react-spinners";

function Directo_Dashbord() {
  const navigator = useNavigate();
  const [data, setData] = useState();
  const [showdata, setshowdata] = useState("false");
  const [loader, setloader] = useState("false");
  const [showmotibhai, setshowmotibhai] = useState("false");
  function Logout() {
    navigator("/All_Login");
    localStorage.setItem("login", "");
  }
  useEffect(() => {
    const dataget = async () => {
       setloader("true");
      try {
        const response = await axios.get(`http://localhost:5555/form/`);
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
                <a href="/Motibhaiaminbtnpage">
                  <button class="btn btn-info m-3" type="button">
                    Moti bhai amin form
                  </button>
                </a>
                <a href="/Motibhaiaminresult">
                  <button class="btn m-3 btn-success " type="button">
                    Result of motibhai
                  </button>
                </a>

                <button
                  onClick={handleshowdata}
                  class="btn m-3 button-25 "
                  type="button"
                >
                  Report
                </button>

                {/* <a href="/SingleData">
            <button class="btn btn-outline-success me-2" type="button">
              Show Single Data
            </button>
          </a> */}

                <button
                  class="btn btn-danger m-3"
                  onClick={Logout}
                  type="button"
                >
                  Log Out
                </button>
              </form>
            </div>
          )}
          {showdata === "true" && (
            <Report handleback={handleback} arr={data} title={"director"} />
          )}
        </div>
      )}

      <Footer></Footer>
    </>
  );
}
export default Directo_Dashbord;
