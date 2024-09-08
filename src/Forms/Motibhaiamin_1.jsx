import { useRef, useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { FadeLoader } from "react-spinners";

function Motibhaiamin_1() {
  let count = 0;
  const number = useRef();
  const [loader, setloader] = useState("false");
  const [library, setlibrary] = useState([]);
  const [data, setdata] = useState({
    select_1: "",
    select_2: "",
    select_3: "",
    select_4: "",
    select_5: "",
    select_6: "",
    select_7: "",
    select_8: "",
    select_9: "",
    select_10: "",
    select_11: "",
    select_12: "",
    select_13: "",
    select_14: "",
    select_15: "",
    select_16: "",
    select_17: "",
    select_18: "",
    select_19: "",
    select_20: "",
    select_21: "",
    select_22: "",
    select_23: "",
    select_24: "",
    select_25: "",
    select_26: "",
    select_27: "",
    select_28: "",
    select_29: "",
    select_30: "",
    select_31: "",
    select_32: "",
    select_33: "",
    select_34: "",
    select_35: "",
    select_36: "",
    select_37: "",
    select_38: "",
    select_39: "",
    select_40: "",
    select_41: "",
    select_42: "",
    select_43: "",
    select_44: "",
    select_45: "",
    select_46: "",
    select_47: "",
    select_48: "",
    select_49: "",
    select_50: "",
    select_51: "",
    select_52: "",
    select_53: "",
    select_54: "",
    select_55: "",
    select_56: "",
    select_57: "",
    select_58: "",
    select_59: "",
    select_60: "",
    select_61: "",
    select_62: "",
    select_63: "",
    select_64: "",
    select_65: "",
    select_66: "",
    select_67: "",
    select_68: "",
    select_69: "",
    select_70: "",
    select_71: "",
    select_72: "",
    select_73: "",
    select_74: "",
    select_75: "",
    select_76: "",
    select_77: "",
    select_78: "",
    select_79: "",
    select_80: "",
    select_81: "",
    select_82: "",
    select_83: "",
    select_84: "",
    select_85: "",
    select_86: "",
    select_87: "",
    select_88: "",
    select_89: "",
    select_90: "",
    select_91: "",
    select_92: "",
    select_93: "",
    select_94: "",
    select_95: "",
  });
  const handleInput = (e) => {
    // console.log(e);

    const name = e.target.name;
    const value = e.target.value;
    setdata({
      ...data,
      [name]: value,
    });
    console.log(data);
  };

  async function handleSubmit() {
    for (let index = 1; index <= 95; index++) {
      count += Number(data["select_" + index]);
    }
    console.log(count);
    setloader("true");
    try {
      console.log("mihir");

      const senddata = await fetch(`http://localhost:5555/Motibhaiamin1/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({"lname":library[0].lname,"gam":library[0].gam,"uid":library[0].uid,"marks":count}),
      });
      if (senddata.ok) {
        console.log("done");
        
        setloader("false");
      } else {
        setloader("false");
        alert("data alredy submited")
        
      }
    } catch (error) {
      console.log("error");
      console.log(error);
      alert("data not submited try again");
      setloader("false");
    }
  }
  const checkpin = () => {
    console.log(number.current.value);

    const dataget = async () => {
      try {
        console.log("mihir");

        const response = await axios.get(
          `http://localhost:5555/form/${number.current.value}`
        );
        console.log(response.data), setlibrary(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    dataget();
    setloader("true");
    if (library.length !== 0) {
      setloader("false");
    } else {
      // alert("data not found");
      setloader("false");
    }

    // console.log(pin);
  };
  return (
    <>
      {loader === "true" && (
        <div className="loader">
          <h1>Loading...</h1>
          <FadeLoader color="#00008b" />
        </div>
      )}
      {loader === "false" && (
        <form className="form " onSubmit={handleSubmit}>
          <div className="row mb-3 col-sm-13 align-items-center">
            <div className=" col-2">
              <label className="col-sm-10 col-form-label">Pin :</label>
            </div>
            <div className="col-8">
              <input
                required
                type="text"
                className="form-control"
                autoComplete="off"
                ref={number}
                name="uid"
                //   value={data.uid}
                //   onChange={handleInput}
              />
            </div>
            <div className=" col">
              <button
                type="button"
                onClick={checkpin}
                className="btn btn-primary"
              >
                Search
              </button>
            </div>
          </div>

          {library.length != 0 && (
            <div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    lname is : {library[0].lname}
                  </label>
                  <br />
                  <label className="col-sm-10 col-form-label">
                    city is : {library[0].gam}
                  </label>
                </div>
              </div>

              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    granthalayna cyavasthatantrano prakar :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    onClick={handleInput}
                    name="select_1"
                    value={data.select_1}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected disabled value="">
                      Select
                    </option>
                    <option value={1}>sthanik svarajyani sanstha</option>
                    <option value={2}>sarkari sanstha ke trust</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-13 align-items-center">
                <div className="col">
                  <label className="col-form-label col highlight">
                    vyavasthatantrnu pradan :
                  </label>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    granthalay samitini rachana karel che? :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_2"
                    value={data.select_2}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>ha</option>
                    <option value={0}>na</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-13 align-items-center">
                <div className="col">
                  <label className="col-form-label col highlight">
                    granthalayni avak kharchni mahiti :
                  </label>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    varsh 20-21 no kharch :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_3"
                    value={data.select_3}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={0}>0 To 2,00,000</option>
                    <option value={1}>2,00,000 To 2,50,000</option>
                    <option value={2}>2,50,000 To 3,00,000</option>
                    <option value={3}>3,00,000 To 3,50,000</option>
                    <option value={4}>3,50,000 thi vadhu</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    varsh 21-22 no kharch :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_4"
                    value={data.select_4}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={0}>0 To 2,00,000</option>
                    <option value={1}>2,00,000 To 2,50,000</option>
                    <option value={2}>2,50,000 To 3,00,000</option>
                    <option value={3}>3,00,000 To 3,50,000</option>
                    <option value={4}>3,50,000 thi vadhu</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-13 align-items-center">
                <div className="col">
                  <label className="col-form-label col highlight">
                    karmachari angeni mahiti :
                  </label>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    karmacharini sankhya :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_5"
                    value={data.select_5}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={5}>granthapal+ 3 to vadhu karmachari</option>
                    <option value={3}>
                      granthapal+ helper granthpal+peune{" "}
                    </option>
                    <option value={2}>granthapal+peune </option>
                    <option value={1}>granthapal</option>
                    <option value={0}>no employee</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    karmacharini laykat :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_6"
                    value={data.select_6}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={5}>m.l.b</option>
                    <option value={3}>b.l.b</option>
                    <option value={2}>certificate corse</option>
                    <option value={0}>no laykat</option>
                  </select>
                </div>
              </div>

              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    pagar dhoran apay che :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_7"
                    value={data.select_7}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={5}>pagardhoran apay che</option>
                    <option value={2}>fix pagar</option>
                    <option value={0}>manad seva</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    manadvetan apay che ketlu:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_8"
                    value={data.select_8}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={0}>0 to 6000</option>
                    <option value={1}>6000 to 7000</option>
                    <option value={2}>7000 to 8000</option>
                    <option value={3}>8000 thi vadhu</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    seva na lekhit niyamo che :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_9"
                    value={data.select_9}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>ha</option>
                    <option value={0}>na</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    karmachari kalyanfund jogvai che:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_10"
                    value={data.select_10}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>ha</option>
                    <option value={0}>na</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    granthalay pravesh apel vanchanalay vibhag niyamo likht che
                    :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_11"
                    value={data.select_11}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>ha</option>
                    <option value={0}>na</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-13 align-items-center">
                <div className="col">
                  <label className="col-form-label col highlight">
                    meching sahay :
                  </label>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    furnichar mate sahay malel che 2020-2021 :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_12"
                    value={data.select_12}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>ha</option>
                    <option value={0}>na</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    furnichar mate sahay malel che 2021-2022 :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_13"
                    value={data.select_13}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>ha</option>
                    <option value={0}>na</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-13 align-items-center">
                <div className="col">
                  <label className="col-form-label col highlight">
                    non meching :
                  </label>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    stabdi ujavni mate malel sahay? :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_14"
                    value={data.select_14}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>ha</option>
                    <option value={0}>na</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-13 align-items-center">
                <div className="col">
                  <label className="col-form-label col highlight">
                    granthalayna samay ange :
                  </label>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    pustak apel mate samay :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_15"
                    value={data.select_15}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={5}>7 hours to 7+</option>
                    <option value={4}>6 to 7</option>
                    <option value={3}>5 to 6</option>
                    <option value={0}>5 to 1</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    vanchanalay mate samay :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_16"
                    value={data.select_16}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={5}>8 hours to 8+</option>
                    <option value={4}>7 to 8</option>
                    <option value={3}>6 to 7</option>
                    <option value={0}>6 to 1</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    week ma raja kyare hoy che :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_17"
                    value={data.select_17}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={3}>0</option>
                    <option value={1}>1</option>
                    <option value={0}>ravivare raja hoy to</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    athavadik rajana divase apapti seva :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_18"
                    value={data.select_18}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>pustak aap le seva</option>
                    <option value={1}>any one</option>
                    <option value={0}>no one</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    varsh darmiyan kamkajna divas :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_19"
                    value={data.select_19}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={4}>351 to 365</option>
                    <option value={3}>321 to 350</option>
                    <option value={2}>301 to 320</option>
                    <option value={0}>300 to less then 300</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-13 align-items-center">
                <div className="col">
                  <label className="col-form-label col highlight">
                    granthbhandar ane granthgothavani :
                  </label>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    granthalayna granthasangrani mahiti kul sankhya :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_20"
                    value={data.select_20}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={4}> 50,001 to vadhu</option>
                    <option value={3}>35,001 to 50,000</option>
                    <option value={2}>30,001 to 35,000</option>
                    <option value={1}>30,000 to 25,000</option>
                    <option value={0}>25,000 to 0</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    two varsh darmyan nava umerayel granthoni sankhya :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_21"
                    value={data.select_21}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={3}>201 to more</option>
                    <option value={2}>101 to 200</option>
                    <option value={1}>100 books</option>
                    <option value={0}>100 thi less</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    agrath vanchan samagrini vigat :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_22"
                    value={data.select_22}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={3}>option 1</option>
                    <option value={1}>option 2</option>
                    <option value={0}>option 3</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    gam ni vsti na pramane makul takavari :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_23"
                    value={data.select_23}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={4}>option 1</option>
                    <option value={3}>option 2</option>
                    <option value={2}>option 3</option>
                    <option value={1}>option 4</option>
                    <option value={0}>option 5</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    bhanel vasti na pramane takavari:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_24"
                    value={data.select_24}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={0}>option 1</option>
                    <option value={1}>option 2</option>
                    <option value={2}>option 3</option>
                    <option value={3}>option 4</option>
                    <option value={4}>option 5</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    nodhayel sabhyona pramane vanchakni takavari :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_25"
                    value={data.select_25}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={4}>option 1</option>
                    <option value={3}>option 2</option>
                    <option value={2}>option 3</option>
                    <option value={1}>option 4</option>
                    <option value={0}>option 5</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    gamni bhanel vatna pramanma kul granthoni takavari:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_26"
                    value={data.select_26}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={4}>option 1</option>
                    <option value={3}>option 2</option>
                    <option value={2}>option 3</option>
                    <option value={1}>option 4</option>
                    <option value={0}>option 5</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    gamni bhanl vastina pramana ghare vanchva apel granthoni
                    takavari :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_27"
                    value={data.select_27}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={4}>option 1</option>
                    <option value={3}>option 2</option>
                    <option value={2}>option 3</option>
                    <option value={1}>option 4</option>
                    <option value={0}>option 5</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    vasawel granthna praman ma vanchel granthoni takavari :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_28"
                    value={data.select_28}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={4}>option 1</option>
                    <option value={3}>option 2</option>
                    <option value={2}>option 2</option>
                    <option value={1}>option 2</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    granth gothawani vigat :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_29"
                    value={data.select_29}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={3}>option 1</option>
                    <option value={1}>option 2</option>
                    <option value={0}>option 3</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    pustako khula kabat ma rakhvama aave che ke bandh:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_30"
                    value={data.select_30}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    vishay temaj lekhakono nirdesh karta margdarsho :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_31"
                    value={data.select_31}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    kai kai babato nu computerization thayel che :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_34"
                    value={data.select_34}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={3}>option 1</option>
                    <option value={2}>option 2</option>
                    <option value={0}>option 3</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    e liberary suvidha uplabdh che? :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_35"
                    value={data.select_35}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={3}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    grath praprti :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_36"
                    value={data.select_36}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    pustak kharidi mate wiketao pasethi ho mangaviya che? :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_37"
                    value={data.select_37}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    pustak pasandgi mate kaiya sadhano nu upyog karai che?:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_38"
                    value={data.select_38}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    nava umerata pustakoni yaadi noticeboard uper mukai che? :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_37"
                    value={data.select_37}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    pustako ni nondhani namunana parigrahan regiterma thai che:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_40"
                    value={data.select_40}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={3}>option 1</option>
                    <option value={1}>option 2</option>
                    <option value={0}>option 3</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    pustakoni nondhani kaamgiri partar che to ketli :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_41"
                    value={data.select_41}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={0}>option 1</option>
                    <option value={2}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    gratho uper yogay sathane sika thta niyat jagiya e pitpati
                    lagava ma aave che?:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_42"
                    value={data.select_42}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    pustak ni vagikaran kai padhati thi karvama aave che? :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_43"
                    value={data.select_43}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={3}>option 1</option>
                    <option value={1}>option 2</option>
                    <option value={0}>option 3</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    vargikaran mate ketla pustakoni kariyawahi baki che?:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_44"
                    value={data.select_44}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={0}>option 1</option>
                    <option value={3}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    pustako ni suchi karan kai padhati ti karvama aave che? :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_45"
                    value={data.select_45}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={3}>option 1</option>
                    <option value={2}>option 2</option>
                    <option value={1}>option 3</option>
                    <option value={0}>option 4</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    suchi karan mate ketla pustakoni kariyawahi baki che?:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_46"
                    value={data.select_46}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={0}>option 1</option>
                    <option value={2}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    grath apel mate ni ai pathati amal ma che?:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_47"
                    value={data.select_47}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={3}>option 1</option>
                    <option value={2}>option 2</option>
                    <option value={1}>option 3</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    vanhako ne ketla divas mate pustako vanchva apai che?:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_48"
                    value={data.select_48}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    niyat mudadt ma pustak parat na aave te late fees levai che?
                    ketli :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_49"
                    value={data.select_49}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    niyat mudat ma grantho pacha na aave to smruti partro lakhai
                    che?:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_50"
                    value={data.select_50}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    vanchako ne joitu pustak medvi sake te mate aagav thi pustak
                    reserve karvani sagwad aapai che ? kevi rete :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_51"
                    value={data.select_51}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    hare vanchva apel pustako ni kul sankhiya :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_52"
                    value={data.select_52}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={4}>option 1</option>
                    <option value={3}>option 2</option>
                    <option value={2}>option 1</option>
                    <option value={1}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    aantar grathalay loan ni suvidha che? :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_53"
                    value={data.select_53}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    granthalay ma aalag sandharbhav vibhag che?:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_54"
                    value={data.select_54}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    sandharbh grathni ni sankhiya :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_55"
                    value={data.select_55}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={0}>option 1</option>
                    <option value={1}>option 2</option>
                    <option value={2}>option 3</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    aapti sandharbh seva ni nondh mate aalag aalag register
                    rakhai he?:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_56"
                    value={data.select_56}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={1}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    sandharbh seva na labh lenar vanhko ni varsik sankhiya :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_57"
                    value={data.select_57}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={5}>option 1</option>
                    <option value={4}>option 2</option>
                    <option value={3}>option 3</option>
                    <option value={0}>option 4</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    xerox ke evii koi suvidha aapai che?:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_58"
                    value={data.select_58}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    grathalay ma mangavta deniko ni sankhiya :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_59"
                    value={data.select_59}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={0}>option 1</option>
                    <option value={3}>option 2</option>
                    <option value={5}>option 3</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    garhalay ma mangavta samayako ni sankhiya:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_60"
                    value={data.select_60}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={0}>option 1</option>
                    <option value={1}>option 2</option>
                    <option value={2}>option 3</option>
                    <option value={4}>option 4</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    denik patro mate no kharch :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_61"
                    value={data.select_61}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={3}>option 1</option>
                    <option value={2}>option 2</option>
                    <option value={1}>option 3</option>
                    <option value={0}>option 4</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    samayiko mate no kharch:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_62"
                    value={data.select_62}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={0}>option 1</option>
                    <option value={1}>option 2</option>
                    <option value={2}>option 3</option>
                    <option value={3}>option 4</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    vanchnalay ma aavta vanchko ni nondh mate register rakhvama
                    aave che? :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_63"
                    value={data.select_63}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={1}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    garnthalay ma mangavama aavta samayiko petik bandhavine
                    sachvama aavta samyaiko ni sankhiya:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_64"
                    value={data.select_64}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    bandhayel samayiko vanchkone pustak savroop e issue karai
                    che? :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_65"
                    value={data.select_65}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    samayiko na chuta aanko vanchakone issue karai che?:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_66"
                    value={data.select_66}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    samayiko na juna aanko vechan mukai che :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_67"
                    value={data.select_67}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    mahila sabhiyo mate aalag vibhag che?:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_68"
                    value={data.select_68}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    baad sabhiyo mate aalag vibhag che? :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_69"
                    value={data.select_69}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    mahila sabhiyo mate aapti vishist seva ni vegato:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_70"
                    value={data.select_70}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    vacation ma badko mate aapati vishist sevao ke thati
                    padhatio aange ni vigato :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_71"
                    value={data.select_71}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    sabhiy nodhai mate kai padhati aamal ma che?:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_72"
                    value={data.select_72}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={3}>option 1</option>
                    <option value={2}>option 2</option>
                    <option value={1}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    jamingiri levai che? :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_73"
                    value={data.select_73}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    deposit levai che ? ketli?:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_74"
                    value={data.select_74}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={3}>option 1</option>
                    <option value={2}>option 2</option>
                    <option value={1}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    baad sabhiyo ni deposit levai che? ketli? :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_75"
                    value={data.select_75}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={3}>option 1</option>
                    <option value={2}>option 2</option>
                    <option value={1}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    lavajam levai che? ketlu?:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_76"
                    value={data.select_76}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={4}>option 1</option>
                    <option value={3}>option 2</option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    varas darmiyan raad thayela sabhiyo ni sankhiya :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_77"
                    value={data.select_77}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={3}>option 1</option>
                    <option value={2}>option 2</option>
                    <option value={1}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    grathalay sabhiyo ni sankhiya:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_78"
                    value={data.select_78}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={4}>option 1</option>
                    <option value={3}>option 2</option>
                    <option value={2}>option 1</option>
                    <option value={1}>option 2</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    garnthalay vistran pravrutiyo nu aayojan thai che? :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_79"
                    value={data.select_79}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={3}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    varas darmiyan keva ne ketla kariyakaram karai :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_80"
                    value={data.select_80}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={0}>option 1</option>
                    <option value={2}>option 2</option>
                    <option value={3}>option 1</option>
                    <option value={4}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    loko joi sake te rete granthalay bahar naam darshav tu board
                    rakhel che? :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_81"
                    value={data.select_81}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    garnthalay no samay thata aathwadik :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_82"
                    value={data.select_82}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    makan purti hawa ujas wadu che?
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_83"
                    value={data.select_83}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    makan ma vanchako mate prathmik jaruriyaaat ni suvidha che?:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_84"
                    value={data.select_84}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    makan ma darek sathad e purti safai rakhvama aave che? :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_85"
                    value={data.select_85}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    grathalay ma jantunashak davao no niyamit chantkavo thai
                    che? :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_86"
                    value={data.select_86}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    parat aavela pustako granth bandar ma samai saar gothavai
                    che?:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_87"
                    value={data.select_87}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    granthpal no vanchako sathe no vevhar swanjaniya pun janai
                    che? :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_88"
                    value={data.select_88}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    granthalay ma visit book rakhva ma aave che?:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_89"
                    value={data.select_89}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={3}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    chele nondh kyare theyel che? :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_90"
                    value={data.select_90}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    granthalay ma nibhawama aavta registero aane aaniya daftar
                    aadhiyatan rakhai che?:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_91"
                    value={data.select_91}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={3}>option 1</option>
                    <option value={1}>option 2</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    granthalay ni aagav karel tapasani darmiyan aapva ma aavel
                    vanha o ni purta karel che? :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_92"
                    value={data.select_92}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    granthalay dawara aapati vishist seva o pravrutiyo ulekh
                    patr koi vishasta ke padhati hoito teni vigato :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_93"
                    value={data.select_93}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    granthalay na vikas mate vevastha tantra ni dhagas :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_94"
                    value={data.select_94}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={1}>option 2</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    granthalay mate nankiy strona vadharva:
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_95"
                    value={data.select_95}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>option 1</option>
                    <option value={0}>option 2</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3 col-13 align-items-center">
                <div className="col">
                  <label className="col-form-label col highlight">
                    vyavasthatantrnu pradan :
                  </label>
                </div>
              </div>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col">
                  <label className="col-sm-10 col-form-label">
                    granthalay samitini rachana karel che? :
                  </label>
                </div>
                <div className="col">
                  <select
                    required
                    id="inputState"
                    onClick={handleInput}
                    name="select_1"
                    value={data.select_1}
                    onChange={handleInput}
                    className="form-select"
                  >
                    <option selected value={0}>
                      Select
                    </option>
                    <option value={2}>ha</option>
                    <option value={0}>na</option>
                  </select>
                </div>
              </div>
              <center>
                <div className="row mb-3 tab2 col-sm-13 align-items-center">
                  <div className=" col">
                    <a href="/">
                      <button type="button" className="btn btn-primary">
                        Back
                      </button>
                    </a>
                  </div>

                  <div className=" col">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </center>
            </div>
          )}
        </form>
      )}
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}
export default Motibhaiamin_1;
