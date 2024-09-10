import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Adl_meshana_dashboard() {
  const navigator = useNavigate();
  function Logout() {
    navigator("/All_Login");
    localStorage.setItem("login", "");
    // localStorage.setItem("login", "director");
  }
  return (
    <>
      <NavBar titel={"ગ્રામ ગ્રંથાલયનુ પોર્ટલ"}></NavBar>
      <div class=" mb-3 btn-container">
        <form class="container-fluid justify-content-start">
          <a href="/Dataintable">
            <button class="btn m-3 button-25 " type="button">
              Report
            </button>
          </a>

          <a href="/Addnew">
            <button
              class="btn btn-success m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              નવી લાઇબ્રેરી ઉમેરો
            </button>
          </a>
          <a href="/master">
            <button
              class="btn btn-info m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              નિરીક્ષણ અહેવલ ફોમ
            </button>
          </a>

          <button class="btn btn-danger m-3 " onClick={Logout} type="button">
            Log Out
          </button>
        </form>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}
export default Adl_meshana_dashboard;
