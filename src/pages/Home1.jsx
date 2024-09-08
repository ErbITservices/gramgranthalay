import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Home1() {
  const navigator = useNavigate();
  function Logout() {
    localStorage.setItem("login", "");
    // localStorage.setItem("login", "director");
    navigator("/All_Login");
  }
  return (
    <>
      <div>
        <NavBar titel={"ગ્રામ ગ્રંથાલયનુ પોર્ટલ"}></NavBar>
      </div>
      <div class=" mb-3 btn-container">
        <form class="container-fluid justify-content-start">
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
          {/* <a href="/form">
            <button
              class="btn btn-outline-success me-2"
              //   onClick={navigate("/form")}
              type="button"
            >
              Form
            </button>
          </a> */}

          <button class="btn btn-danger m-3" onClick={Logout} type="button">
            LogOut
          </button>
        </form>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}
export default Home1;
