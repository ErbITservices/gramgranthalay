import "./Form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";
function Addnew() {
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
    libraryensalary: "",
  });

  const [pd, setpd] = useState([]);

  useEffect(() => {
    const dataget = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/form/`);
        console.log(response.data), setpd(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    dataget();
  }, []);

  let Uid = "VAD00" + pd.length;
  if (pd.length > 99) {
    Uid = "VAD0" + pd.length;
  }
  const handleInput = (e) => {
    // console.log(e);
    console.log(pd.length);

    const name = e.target.name;
    const value = e.target.value;
    setdata({
      ...data,
      [name]: value,
      ["uid"]: Uid,
    });

    console.log(data);
  };

  const handleSubmit = async () => {
    // console.log(data);

    try {
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
        navigate("/showid", { state: { id: Uid } });
      }
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  };

  return (
    <div ref={pdfref} className="form ">
      <NavBar titel={"ગ્રામ ગ્રંથાલયનો નિરીક્ષણ અહેવલ  "}></NavBar>

      <div className="row mb-3 col-sm-13 align-items-center">
        <div className=" col-2">
          <label for="inputPassword" className="col-sm-10 col-form-label">
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
          <label for="inputPassword6" className="col-form-label">
            ગામ :
          </label>
        </div>
        <div className="col">
          <select
            id="inputState"
            name="gam"
            value={data.gam}
            onChange={handleInput}
            className="form-select"
          >
            <option selected>{data.gam}</option>
            <option>gam</option>
            <option>gam-1</option>
            <option>gam-3</option>
            <option>gam-2</option>
          </select>
        </div>
        <div className="col-1">
          <label for="inputPassword6" className="col-form-label">
            પિન :
          </label>
        </div>
        <div className="row col">
          <input
            required
            type="number"
            id="inputPassword6"
            name="pin"
            value={data.pin}
            onChange={handleInput}
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div className="col-1">
          <label for="inputPassword6" className="col-form-label">
            તાલુકો :
          </label>
        </div>
        <div className="col">
          <select
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
          <label for="inputPassword6" className="col-form-label">
            જીલો :
          </label>
        </div>
        <div className="col">
          <select
            name="district"
            value={data.district}
            onChange={handleInput}
            id="inputState"
            className="form-select"
          >
            <option selected>{data.district}</option>

            <option>district - 1</option>
            <option>district - 2</option>
            <option>district - 3</option>
          </select>
        </div>
      </div>
      <div className="row mb-3 col-sm-13 align-items-center">
        <div className="col">
          <label for="inputPassword6" className="col-form-label col-sm-10">
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
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>

        <div className="col-1">
          <label for="inputPassword6" className="col-form-label ">
            ફોન નંબર
          </label>
        </div>
        <div className="col">
          <input
            // required
            // value={}
            type="number"
            className="form-control"
          />
        </div>
        <div className="col-sm-2">
          <label for="inputPassword6" className="col-form-label ">
            ઈમેલ આઈડી :
          </label>
        </div>
        <div className="col">
          <input
            // required
            // name="studypeople"
            // value={data.studypeople}
            // onChange={handleInput}
            type="email"
            id="inputPassword6"
            className="form-control"
          />
        </div>
      </div>
      <center>
        <div className="row mb-3 tab2 col-sm-13 align-items-center">
          <div className=" col">
            <a href="/home1">
              <button type="button" className="btn btn-primary">
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
          <div className=" col">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      </center>
    </div>
  );
}
export default Addnew;
