import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function Admin_Home() {

  const navigator = useNavigate();
  function Logout() {
    localStorage.setItem("login", "")
    // localStorage.setItem("login", "director");
    navigator("/All_Login")
  }
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
    </>
  );
}
export default Admin_Home;
