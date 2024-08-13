import NavBar from "../components/NavBar";

function All_Login() {
  return (
    <>
      <div>
        <NavBar titel={"ગ્રામ ગ્રંથાલયનુ પોર્ટલ"}></NavBar>
      </div>
      <div class=" mb-3 button">
        <form class="container-fluid justify-content-start">
          <a href="/Login1">
            <button
              class="btn btn-outline-success me-2"
              //   onClick={navigate("/form")}
              type="button"
            >
              Director
            </button>
          </a>
          <a href="/Login2">
            <button
              class="btn btn-outline-success me-2"
              //   onClick={navigate("/master")}
              type="button"
            >
              Admin-1
            </button>
          </a>
          <a href="/Login3">
            <button
              class="btn btn-outline-success me-2"
              //   onClick={navigate("/master")}
              type="button"
            >
              Admin-2
            </button>
          </a>
        </form>
      </div>
    </>
  );
}
export default All_Login;
