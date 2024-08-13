import NavBar from "../components/NavBar";

function Admin_Home() {
  return (
    <>
      <NavBar titel={"ગ્રામ ગ્રંથાલયનુ પોર્ટલ"}></NavBar>
      <div class=" mb-3">
        <form class="container-fluid justify-content-start">
          <a href="/Dataintable_Admin">
            <button class="btn btn-outline-success me-2" type="button">
              Show By Category
            </button>
          </a>
          <a href="/SingleData">
            <button class="btn btn-outline-success me-2" type="button">
              Show Single Data
            </button>
          </a>
          <a href="/">
            <button class="btn btn-outline-success me-2" type="button">
              Log Out
            </button>
          </a>
        </form>
      </div>
    </>
  );
}
export default Admin_Home;
