import "../pages/Form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import { useRef, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
function Addnew() {
  const [loader, setloader] = useState("false");

  const pdfref = useRef();
  const downloadpdf = () => {
    const input = pdfref.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a0", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfheight = pdf.internal.pageSize.getHeight();
      const imgwidth = canvas.width;
      const imgheight = canvas.height;
      const imgx = 200;
      const imgy = 0;
      console.log(pdfWidth);
      console.log(imgwidth);
      pdf.addImage(imgData, "PNG", imgx, imgy);
      pdf.save("DataTable.pdf");
    });
  };

  const navigate = useNavigate();
  const d = new Date();
  let year = d.getFullYear();
  const [data, setdata] = useState({
    uid: "",
    lname: "",
    gam: "",
    pin: "",
    taluko: "",
    sthapnadate: "",
    district: "",
    registernumber: "",
    emailmen: "",
    emailmenaddres: "",
    libraryen: "",
    libraryenaddres: "",
    libraryeneducation: "",
    email: "",
    phone: "",
  });

  const [pd, setpd] = useState([]);
  const [count, setcount] = useState();

  useEffect(() => {
    const dataget = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5555/district/${localStorage.getItem("district")}`
        );
        console.log(response.data), setpd(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    dataget();
    const getcount = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/Count/Count`);
        console.log(response.data[0].count), setcount(response.data[0].count);
      } catch (error) {
        console.log(error);
      }
    };
    getcount();
  }, []);

  // let Uid = "VAD000" ;
  const [Uid, setUid] = useState("");
  const handleInput = (e) => {
    // console.log(e);
    console.log("count is " + count);
    // console.log(pd.length);
    // console.log(editvalu);

    const name = e.target.name;
    const value = e.target.value;

    if (edit == "true") {
      seteditvalue({
        ...data,
        [name]: value,
        ["uid"]: editvalu.uid,
      });
    }

    setdata({
      ...data,
      [name]: value,
      ["uid"]: Uid,
    });

    if (count > 99) {
      // Uid = ;
      setUid(localStorage.getItem("code") + "0"+count);
    } else {
      setUid(localStorage.getItem("code") + "00" + count);
    }
    setUidset("false");
    console.log(data);
  };
  let [Uidset, setUidset] = useState("false");
  let [list, setlist] = useState([]);

  const handleSubmit = async () => {
    // console.log(data);
    setloader("true");
    try {
      const dataget = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5555/district/${localStorage.getItem("district")}`
          );
          console.log(
            `http://localhost:5555/district/${localStorage.getItem("district")}`
          );

          console.log(response.data), setpd(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      dataget();
      if (pd.length > 99) {
        // Uid = ;
        setUid(localStorage.getItem("code")+"0" + count);
      } else {
      setUid(localStorage.getItem("code") + "00" + count);
      }
      setUidset("true");

      console.log(list);
      console.log();

      const senddata = await fetch(`http://localhost:5555/form/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (senddata.ok) {
        console.log(data);
        setdata({
          uid: "",
          lname: "",
          gam: "",
          pin: "",
          taluko: "",
          categoryoflibrary: "",
          sthapnadate: "",
          district: "",
          registernumber: "",
          emailmen: "",
          emailmenaddres: "",
          libraryen: "",
          libraryenaddres: "",
          libraryeneducation: "",
          libraryensalary: "",
        });
        let templist = [
          ...list,
          {
            name: data.lname,
            uid: data.uid,
            lname: "",
            gam: data.gam,
            pin: data.pin,
            taluko: data.taluko,
            categoryoflibrary: data.categoryoflibrary,
            sthapnadate: data.sthapnadate,
            district: data.district,
            registernumber: data.registernumber,
            emai: data.email,
            emailmenaddres: data.emailmenaddres,
            phone: data.phone,
            libraryenaddres: "",
          },
        ];
        setlist(templist);
        const dataget = async () => {
          try {
            const response = await axios.get(
              `http://localhost:5555/district/${localStorage.getItem(
                "district"
              )}`
            );
            console.log(response.data), setpd(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        dataget();
        // navigate("/showid", { state: { id: Uid } });
        // navigate("/Home1");
        setloader("false");
      }
      try {
        console.log("mihir");
        let ind = count + 1;
        // setcount({count: ind + 1})
        const senddata = await fetch(`http://localhost:5555/Count/${count} `, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({ count: ind }),
        });
        if (senddata.ok) {
          console.log("done " + count);

          setloader("false");
        }
      } catch (error) {
        console.log("error");
        console.log(error);
        alert("data not submited try again");
        setloader("false");
      }
    } catch (error) {
      console.log("error");
      console.log(error);
      setloader("false");
      alert("data not submited");
    }
    const getcount = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/Count/Count`);
        console.log(response.data[0].count), setcount(response.data[0].count);
      } catch (error) {
        console.log(error);
      }
    };
    getcount();
  };

  async function handledelete(i) {
    // list.remove(i);

    const delet = await fetch(`http://localhost:5555/form/${i.uid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid: i.uid }),
    });

    if (delet) {
      const dataget = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5555/district/${localStorage.getItem("district")}`
          );
          console.log(response.data), setpd(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      dataget();
      var index = list.indexOf(i);
      if (index > -1) {
        list.splice(index, 1);
      }
      console.log(i);

      let templist = [...list];
      setlist(templist);
    }
  }
  const [edit, setedit] = useState("false");
  const [editvalu, seteditvalue] = useState();
  function setvalue(i) {
    setedit("true");
    setdata({
      uid: i.uid,
      lname: i.lname,
      gam: i.gam,
      pin: i.pin,
      taluko: i.taluko,
      categoryoflibrary: i.categoryoflibrary,
      sthapnadate: i.sthapnadate,
      district: i.district,
    });
    seteditvalue(i);
  }
  async function handleedit() {
    console.log("mihir");
    setloader("true");
    console.log(editvalu);

    const edit = await fetch(`http://localhost:5555/form/${editvalu.uid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editvalu),
    });
    console.log("done");

    if (edit) {
      const dataget = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5555/district/${localStorage.getItem("district")}`
          );
          console.log(response.data), setpd(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      dataget();
      setedit("false");
      setloader("false");
    }
  }

  const number = useRef();
  const checkpin = () => {
    const arr = pd.filter((elm) => elm.uid === number.current.value);
    console.log(arr);
    setloader("true");
    if (arr.length !== 0) {
      setdata(arr[arr.length - 1]);
      console.log(data);
      setloader("false");
    } else {
      setdata({
        uid: "",
        lname: "",
        gam: "",
        pin: "",
        taluko: "",
        categoryoflibrary: "",
        sthapnadate: "",
        district: "",
        registernumber: "",
        emailmen: "",
        emailmenaddres: "",
        libraryen: "",
        libraryenaddres: "",
        libraryeneducation: "",
        libraryensalary: "",
      });
      setloader("false");
    }

    console.log(pin);
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
        <div>
          <NavBar titel={"ગ્રામ ગ્રંથાલયનો નિરીક્ષણ અહેવલ  "}></NavBar>
          <div ref={pdfref} className="form ">
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col-2">
                <label className="col-sm-10 col-form-label">
                  ગ્રંથાલયનું નામ :
                </label>
              </div>
              <div className="col-10">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="gname"
                  autoComplete="off"
                  name="lname"
                  value={data.lname}
                  // placeholder={pin[0].lname}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className="col-1">
                <label className="col-form-label">ગામ :</label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="gam"
                  value={data.gam}
                  onChange={handleInput}
                  className="form-select"
                >
                  <option selected>select</option>
                  <option>gam</option>
                  <option>gam-1</option>
                  <option>gam-3</option>
                  <option>gam-2</option>
                </select>
              </div>

              <div className="col-1">
                <label className="col-form-label">તાલુકો :</label>
              </div>
              <div className="col">
                <select
                  required
                  id="inputState"
                  name="taluko"
                  value={data.taluko}
                  onChange={handleInput}
                  className="form-select"
                >
                  <option selected>{data.taluko}</option>
                  <option>taluko-1</option>
                  <option>taluko-2</option>
                  <option>taluko-3</option>
                </select>
              </div>
              <div className="col-1">
                <label className="col-form-label">જીલો :</label>
              </div>
              <div className="col">
                <select
                  required
                  name="district"
                  value={data.district}
                  onChange={handleInput}
                  id="inputState"
                  className="form-select"
                >
                  <option selected>Select</option>

                  <option>Gandhinagar</option>
                  <option>Meshana</option>
                  <option>Vadodara</option>
                  <option>Surat</option>
                  <option>Ahmedabad</option>
                  <option>Bhavnagar</option>
                  <option>Rajkot</option>
                </select>
              </div>
              <div className="col-1">
                <label className="col-form-label">પિન કોડ :</label>
              </div>
              <div className=" col">
                <input
                  required
                  type="number"
                  name="pin"
                  value={data.pin}
                  onChange={handleInput}
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className="col">
                <label className="col-form-label col-sm-10">
                  સ્થાપના તારીખ:
                </label>
              </div>
              <div className="col">
                <input
                  required
                  type="date"
                  name="sthapnadate"
                  value={data.sthapnadate}
                  onChange={handleInput}
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>

              <div className="col">
                <label className="col-form-label col-sm-10">કેટેગરી:</label>
              </div>
              <div className="col">
                <select
                  required
                  name="categoryoflibrary"
                  value={data.categoryoflibrary}
                  onChange={handleInput}
                  className="form-select"
                >
                  <option selected>Select</option>
                  <option>નગર કક્ષા-૧</option>
                  <option>નગર કક્ષા-૨</option>
                  <option>બાળ લાયબ્રેરી</option>
                  <option>મહિલા લાયબ્રેરી</option>
                  <option>ગ્રામ ગ્રંથાલય</option>
                  <option>શહેર શાખા</option>
                  <option>શહેર લાઇબ્રેરી</option>
                  <option>અંધજન લાયબ્રેરી</option>
                  <option>વિશિષ્ટ લાઇબ્રેરી</option>
                </select>
              </div>
              <div className="col-1">
                <label className="col-form-label ">ફોન નંબર</label>
              </div>
              <div className="col">
                <input
                  // required
                  // value={}
                  name="phone"
                  value={data.phone}
                  onChange={handleInput}
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="col-sm-2">
                <label className="col-form-label ">ઈમેલ આઈડી :</label>
              </div>
              <div className="col">
                <input
                  // required
                  name="email"
                  value={data.email}
                  onChange={handleInput}
                  type="email"
                  className="form-control"
                />
              </div>
            </div>
            <center>
              <div className="row mb-3 tab2 col-sm-13 align-items-center">
                <div className=" col">
                  <a href="/">
                    <button type="button" className="btn btn-warning">
                      Back
                    </button>
                  </a>
                </div>

                <div className=" col">
                  <button
                    type="button"
                    onClick={downloadpdf}
                    className="btn btn-primary"
                  >
                    downloadpdf
                  </button>
                </div>

                
                {edit === "false" && (
                  <div className=" col">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                )}
                {edit === "true" && (
                  <div className=" col">
                    <button
                      type="submit"
                      onClick={handleedit}
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
            </center>
            {Uidset === "true" && <h1>{Uid}</h1>}
          </div>
          {pd.length !== 0 && (
            <>
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className=" col-2">
                  <label className="col col-form-label">UID :</label>
                </div>
                <div className="col">
                  <input
                    required
                    type="text"
                    className="form-control"
                    autoComplete="off"
                    ref={number}
                  />
                </div>
                <div className=" col-2">
                  <button
                    type="button"
                    onClick={checkpin}
                    className="btn btn-primary"
                  >
                    Search
                  </button>
                </div>
              </div>
              <table className="table-bordered table-hover datatable">
                <tr>
                  <th className="helight">name</th>
                  <th className="helight">id</th>
                  <th className="helight"></th>
                </tr>

                {pd.map((i) => (
                  <tr>
                    <th key={i.lname}> {i.lname}</th>
                    <th key={i.uid}> {i.uid}</th>
                    <th>
                      <button
                        type="button"
                        onClick={() => setvalue(i)}
                        className="btn btn-info"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handledelete(i)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                ))}
              </table>
            </>
          )}
          <div>
            <Footer></Footer>
          </div>
        </div>
      )}
    </>
  );
}
export default Addnew;
