import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";

useLocation;
function Showid() {
  const location = useLocation();

  return (
    <>
      <NavBar titel={"ગ્રામ ગ્રંથાલયનો નિરીક્ષણ અહેવલ  "}></NavBar>
      <h1>Your Library Id Is :- {location.state.id}</h1>
      <div className="row mb-3 tab2 col-sm-13 align-items-center">
        <div className=" col">
          <a href="/">
            <button type="button" className="btn btn-warning">
              Back
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
export default Showid;
