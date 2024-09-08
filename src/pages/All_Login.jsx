import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "/src/App.css";
import { useEffect } from "react";
import Slideshow from "../components/Slid";
import Footer from "../components/Footer";
function All_Login() {
  
  return (
    <>
      <div>
        <NavBar titel={"ગ્રામ ગ્રંથાલયનુ પોર્ટલ"}></NavBar>
      </div>
      <div>
        <Slideshow></Slideshow>
      </div>
      <div class=" mb-3 btn-container">
        <form class="container-fluid justify-content-start">
          <a href="/Login1">
            <button
              class="btn  btn-success"
              //   onClick={navigate("/form")}
              type="button"
            >
              Gandhinagar Director
            </button>
          </a>
          <a href="/sclLogin1">
            <button
              class="btn loginbtn btn-primary "
              //   onClick={navigate("/form")}
              type="button"
            >
              SCL GANDHINAGAR
            </button>
          </a>
          <a href="/sclLogin2">
            <button
              class="btn  btn-primary "
              //   onClick={navigate("/form")}
              type="button"
            >
              SCL VADODARA
            </button>
          </a>
          <br />
          <a href="/Login4">
            <button
              class="btn  btn-primary me-2"
              //   onClick={navigate("/master")}
              type="button"
            >
              ADL AHMEDABAD
            </button>
          </a>
          <a href="/Login5">
            <button
              class="btn  btn-primary me-2"
              //   onClick={navigate("/master")}
              type="button"
            >
              ADL MEHSANA
            </button>
          </a>
          <a href="/Login2">
            <button
              class="btn  btn-primary me-2"
              //   onClick={navigate("/master")}
              type="button"
            >
              ADL VADODARA
            </button>
          </a>
          <a href="/Login6">
            <button
              class="btn  btn-primary me-2"
              //   onClick={navigate("/master")}
              type="button"
            >
              ADL SURAT
            </button>
          </a>
          <a href="/Login7">
            <button
              class="btn  btn-primary me-2"
              //   onClick={navigate("/master")}
              type="button"
            >
              ADL BHAVNAGAR
            </button>
          </a>
          <a href="/Login8">
            <button
              class="btn  btn-primary me-2"
              //   onClick={navigate("/master")}
              type="button"
            >
              ADL RAJKOT
            </button>
          </a>
        </form>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}
export default All_Login;
