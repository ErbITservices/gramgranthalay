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
import Master from "./pages/master";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";
import First from "./pages/first";
import Dataintable from "./pages/Dataintable";
import SingleData from "./pages/SinglData";
import Login from "./pages/login1";
import Addnew from "./pages/addnew";
import All_Login from "./pages/All_Login";
import Login2 from "./pages/Login2";
import Login3 from "./pages/Login3";
import Dataintable_Admin from "./pages/Dataintable_Admin";
import Admin_Home from "./pages/Admin_home";
import InputforAdmin from "./components/input_for_admin";
import Showid from "./components/showid";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <center>
      {/* <Home></Home> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />}></Route>
          <Route path="/showid" element={<Showid />}></Route>
          <Route
            path="/Dataintable_Admin"
            element={<Dataintable_Admin />}
          ></Route>
          <Route path="/input_for_Admin" element={<InputforAdmin />}></Route>
          <Route path="/Admin_Home" element={<Admin_Home />}></Route>
          <Route path="/master" element={<Master />}></Route>
          <Route path="/Login1" element={<Login />}></Route>
          <Route path="/Login2" element={<Login2 />}></Route>
          <Route path="/Login3" element={<Login3 />}></Route>
          <Route path="/Home1" element={<Home1 />}></Route>
          <Route path="/Home2" element={<Home2 />}></Route>
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
