import NavBar from "../components/NavBar";

import { BiBook, BiBookOpen } from "react-icons/bi";

function First() {
  return (
    <>
      <div>
        <NavBar titel={"ગ્રામ ગ્રંથાલયનુ પોર્ટલ"}></NavBar>
      </div>
      <div class=" mb-3 button">
        <form class="container-fluid justify-content-start">
          <a href="All_Login">
            <button class="btn btn-outline-success me-2" type="button">
              Login
            </button>
          </a>
          <a href="/Home1">
            <button
              class="btn btn-outline-success me-2"
              //   onClick={navigate("/form")}
              type="button"
            >
              Form
            </button>
          </a>
        </form>
      </div>
    </>
  );
}
export default First;
