import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Enter from "./components/Enter";
import Input from "./components/input";
import Form from "./form";
function App() {
  let [arr, datastate] = useState([]);
  let unjha = [
    {
      srno: 1,
      name: "library-1",
      grantetaken: "Yes",
      grantamount: "25000",
      status: "Active",
    },
    {
      srno: 2,
      name: "library-2",
      grantetaken: "No",
      grantamount: "-",
      status: "Active",
    },
    {
      srno: 3,
      name: "library-3",
      grantetaken: "Yes",
      grantamount: "20000",
      status: "Active",
    },
    {
      srno: 4,
      name: "library-4",
      grantetaken: "Yes",
      grantamount: "10000",
      status: "Active",
    },
    {
      srno: 5,
      name: "library-5",
      grantetaken: "No",
      grantamount: "-",
      status: "Active",
    },
    {
      srno: 6,
      name: "library-6",
      grantetaken: "Yes",
      grantamount: "50000",
      status: "Active",
    },
  ];
  let palanpur = [
    {
      srno: 1,
      name: "swayam",
      grantetaken: "yes",
      grantamount: "1000",
      status: "Active",
    },
    {
      srno: 2,
      name: "rushu",
      grantetaken: "no",
      grantamount: "0",
      status: "Active",
    },
    {
      srno: 3,
      name: "c++",
      grantetaken: "yes",
      grantamount: "1000",
      status: "Active",
    },
    {
      srno: 4,
      name: "webdev",
      grantetaken: "yes",
      grantamount: "1000",
      status: "Active",
    },
  ];
  let sidhpur = [
    {
      srno: 1,
      name: "priti",
      grantetaken: "yes",
      grantamount: "1000",
      status: "Active",
    },
    {
      srno: 2,
      name: "rushi",
      grantetaken: "no",
      grantamount: "0",
      status: "Active",
    },
    {
      srno: 3,
      name: "c++",
      grantetaken: "yes",
      grantamount: "1000",
      status: "Active",
    },
    {
      srno: 4,
      name: "webdev",
      grantetaken: "yes",
      grantamount: "1000",
      status: "Active",
    },
  ];
  let category = ["city", "town-1", "town-2", "village"];
  let [library, state] = useState([]);
  let city = ["unjha", "visnagar", "meshana", "gandhinagar", "bhavnagar"];
  let town_1 = ["rajkot", "sidhpur", "baroda"];
  let town_2 = ["palanpur", "deesa", "dhanera"];
  let village = ["upera", "jaska", "sundhiya"];
  const handleonclick = (event) => {
    if (event.target.value == "city") {
      let list = [...city];
      state(list);
    } else if (event.target.value == "town-1") {
      let list = [...town_1];
      state(list);
    } else if (event.target.value == "town-2") {
      let list = [...town_2];
      state(list);
    } else if (event.target.value == "village") {
      let list = [...village];
      state(list);
    } else {
      state([]);
    }
    console.log(event.target.value);
  };
  const showdata = (e) => {
    console.log(e.target.value);
    if (e.target.value == "unjha") {
      datastate(unjha);
    } else if (e.target.value == "sidhpur") {
      datastate(sidhpur);
    } else if (e.target.value == "palanpur") {
      datastate(palanpur);
    } else {
      datastate([]);
    }
  };
  return (
    <center>
      <Input
        category={category}
        library={library}
        handleclick={handleonclick}
        showdata={showdata}
      ></Input>
      {arr.length != 0 && <Enter arr={arr}></Enter>}
    </center>
  );
}

export default App;
