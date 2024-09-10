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
              Motibhaiamin_1
            </button>
          </a>
          <a href="/Motibhaiamin_2">
            <button
              class="btn m-3 btn-primary "
              //   onClick={navigate("/form")}
              type="button"
            >
              Motibhaiamin_2
            </button>
          </a>
          <a href="/Motibhaiamin_3">
            <button
              class="btn m-3 btn-primary "
              //   onClick={navigate("/form")}
              type="button"
            >
              Motibhaiamin_3
            </button>
          </a>
          <a href="/Motibhaiamin_4">
            <button
              class="btn  btn-primary m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              Motibhaiamin_4
            </button>
          </a>
          <a href="/Motibhaiamin_5">
            <button
              class="btn  btn-primary m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              Motibhaiamin_5
            </button>
          </a>
          <a href="/Motibhaiamin_6">
            <button
              class="btn  btn-primary m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              Motibhaiamin_6
            </button>
          </a>
          <a href="/Motibhaiamin_7">
            <button
              class="btn  btn-primary m-3"
              //   onClick={navigate("/master")}
              type="button"
            >
              Motibhaiamin_7
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
