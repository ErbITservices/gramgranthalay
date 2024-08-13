import NavBar from "../components/NavBar";

function Home1() {
  return (
    <>
      <div>
        <NavBar titel={"ગ્રામ ગ્રંથાલયનુ પોર્ટલ"}></NavBar>
      </div>
      <div class=" mb-3 button">
        <form class="container-fluid justify-content-start">
          <a href="/">
            <button class="btn btn-outline-success me-2" type="button">
              Home
            </button>
          </a>
          <a href="/Addnew">
            <button
              class="btn btn-outline-success me-2"
              //   onClick={navigate("/master")}
              type="button"
            >
              add new library
            </button>
          </a>
          <a href="/master">
            <button
              class="btn btn-outline-success me-2"
              //   onClick={navigate("/master")}
              type="button"
            >
              Master Form
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
        </form>
      </div>
    </>
  );
}
export default Home1;
