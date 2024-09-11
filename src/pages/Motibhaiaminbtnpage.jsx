import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "/src/App.css";
import { useEffect } from "react";
import Slideshow from "../components/Slid";
import Footer from "../components/Footer";
function Motibhaiaminbtnpage() {
  return (
    <>
      <div>
        <NavBar titel={"ગ્રામ ગ્રંથાલયનુ પોર્ટલ"}></NavBar>
      </div>

      <div class=" mb-3 btn-container">
        <form class="container-fluid justify-content-start">
          <a href="/Motibhaiamin_1">
            <button
              class="btn m-3 btn-primary"
              //   onClick={navigate("/form")}
              type="button"
            >
              મહિલા બાળ
            </button>
          </a>
          <a href="/Motibhaiamin_2">
            <button
              class="btn m-3 btn-primary "
              //   onClick={navigate("/form")}
              type="button"
            >
              શહેર ગ્રંથાલય
            </button>
          </a>
          <a href="/Motibhaiamin_3">
            <button
              class="btn m-3 btn-primary "
              //   onClick={navigate("/form")}
              type="button"
            >
              શહેર શાખા નગરકક્ષા
            </button>
          </a>
          <a href="/Motibhaiamin_4">
            <button
              class="btn  btn-primary m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              ગ્રામ ગ્રંથાલય
            </button>
          </a>
          <a href="/Motibhaiamin_5">
            <button
              class="btn  btn-primary m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              નગરકક્ષા ૧
            </button>
          </a>
          <a href="/Motibhaiamin_6">
            <button
              class="btn  btn-primary m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              નગરકક્ષા ૨
            </button>
          </a>
          <a href="/Motibhaiamin_7">
            <button
              class="btn  btn-primary m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              વિશીષ્ટ લાઇબ્રેરી
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
export default Motibhaiaminbtnpage;
