import NavBar from "./NavBar";
function InputforAdmin(props) {
  return (
    <div className="main">
      {/* <NavBar></NavBar> */}
      <div className="row mb-3 col-sm-13 align-items-center">
        <div className=" col">
          <select
            required
            onChange={(event) => props.handleclick(event)}
            className="form-select"
            aria-label="Default select example"
          >
            <option>Select Region</option>

            <option>All</option>
            <option>Vadodara</option>
            <option>Gandhinagar</option>
          </select>
        </div>
        <div className=" col">
          <select
            required
            onChange={(event) => props.handleclick(event)}
            className="form-select"
            aria-label="Default select example"
          >
            <option>Select Category</option>
            {props.category.map((i) => (
              <option value={i} key={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className=" col">
          <select
            required
            className="form-select"
            aria-label="Default select example"
            onChange={async (event) => props.handleclick(event)}
          >
            <option selected>Select District</option>
            {props.library.map((i) => (
              <option value={i} key={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div className=" col">
          <select
            required
            className="form-select"
            aria-label="Default select example"
            onChange={async (event) => props.showdata(event)}
          >
            <option selected>Select City</option>
            {props.city.map((i) => (
              <option value={i} key={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
export default InputforAdmin;
