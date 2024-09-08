import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function Directo_Dashbord() {
    const navigator = useNavigate();
    const[data, setData] = useState();
    function Logout() {
      navigator("/All_Login");
    localStorage.setItem("login", "");
    }
    useEffect(() => {
      const dataget = async () => {
        try {
          const response = await axios.get(`http://localhost:5555/form/meshana`);
          console.log(response.data), setData(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      dataget();
    }, []);
  return (
    <>
      <NavBar titel={"ગ્રામ ગ્રંથાલયનુ પોર્ટલ"}></NavBar>
      <div class=" mb-3 btn-container">
        <form class="container-fluid justify-content-start">
          <a href="/Dataintable_Admin">
            <button class="btn btn-info me-2" type="button">
              Report
            </button>
          </a>
          <a href="/Motibhaiamin_1">
            <button class="btn btn-info me-2" type="button">
              Moti bhai amin form
            </button>
          </a>
          {/* <a href="/SingleData">
            <button class="btn btn-outline-success me-2" type="button">
              Show Single Data
            </button>
          </a> */}

          <button class="btn btn-danger me-2" onClick={Logout} type="button">
            Log Out
          </button>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Directo_Dashbord;
