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
            <button class="btn btn-outline-success m-3" type="button">
              Login
            </button>
          </a>
        </form>
      </div>
    </>
  );
}
export default First;
