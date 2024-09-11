import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Enter from "./components/Enter";
// import Input from "./components/input";
// import Home from "./pages/Home";
// import Dataintable from "./pages/Dataintable";
// import Login from "./pages/login";
// import NavBar from "./components/NavBar";
// import SingleData from "./pages/SinglData";
import Form from "./pages/form";
import Master from "./Forms/master";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";
import First from "./pages/first";
import Dataintable from "./pages/Dataintable";
import SingleData from "./pages/SinglData";
import Login from "./pages/login1";
import Addnew from "./Forms/addnew";
import All_Login from "./pages/All_Login";
import Login2 from "./pages/Login2";
import Login3 from "./pages/Login3";
import Login4 from "./pages/Login4";
import Login5 from "./pages/Login5";
import Login6 from "./pages/Login6";
import Login7 from "./pages/Login7";
import Login8 from "./pages/Login8";
import Motibhaiaminresult from "./components/Motibhaiaminresult";
import Directo_Dashbord from "./Dashbords/Director_Dashbord";
import Scl_gandhinagar_dashboard from "./Dashbords/Scl_gandhinagar_dashboard";
import Scl_vadodara_dashboard from "./Dashbords/Scl_vadodara_dashboard";
import Adl_ahemedabad_dashboard from "./Dashbords/Adl_ahemedabad_dashboard";
import Adl_meshana_dashboard from "./Dashbords/Adl_meshana_dashboard";
import Adl_bhavnagar_dashboard from "./Dashbords/Adl_bhavnagar_dashboard";
import Adl_rajkot_dashboard from "./Dashbords/Adl_rajkot_dashboard";
import Adl_surat_dashboard from "./Dashbords/Adl_surat_dashboard";
import Adl_vadodara_dashboard from "./Dashbords/Adl_vadodara_dashboard";
import SclLogin1 from "./pages/SclLogin1";
import Forgotpassword from "./pages/Forgotpassword";
import SclLogin2 from "./pages/SclLogin2";
import Dataintable_Admin from "./pages/Dataintable_Admin";
import Admin_Home from "./pages/Admin_home";
import InputforAdmin from "./components/input_for_admin";
import Showid from "./components/showid";
import ConfirmPassword from "./pages/ConfirmPassword";


import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Protected from "./pages/Protected";
import Motibhaiamin_1 from "./Forms/Motibhaiamin_1";
import Motibhaiamin_2 from "./Forms/Motibhaiamin_2";
import Motibhaiamin_3 from "./Forms/Motibhaiamin_3";
import Motibhaiamin_4 from "./Forms/Motibhaiamin_4";
import Motibhaiamin_5 from "./Forms/Motibhaiamin_5";
import Motibhaiamin_6 from "./Forms/Motibhaiamin_6";
import Motibhaiamin_7 from "./Forms/Motibhaiamin_7";
import Motibhaiaminbtnpage from "./pages/Motibhaiaminbtnpage";

function App() {
  return (
    <center>
      {/* <Home></Home> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Protected Components={All_Login} />}
          ></Route>
          <Route
            path="/Directo_Dashbord"
            element={<Protected Components={Directo_Dashbord} />}
          ></Route>
          <Route
            path="/Scl_gandhinagar_dashboard"
            element={<Protected Components={Scl_gandhinagar_dashboard} />}
          ></Route>
          <Route
            path="/Scl_vadodara_dashboard"
            element={<Protected Components={Scl_vadodara_dashboard} />}
          ></Route>
          <Route
            path="/Adl_ahemedabad_dashboard"
            element={<Protected Components={Adl_ahemedabad_dashboard} />}
          ></Route>
          <Route
            path="/Adl_meshana_dashboard"
            element={<Protected Components={Adl_meshana_dashboard} />}
          ></Route>
          <Route
            path="/Adl_bhavnagar_dashboard"
            element={<Protected Components={Adl_bhavnagar_dashboard} />}
          ></Route>
          <Route
            path="/Adl_rajkot_dashboard"
            element={<Protected Components={Adl_rajkot_dashboard} />}
          ></Route>
          <Route
            path="/Adl_surat_dashboard"
            element={<Protected Components={Adl_surat_dashboard} />}
          ></Route>
          <Route
            path="/Adl_vadodara_dashboard"
            element={<Protected Components={Adl_vadodara_dashboard} />}
          ></Route>
          <Route path="/Forgotpassword" element={<Forgotpassword />}></Route>
          <Route path="/showid" element={<Showid />}></Route>
          <Route
            path="/ConfirmPassword/:id/:token"
            element={<ConfirmPassword />}
          ></Route>
          <Route
            path="/Dataintable_Admin"
            element={<Dataintable_Admin />}
          ></Route>
          <Route path="/input_for_Admin" element={<InputforAdmin />}></Route>
          <Route
            path="/Admin_Home"
            element={<Protected Components={Admin_Home} />}
          ></Route>
          <Route path="/master" element={<Master />}></Route>
          <Route path="/Motibhaiamin_1" element={<Motibhaiamin_1 />}></Route>
          <Route path="/Motibhaiamin_2" element={<Motibhaiamin_2 />}></Route>
          <Route path="/Motibhaiamin_3" element={<Motibhaiamin_3 />}></Route>
          <Route path="/Motibhaiamin_4" element={<Motibhaiamin_4 />}></Route>
          <Route path="/Motibhaiamin_5" element={<Motibhaiamin_5 />}></Route>
          <Route path="/Motibhaiamin_6" element={<Motibhaiamin_6 />}></Route>
          <Route path="/Motibhaiamin_7" element={<Motibhaiamin_7 />}></Route>
          <Route
            path="/Motibhaiaminresult"
            element={<Motibhaiaminresult />}
          ></Route>
          <Route
            path="/Motibhaiaminbtnpage"
            element={<Motibhaiaminbtnpage />}
          ></Route>
          <Route path="/Login1" element={<Login />}></Route>
          <Route path="/Login2" element={<Login2 />}></Route>
          <Route path="/Login3" element={<Login3 />}></Route>
          <Route path="/Login4" element={<Login4 />}></Route>
          <Route path="/Login5" element={<Login5 />}></Route>
          <Route path="/Login6" element={<Login6 />}></Route>
          <Route path="/Login7" element={<Login7 />}></Route>
          <Route path="/Login8" element={<Login8 />}></Route>
          <Route path="/SclLogin1" element={<SclLogin1 />}></Route>
          <Route path="/SclLogin2" element={<SclLogin2 />}></Route>
          <Route path="/Home1" element={<Home1 />}></Route>
          <Route
            path="/Home2"
            element={<Protected Components={Home2} />}
          ></Route>
          <Route path="/All_Login" element={<All_Login />}></Route>
          <Route path="/master" element={<Master />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/Addnew" element={<Addnew />}></Route>
          <Route path="/Dataintable" element={<Dataintable />}></Route>
          <Route path="/SingleData" element={<SingleData />}></Route>
        </Routes>
      </BrowserRouter>
    </center>
  );
}

export default App;
