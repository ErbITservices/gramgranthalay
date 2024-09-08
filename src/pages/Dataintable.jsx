import Enter from "../components/Enter";
import Input from "../components/input";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
function Dataintable() {
  let [arr, datastate] = useState([]);
  let [data, setData] = useState([]);

  const showdata = (e) => {
    let city = e.target.value;

    console.log("m");
    datastate([
      {
        srno: 1,
        name: "priti",
        grantetaken: "yes",
        grantamount: "1000",
        status: "Active",
      },
    ]);

    // datastate(data.filter((elm) => elm.gam === city));
    console.log();
  };

  useEffect(() => {
    const dataget = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/form/`);
        console.log(response.data), setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    dataget();
  }, []);
  const city = [
    "panchmahal",
    "mahisagar",
    "kheda",
    "anand",
    "dahod",
    "surat",
    "tapi",
    "navsari",
    "valsad",
    "vadodra",
    "chota_udaipur",
    "bharuch",
    "narmada",
  ];
  const panchmahal = [
    "godhra",
    "sahera",
    "halol",
    "jambughoda",
    "kalol",
    "ghoghamba",
  ];
  const mahisagar = ["khanpur", "lunavada", "balasinor", "virpur"];
  const kheda = [
    "nadiad",
    "kheda",
    "matar",
    "mehemdabad",
    "mahugha",
    "kapadwanj",
    "kathlaal",
    "gadteshwar",
    "thasra",
    "vaso",
  ];
  const anand = [
    "anand",
    "borsad",
    "aanklav",
    "khambhat",
    "umreth",
    "petlad",
    "tarapur",
  ];
  const dahod = ["dahod", "jalod", "devgardh bariya"];
  const surat = [
    "olpad",
    "kamrej",
    "choriyasi",
    "palsana",
    "umerpada",
    "bardoli",
    "mandvi",
    "mangrod",
  ];
  const tapi = ["uchal", "nijar", "songadh", "vyara", "dolwan", "valod"];
  const navsari = ["gandevi", "jalalpor", "chikhali", "vansada", "navsari"];
  const valsad = ["valsad", "dharampur", "paradi"];
  const vadodra = [
    "vadodra",
    "vaghodiya",
    "karjan",
    "dabhoi",
    "padra",
    "savali",
    "shinor",
  ];
  const chota_udaipur = [
    "sankheda",
    "bodeli",
    "naswadi",
    "pavijetpur",
    "chotaudaipur",
    "kwant",
  ];
  const bharuch = [
    "bharuch",
    "vagra",
    "jambusar",
    "aamod",
    "ankleshwar",
    "hasot",
    "jagadiya",
  ];
  const narmada = ["tilakwada", "nandod"];
  let category = ["city", "town-1", "town-2", "village"];
  let [library, state] = useState([]);
  let [librarycity, setcity] = useState([]);
  let town_1 = ["rajkot", "sidhpur", "baroda"];
  let town_2 = ["palanpur", "deesa", "dhanera"];
  let village = ["upera", "jaska", "sundhiya"];
  const handleonclick = (event) => {
    console.log(event.target.value);

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
    } else if (event.target.value == "bharuch") {
      let list = [...bharuch];
      setcity(list);
    } else if (event.target.value == "panchmahal") {
      let list = [...panchmahal];
      setcity(list);
    } else if (event.target.value == "anand") {
      let list = [...anand];
      setcity(list);
    } else if (event.target.value == "chota_udaipur") {
      let list = [...chota_udaipur];
      setcity(list);
    } else if (event.target.value == "vadodra") {
      let list = [...vadodra];
      setcity(list);
    } else if (event.target.value == "valsad") {
      let list = [...valsad];
      setcity(list);
    } else if (event.target.value == "narmada") {
      let list = [...narmada];
      setcity(list);
    } else if (event.target.value == "navsari") {
      let list = [...navsari];
      setcity(list);
    } else if (event.target.value == "surat") {
      let list = [...surat];
      setcity(list);
    } else if (event.target.value == "dahod") {
      let list = [...dahod];
      setcity(list);
    } else if (event.target.value == "tapi") {
      let list = [...tapi];
      setcity(list);
    } else if (event.target.value == "mahisagar") {
      let list = [...mahisagar];
      setcity(list);
    } else if (event.target.value == "kheda") {
      let list = [...kheda];
      setcity(list);
    } else {
      state([]);
      setcity([]);
    }
    console.log(event.target.value);
  };

  return (
    <>
      <NavBar titel={"ગ્રામ ગ્રંથાલયનુ પોર્ટલ"}></NavBar>
      <Input
        category={category}
        library={library}
        city={librarycity}
        handleclick={handleonclick}
        showdata={showdata}
      ></Input>
      {arr.length != 0 && <Enter arr={data}></Enter>}
    </>
  );
}
export default Dataintable;
