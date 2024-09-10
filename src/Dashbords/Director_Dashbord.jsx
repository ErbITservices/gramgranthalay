import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Report from "../components/Report";
import axios from "axios";

function Directo_Dashbord() {
  const navigator = useNavigate();
  const [data, setData] = useState();
  const [showdata, setshowdata] = useState("false");
  const [showmotibhai, setshowmotibhai] = useState("false");
  function Logout() {
    navigator("/All_Login");
    localStorage.setItem("login", "");
  }
  useEffect(() => {
    const dataget = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/form/`);
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
  function handleshowdata() {
    setshowdata("true");
  }
  function handleback() {
    setshowdata("false");
  }
  return (
    <>
      <NavBar></NavBar>
      {showdata === "false" && (
        <div class=" mb-3 btn-container">
          <form class="container-fluid justify-content-start">
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
            <a href="/Motibhaiaminbtnpage">
              <button class="btn btn-info m-3" type="button">
                Moti bhai amin form
              </button>
            </a>
            {/* <a href="/SingleData">
            <button class="btn btn-outline-success me-2" type="button">
              Show Single Data
            </button>
          </a> */}

            <button class="btn btn-danger m-3" onClick={Logout} type="button">
              Log Out
            </button>
          </form>
        </div>
      )}
      {showdata === "true" && (
        <Report handleback={handleback} arr={data} title={"director"} />
      )}

      <Footer></Footer>
    </>
  );
}
export default Directo_Dashbord;
