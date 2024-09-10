import "../pages/Form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";

import { BiBook, BiBookOpen } from "react-icons/bi";
import Footer from "../components/Footer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FadeLoader } from "react-spinners";
function Master() {
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
    male: "",
    female: "",
    studypeople: "",
    studymale: "",
    studyfemale: "",
    studychild: "",
    lavaj: "",
    lavajamount: "",
    workinghourslibrary: "",
    workinghoursbook: "",
    handleby: "",
    registernumber: "",
    emailmen: "",
    emailmenaddres: "",
    libraryen: "",
    libraryenaddres: "",
    libraryeneducation: "",
    libraryensalary: "",
    housestate: "",
    houserent: "",
    hosestatus: "",
    aircondition: "",
    openforevryone: "",
    lastyearbookcount: "",
    currentyearbookcount: "",
    lastyearaddedbook: "",
    endyearabookcount: "",
    publishbook: "",
    newspapercount: "",
    newpaper: "",
    parigrahan: "",
    register: "",
    deadregister: "",
    attendencregister: "",
    anualrequest: "",
    recieptbook: "",
    voucherbook: "",
    rojmel: "",
    commandbook: "",
    publishregister: "",
    followinstructoin: "",
    whichlevel: "",
    requirment: "",
    grant: "",
    vanchansamagrik: "",
    vanchansamagrim: "",
    pagark: "",
    pagarm: "",
    note1: "",
    note2: "",
    note3: "",
    furnichark: "",
    furnicharm: "",
    otherm: "",
    otherk: "",
    alavajam: "",
    aintrest: "",
    arent: "",
    awest: "",
    agrant: "",
    ahelp: "",
    adistrict: "",
    ataluko: "",
    agam: "",
    aotherhelp: "",
    aother: "",
    aprevios: "",
    kbook: "",
    knewspaper: "",
    kbookbinding: "",
    kinfletion: "",
    ksalary: "",
    kother: "",
    kfurnichar: "",
    kfurnicharrepair: "",
    kotherbuy: "",
    krent: "",
    krepair: "",
    ktax: "",
    kstationary: "",
    kmail: "",
    ktrip: "",
    kpremium: "",
    klightbill: "",
    kothersmall: "",
  });

  const [pd, setpd] = useState([]);

  useEffect(() => {
    const dataget = async () => {
      try {
        console.log("mihir");

        const response = await axios.get(`http://localhost:5555/form/`);
        console.log(response.data), setpd(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    dataget();
  }, []);

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
  const handleCheck = (e) => {
    // console.log(data);
    const name = e.target.name;
    const value = e.target.checked;
    setdata({
      ...data,
      [name]: value,
    });
    // console.log(data);
  };

  const handleSubmit = async () => {
    // console.log(data);
    // console.log(pd);
    setloader("true");
    try {
      console.log("mihir");

      const senddata = await fetch(`http://localhost:5555/form/${data.uid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (senddata.ok) {
        console.log(data);
        setdata({
          lname: "",
          gam: "",
          pin: "",
          taluko: "",
          sthapnadate: "",
          district: "",
          male: "",
          female: "",
          studypeople: "",
          studymale: "",
          studyfemale: "",
          categoryoflibrary: "",
          studychild: "",
          lavaj: "",
          lavajamount: "",
          workinghourslibrary: "",
          workinghoursbook: "",
          handleby: "",
          registernumber: "",
          emailmen: "",
          emailmenaddres: "",
          libraryen: "",
          libraryenaddres: "",
          libraryeneducation: "",
          libraryensalary: "",
          housestate: "",
          houserent: "",
          hosestatus: "",
          aircondition: "",
          openforevryone: "",
          lastyearbookcount: "",
          currentyearbookcount: "",
          lastyearaddedbook: "",
          endyearabookcount: "",
          publishbook: "",
          newspapercount: "",
          newpaper: "",
          parigrahan: "",
          register: "",
          deadregister: "",
          attendencregister: "",
          anualrequest: "",
          recieptbook: "",
          voucherbook: "",
          rojmel: "",
          commandbook: "",
          publishregister: "",
          followinstructoin: "",
          whichlevel: "",
          requirment: "",
          grant: "",
          vanchansamagrik: "",
          vanchansamagrim: "",
          pagark: "",
          pagarm: "",
          note1: "",
          note2: "",
          note3: "",
          furnichark: "",
          furnicharm: "",
          otherm: "",
          otherk: "",
          alavajam: "",
          aintrest: "",
          arent: "",
          awest: "",
          agrant: "",
          ahelp: "",
          adistrict: "",
          ataluko: "",
          agam: "",
          aotherhelp: "",
          aother: "",
          aprevios: "",
          kbook: "",
          knewspaper: "",
          kbookbinding: "",
          kinfletion: "",
          ksalary: "",
          kother: "",
          kfurnichar: "",
          kfurnicharrepair: "",
          kotherbuy: "",
          krent: "",
          krepair: "",
          ktax: "",
          kstationary: "",
          kmail: "",
          ktrip: "",
          kpremium: "",
          klightbill: "",
          kothersmall: "",
          email: "",
          phone: "",
        });
        setloader("false");
      }
    } catch (error) {
      console.log("error");
      console.log(error);
      alert("data not submited try again");
      setloader("false");
    }
  };
  const number = useRef();
  const [pin, setpin] = useState([
    {
      lname: "",
      gam: "",
      pin: "",
      taluko: "",
      sthapnadate: "",
      district: "",
      male: "",
      female: "",
      categoryoflibrary: "",
      studypeople: "",
      studymale: "",
      studyfemale: "",
      studychild: "",
      lavaj: "",
      lavajamount: "",
      workinghourslibrary: "",
      workinghoursbook: "",
      handleby: "",
      registernumber: "",
      emailmen: "",
      emailmenaddres: "",
      libraryen: "",
      libraryenaddres: "",
      libraryeneducation: "",
      libraryensalary: "",
      housestate: "",
      houserent: "",
      hosestatus: "",
      aircondition: "",
      openforevryone: "",
      lastyearbookcount: "",
      currentyearbookcount: "",
      lastyearaddedbook: "",
      endyearabookcount: "",
      publishbook: "",
      newspapercount: "",
      newpaper: "",
      parigrahan: "",
      register: "",
      deadregister: "",
      attendencregister: "",
      anualrequest: "",
      recieptbook: "",
      voucherbook: "",
      rojmel: "",
      commandbook: "",
      publishregister: "",
      followinstructoin: "",
      whichlevel: "",
      requirment: "",
      grant: "",
      vanchansamagrik: "",
      vanchansamagrim: "",
      pagark: "",
      pagarm: "",
      note1: "",
      note2: "",
      note3: "",
      furnichark: "",
      furnicharm: "",
      otherm: "",
      otherk: "",
      alavajam: "",
      aintrest: "",
      arent: "",
      awest: "",
      agrant: "",
      ahelp: "",
      adistrict: "",
      ataluko: "",
      agam: "",
      aotherhelp: "",
      aother: "",
      aprevios: "",
      kbook: "",
      knewspaper: "",
      kbookbinding: "",
      kinfletion: "",
      ksalary: "",
      kother: "",
      kfurnichar: "",
      kfurnicharrepair: "",
      kotherbuy: "",
      krent: "",
      krepair: "",
      ktax: "",
      kstationary: "",
      kmail: "",
      ktrip: "",
      kpremium: "",
      klightbill: "",
      kothersmall: "",
      email: "",
      phone: "",
    },
  ]);
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
        sthapnadate: "",
        district: "",
        male: "",
        female: "",
        studypeople: "",
        studymale: "",
        studyfemale: "",
        studychild: "",
        lavaj: "",
        lavajamount: "",
        workinghourslibrary: "",
        workinghoursbook: "",
        handleby: "",
        registernumber: "",
        emailmen: "",
        emailmenaddres: "",
        libraryen: "",
        libraryenaddres: "",
        libraryeneducation: "",
        libraryensalary: "",
        housestate: "",
        houserent: "",
        hosestatus: "",
        aircondition: "",
        openforevryone: "",
        lastyearbookcount: "",
        currentyearbookcount: "",
        lastyearaddedbook: "",
        endyearabookcount: "",
        publishbook: "",
        newspapercount: "",
        newpaper: "",
        parigrahan: "",
        register: "",
        deadregister: "",
        attendencregister: "",
        anualrequest: "",
        recieptbook: "",
        voucherbook: "",
        rojmel: "",
        commandbook: "",
        publishregister: "",
        followinstructoin: "",
        whichlevel: "",
        requirment: "",
        grant: "",
        vanchansamagrik: "",
        vanchansamagrim: "",
        pagark: "",
        pagarm: "",
        note1: "",
        note2: "",
        note3: "",
        furnichark: "",
        furnicharm: "",
        otherm: "",
        otherk: "",
        alavajam: "",
        aintrest: "",
        arent: "",
        awest: "",
        agrant: "",
        ahelp: "",
        adistrict: "",
        ataluko: "",
        agam: "",
        aotherhelp: "",
        aother: "",
        aprevios: "",
        kbook: "",
        knewspaper: "",
        kbookbinding: "",
        kinfletion: "",
        ksalary: "",
        kother: "",
        kfurnichar: "",
        kfurnicharrepair: "",
        kotherbuy: "",
        krent: "",
        krepair: "",
        ktax: "",
        kstationary: "",
        kmail: "",
        ktrip: "",
        kpremium: "",
        klightbill: "",
        kothersmall: "",
        email: "",
        phone: "",
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
                <label className="col-sm-10 col-form-label">UID :</label>
              </div>
              <div className="col-8">
                <input
                  required
                  type="text"
                  className="form-control"
                  autoComplete="off"
                  ref={number}
                  name="uid"
                  value={data.uid}
                  onChange={handleInput}
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
                  <option selected>{data.gam}</option>
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
                  <option selected>{data.district}</option>

                  <option>district - 1</option>
                  <option>district - 2</option>
                  <option>district - 3</option>
                </select>
              </div>
              <div className="col-1">
                <label className="col-form-label">પિન કોડ :</label>
              </div>
              <div className="col">
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
                <label className="col-form-label ">વસ્તી : પુરશો</label>
              </div>
              <div className="col">
                <input
                  required
                  name="male"
                  value={data.male}
                  onChange={handleInput}
                  type="number"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>
              <div className="col-1">
                <label className="col-form-label ">સ્ત્રી :</label>
              </div>
              <div className="col">
                <input
                  required
                  name="female"
                  value={data.female}
                  onChange={handleInput}
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="col-1">
                <label className="col-form-label ">કુલ :</label>
              </div>
              <div className="col">
                <input
                  required
                  value={Number(data.male) + Number(data.female)}
                  type="number"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>
            </div>
            <div className="row mb-1 col-sm-13 align-items-center">
              <div className="col-sm-2">
                <label className="col-form-label ">ભણેલાઓ ની સાંખ્ય :</label>
              </div>
              <div className="col">
                <input
                  required
                  name="studypeople"
                  value={data.studypeople}
                  onChange={handleInput}
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="col">
                <label className="col-form-label ">સભ્ય સંખ્યા : પુરુષ</label>
              </div>
              <div className="col">
                <input
                  required
                  name="studymale"
                  value={data.studymale}
                  onChange={handleInput}
                  type="number"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>
              <div className="col-1">
                <label className="col-form-label ">સ્ત્રી :</label>
              </div>
              <div className="col">
                <input
                  required
                  name="studyfemale"
                  value={data.studyfemale}
                  onChange={handleInput}
                  type="number"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>
              <div className="col-1">
                <label className="col-form-label ">બાળકો :</label>
              </div>
              <div className="col">
                <input
                  required
                  name="studychild"
                  value={data.studychild}
                  onChange={handleInput}
                  type="number"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>
              <div className="col-1">
                <label className="col-form-label ">કુલ</label>
              </div>
              <div
                className="col
        "
              >
                <input
                  required
                  value={
                    Number(data.studychild) +
                    Number(data.studyfemale) +
                    Number(data.studymale)
                  }
                  type="number"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className="col-sm-3">
                <label className="col-form-label ">
                  સબ્યો પાસેથી લવાજમ લેવામા આવે છે? :
                </label>
              </div>

              <div className="col-2">
                <select
                  required
                  name="lavaj"
                  value={data.lavaj}
                  className="form-select"
                  onChange={handleInput}
                >
                  <option selected>Select</option>
                  <option value="ha">Ha</option>
                  <option value="na">Na</option>
                </select>
              </div>
              {data.lavaj === "ha" && (
                <>
                  <div className="col-2">
                    <label className="col-form-label ">વાર્ષિક :</label>
                  </div>
                  <div className="col-2">
                    <input
                      required
                      name="lavajamount"
                      value={data.lavajamount}
                      onChange={handleInput}
                      type="number"
                      className="form-control"
                    />
                  </div>
                </>
              )}
            </div>

            <div className="row mb-3 col-sm-13 align-items-center">
              <div className="col-3">
                <label className="col-form-label col-sm-10">
                  કામકાજના કલાકો: પુસ્તક આપ લે વિભાગ :
                </label>
              </div>
              <div className="col-2">
                <input
                  required
                  name="workinghoursbook"
                  value={data.workinghoursbook}
                  onChange={handleInput}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="col-2">
                <label className="col-form-label col-sm-10">વાંચનાલય :</label>
              </div>
              <div className="col-2">
                <input
                  required
                  name="workinghourslibrary"
                  value={data.workinghourslibrary}
                  onChange={handleInput}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className="col-3">
                <label className="col-form-label col-sm-10">
                  ગ્રંથાલયનુ વ્યાવસ્થાતંત્ર : પંચાયત/સંસ્થા/મંડળ/શાળા/અન્ય
                  સંચાલિત
                </label>
              </div>
              <div className="col-2">
                <select
                  required
                  className="form-select"
                  name="handleby"
                  value={data.handleby}
                  onChange={handleInput}
                >
                  <option selected>પસંદ કરો</option>
                  <option value="ha">panchayat</option>
                  <option value="na">Mandan</option>
                  <option value="na">school</option>
                  <option value="na">other</option>
                </select>
              </div>
              <div className="col-4">
                <label className="col-form-label col-sm-10">
                  વ્યાવસ્થાતંત્ર રજીસ્ટર હોય તો નોંધણી ક્રમાંક :
                </label>
              </div>
              <div className="col-2">
                <input
                  required
                  name="registernumber"
                  value={data.registernumber}
                  onChange={handleInput}
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col-3">
                <label className="col-sm-10 col-form-label">
                  પત્ર વ્યાહાર માટે જવાબદાર વ્યક્તિનુ નામ :
                </label>
              </div>
              <div className="col-9">
                <input
                  required
                  type="text"
                  name="emailmen"
                  value={data.emailmen}
                  onChange={handleInput}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col-3">
                <label
                  for="exampleFormControlTextarea1"
                  className="col-sm-10 col-form-label"
                >
                  હોદો આને પૂરું સરનામું :
                </label>
              </div>
              <div className="col-9">
                <textarea
                  name="emailmenaddres"
                  value={data.emailmenaddres}
                  onChange={handleInput}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className=" col-3 mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  className="col-sm-10 col-form-label"
                >
                  ગ્રંથપાલનુ નામ :
                </label>
              </div>
              <div className="col-9">
                <input
                  required
                  name="libraryen"
                  value={data.libraryen}
                  onChange={handleInput}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className=" col-3 mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  className="col-sm-10 col-form-label"
                >
                  ગ્રંથપાલનુ સરનામું :
                </label>
              </div>
              <div className="col-9">
                <textarea
                  name="libraryenaddres"
                  value={data.libraryenaddres}
                  onChange={handleInput}
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>
              <div className=" col-3 mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  className="col-sm-10 col-form-label"
                >
                  ગ્રંથપાલનુ લાયકાત:
                </label>
              </div>
              <div className="col-3">
                <select
                  required
                  name="libraryeneducation"
                  value={data.libraryeneducation}
                  onChange={handleInput}
                  className="form-select"
                >
                  <option selected>પસંદ કરો</option>
                  <option value="1">Graduated</option>
                  <option value="2">Post Graduated</option>
                  <option value="2">12th</option>
                  <option value="2">other</option>
                </select>
              </div>
              <div className=" col-3 mb-3">
                <label
                  for="exampleFormControlTextarea1"
                  className="col-sm-10 col-form-label"
                >
                  ગ્રંથપાલનો પગાર :
                </label>
              </div>
              <div className="col-3">
                <input
                  required
                  name="libraryensalary"
                  value={data.libraryensalary}
                  onChange={handleInput}
                  type="number"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className="col-3">
                <label className="col-form-label ">
                  મકાન ગ્રંથાલય ની માલિકી નું છે :
                </label>
              </div>

              <div className="col-2">
                <select
                  required
                  className="form-select"
                  aria-label="Default select example"
                  name="housestate"
                  value={data.housestate}
                  onChange={handleInput}
                >
                  <option selected>પસંદ કરો</option>
                  <option value="ha">Ha</option>
                  <option value="na">Na</option>
                </select>
              </div>
              {data.housestate === "na" && (
                <>
                  <div className="col-2">
                    <label className="col-form-label ">વાર્ષિક ભાડું :</label>
                  </div>
                  <div className="col-2">
                    <input
                      required
                      name="houserent"
                      value={data.houserent}
                      onChange={handleInput}
                      type="number"
                      className="form-control"
                    />
                  </div>
                </>
              )}
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className="col-3">
                <label className="col-form-label ">
                  મકાન ની વર્તમાન સ્થિતિ :
                </label>
              </div>
              <div className="col-2">
                <input
                  required
                  name="hosestatus"
                  value={data.hosestatus}
                  onChange={handleInput}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="col-3">
                <label className="col-form-label ">
                  હવા ઉજાશ આને બીજી સુવિધા છે? :
                </label>
              </div>
              <div className="col-2">
                <select
                  required
                  name="aircondition"
                  value={data.aircondition}
                  onChange={handleInput}
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>પસંદ કરો</option>
                  <option value="ha">Ha</option>
                  <option value="na">Na</option>
                </select>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className="col-5">
                <label className="col-form-label ">
                  ગ્રંથાલય દરેકને માટે કોઈપણ ભેદભાવ વગર ખુલ્લુ છે? :
                </label>
              </div>
              <div className="col-2">
                <select
                  required
                  name="openforevryone"
                  value={data.openforevryone}
                  onChange={handleInput}
                  className="form-select"
                >
                  <option selected>પસંદ કરો</option>
                  <option value="ha">Ha</option>
                  <option value="na">Na</option>
                </select>
              </div>
            </div>
            <div className="row mb-3 col-13 align-items-center">
              <div className="col">
                <label className="col-form-label col highlight">
                  ગત વર્ષના આવક ખર્ચાના હિસાબો : (નમૂના ક મુજબ) :
                </label>
              </div>
            </div>
            <div className="row mb-3 col-13 align-items-center">
              <div className="col-3">
                <label className="col-form-label  ">
                  (1) ગત વર્ષના અંતે પુસ્તકોની સંખ્યા :
                </label>
              </div>
              <div className="col-3">
                <input
                  required
                  name="lastyearbookcount"
                  value={data.lastyearbookcount}
                  onChange={handleInput}
                  type="number"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3 col-13 align-items-center">
              <div className="col-3">
                <label className="col-form-label  ">
                  (2) આ વર્ષમાં ઉમેરાયેલા પુસ્તકો ની સંખ્યા :
                </label>
              </div>
              <div className="col-3">
                <input
                  required
                  name="lastyearaddedbook"
                  value={data.lastyearaddedbook}
                  onChange={handleInput}
                  type="number"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3 col-13 align-items-center">
              <div className="col-3">
                <label className="col-form-label  ">
                  (3) આ વર્ષમાં કમી થયેલા પુસ્તકોની સંખ્યા :
                </label>
              </div>
              <div className="col-3">
                <input
                  required
                  name="currentyearbookcount"
                  value={data.currentyearbookcount}
                  onChange={handleInput}
                  type="number"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3 col-13 align-items-center">
              <div className="col-3">
                <label className="col-form-label  ">
                  (4) વર્ષના અંતે પુસ્તકોની કુલ સંખ્યા :
                </label>
              </div>
              <div className="col-3">
                <input
                  required
                  name="endyearabookcount"
                  value={data.endyearabookcount}
                  onChange={handleInput}
                  type="number"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3 col-13 align-items-center">
              <div className="col-13">
                <label className="col-form-label col highlight">
                  ગ્રંથાલયમાં આવેલ ડેડસ્ટોકની વિગતો (અલગ પત્રકમાં યાદી બનાવીને
                  જોડવી) :
                </label>
              </div>
            </div>
            <div className="row mb-3 col-13 align-items-center">
              <div className="col-3">
                <label className="col-form-label  ">
                  (1) વર્ષ દરમ્યાન ઈશ્યૂ થયેલા કુલ પુસ્તકો (પુસ્તક પરિભ્રમણ) :
                </label>
              </div>
              <div className="col-3">
                <input
                  required
                  name="publishbook"
                  value={data.publishbook}
                  onChange={handleInput}
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="col-3">
                <label className="col-form-label  ">
                  (2) વર્તમાન પત્રો તથા સામયિકો વાંચનારની દૈનિક સરેરાશ સંખ્યા :
                </label>
              </div>
              <div className="col-3">
                <input
                  required
                  name="newspapercount"
                  value={data.newspapercount}
                  onChange={handleInput}
                  type="number"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row mb-3 col-13 align-items-center">
              <div className="col-7">
                <label className="col-form-label col highlight">
                  વર્ષ દરમિયાન ગ્રંથાલયમાં આવતા વર્તમાનપત્રો તથા સામયિકોના નામ :
                </label>
              </div>
              <div className="col-5">
                <input
                  type="text"
                  name="newpaper"
                  value={data.newpaper}
                  onChange={handleInput}
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mb-3 col-13 align-items-center">
              <div className="col">
                <label className="col-form-label col highlight">
                  ગ્રંથાલયમાં નીચેનું દફતર નિભાવવામાં આવે છે? :
                </label>
              </div>
            </div>
            <div className="row mb-3 col-15 align-items-center">
              <div className="col">
                <div className="form-check">
                  <label className="form-check-label" for="defaultCheck1">
                    ૧. પરિગ્રહણ પત્રક
                  </label>
                  <input
                    required
                    className="form-check-input"
                    type="checkbox"
                    name="parigrahan"
                    value={data.parigrahan}
                    onChange={handleCheck}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-check">
                  <label className="form-check-label" for="defaultCheck1">
                    ૨. સભ્ય રજીસ્ટર
                  </label>
                  <input
                    required
                    className="form-check-input"
                    type="checkbox"
                    name="register"
                    value={data.register}
                    onChange={handleCheck}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-check">
                  <label className="form-check-label" for="defaultCheck1">
                    ૩. હાજરી પત્રક
                  </label>
                  <input
                    required
                    className="form-check-input"
                    type="checkbox"
                    name="attendencregister"
                    value={data.attendencregister}
                    onChange={handleCheck}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3 col-15 align-items-center">
              <div className="col">
                <div className="form-check">
                  <label className="form-check-label" for="defaultCheck1">
                    ૪. ડેડસ્ટોક રજીસ્ટર
                  </label>
                  <input
                    required
                    className="form-check-input"
                    type="checkbox"
                    name="deadregister"
                    value={data.deadregister}
                    onChange={handleCheck}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-check">
                  <label className="form-check-label" for="defaultCheck1">
                    ૫. વાર્ષિક નિવેદન
                  </label>
                  <input
                    required
                    className="form-check-input"
                    type="checkbox"
                    name="anualrequest"
                    value={data.anualrequest}
                    onChange={handleCheck}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-check">
                  <label className="form-check-label" for="defaultCheck1">
                    ૬. પાવતી બુક
                  </label>
                  <input
                    required
                    className="form-check-input"
                    type="checkbox"
                    name="recieptbook"
                    value={data.recieptbook}
                    onChange={handleCheck}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3 col-15 align-items-center">
              <div className="col">
                <div className="form-check">
                  <label className="form-check-label" for="defaultCheck1">
                    ૭. વાઉચર ફાઈલ
                  </label>
                  <input
                    required
                    className="form-check-input"
                    type="checkbox"
                    name="voucherbook"
                    value={data.voucherbook}
                    onChange={handleCheck}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-check">
                  <label className="form-check-label" for="defaultCheck1">
                    ૮. રોજમેળ
                  </label>
                  <input
                    required
                    className="form-check-input"
                    type="checkbox"
                    name="rojmel"
                    value={data.rojmel}
                    onChange={handleCheck}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-check">
                  <label className="form-check-label" for="defaultCheck1">
                    ૯. ઠરાવ બુક
                  </label>
                  <input
                    required
                    className="form-check-input"
                    type="checkbox"
                    name="commandbook"
                    value={data.commandbook}
                    onChange={handleCheck}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3 col-13 align-items-center">
              <div className=" align-items-center">
                <div className="form-check ">
                  <label className="form-check-label" for="defaultCheck1">
                    ૧o. ઇસ્યુ રજીસ્ટર
                  </label>
                  <input
                    required
                    className="form-check-input"
                    type="checkbox"
                    name="publishregister"
                    value={data.publishregister}
                    onChange={handleCheck}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className="col-4">
                <label className="col-form-label ">
                  નિરીક્ષકે કરેલા સૂચનોનું પાલન થાય છે?
                </label>
              </div>

              <div className="col-2">
                <select
                  required
                  className="form-select"
                  aria-label="Default select example"
                  name="followinstructoin"
                  value={data.followinstructoin}
                  onChange={handleInput}
                >
                  <option selected>Select</option>
                  <option value="ha">Ha</option>
                  <option value="na">Na</option>
                </select>
              </div>
            </div>
            {data.followinstructoin === "ha" && (
              <div className="row mb-3 col-sm-13 align-items-center">
                <div className="col-4">
                  <label className="col-form-label ">કેટલા અંશે? :</label>
                </div>
                <div className="col-2">
                  <input
                    required
                    type="text"
                    className="form-control"
                    name="whichlevel"
                    value={data.whichlevel}
                    onChange={handleInput}
                  />
                </div>
              </div>
            )}
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className="col-4">
                <label className="col-form-label ">
                  વાંચકોની મૂળભૂત જરૂરિયાતને ગ્રંથાલય પહોંચી વડે છે કે કેમ?
                </label>
              </div>

              <div className="col-2">
                <select
                  required
                  name="requirment"
                  value={data.requirment}
                  onChange={handleInput}
                  className="form-select"
                >
                  <option selected>પસંદ કરો</option>
                  <option value="ha">Ha</option>
                  <option value="na">Na</option>
                </select>
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className="col-4">
                <label className="col-form-label ">
                  ગત વર્ષે મળેલી સરકારી અનુદાનની રકમ :
                </label>
              </div>
              <div className="col-2">
                <input
                  required
                  type="number"
                  className="form-control"
                  name="grant"
                  value={data.grant}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className="col">
                <label className="col-form-label highlight">
                  સરકારી અનુદાનની ગણતરી માટેની ગતવર્ષની ખર્ચની વિગતો :
                </label>
              </div>
            </div>
            <center>
              <div className="row mb-3 col-sm-10 align-items-center">
                <div className="col">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="teablehead" scope="col">
                          ક્રમ
                        </th>
                        <th className="teablehead" scope="col">
                          વિગત
                        </th>
                        <th className="teablehead" scope="col">
                          કરેલું ખર્ચ
                        </th>
                        <th className="teablehead" scope="col">
                          માન્ય ખર્ચ
                        </th>
                        <th className="teablehead" scope="col">
                          વિશેષ નોંધ
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">૧</th>
                        <td>વાંચન સામગ્રી નમૂનો : ક (અ)</td>
                        <td>
                          <input
                            required
                            type="number"
                            className="form-control"
                            name="vanchansamagrik"
                            value={data.vanchansamagrik}
                            onChange={handleInput}
                          />
                        </td>
                        <td>
                          <input
                            required
                            type="number"
                            name="vanchansamagrim"
                            value={data.vanchansamagrim}
                            onChange={handleInput}
                            className="form-control"
                          />
                        </td>
                        <td className="th">
                          ઉપર કોલમ: ૨૪માં દર્શાવેલ રકમના ૫૦% રકમનો ખર્ચ વાંચન
                          સામગ્રી માટે ફરજીયાત છે
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">૨</th>
                        <td>કર્મચારી પગાર નમૂનો : ક (બ)</td>
                        <td>
                          <input
                            required
                            type="number"
                            className="form-control"
                            name="pagark"
                            value={data.pagark}
                            onChange={handleInput}
                          />
                        </td>
                        <td>
                          <input
                            required
                            type="number"
                            className="form-control"
                            name="pagarm"
                            value={data.pagarm}
                            onChange={handleInput}
                          />
                        </td>
                        <td>
                          <input
                            required
                            type="text"
                            className="form-control"
                            name="note1"
                            value={data.note1}
                            onChange={handleInput}
                          />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>ફર્નિચર અને રીપેરીંગ નમૂનો: ક (ક)</td>
                        <td>
                          <input
                            required
                            type="number"
                            className="form-control"
                            name="furnichark"
                            value={data.furnichark}
                            onChange={handleInput}
                          />
                        </td>
                        <td>
                          <input
                            required
                            type="number"
                            className="form-control"
                            name="furnicharm"
                            value={data.furnicharm}
                            onChange={handleInput}
                          />
                        </td>
                        <td>
                          <input
                            required
                            type="text"
                            className="form-control"
                            name="note2"
                            value={data.note2}
                            onChange={handleInput}
                          />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">૪</th>
                        <td> મકાન ભાડુ પરચુરણ નમૂનો : ક(ડ)</td>
                        <td>
                          <input
                            required
                            type="number"
                            className="form-control"
                            name="otherk"
                            value={data.otherk}
                            onChange={handleInput}
                          />
                        </td>
                        <td>
                          <input
                            required
                            type="number"
                            className="form-control"
                            name="otherm"
                            value={data.otherm}
                            onChange={handleInput}
                          />
                        </td>
                        <td>
                          <input
                            required
                            type="text"
                            className="form-control"
                            name="note3"
                            value={data.note3}
                            onChange={handleInput}
                          />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">૫</th>
                        <td>કુલ</td>
                        <td>
                          <input
                            required
                            type="number"
                            className="form-control"
                            value={
                              Number(data.pagark) +
                              Number(data.vanchansamagrik) +
                              Number(data.furnichark) +
                              Number(data.otherk)
                            }
                          />
                        </td>
                        <td>
                          <input
                            required
                            type="number"
                            className="form-control"
                            value={
                              Number(data.pagarm) +
                              Number(data.vanchansamagrim) +
                              Number(data.furnicharm) +
                              Number(data.otherm)
                            }
                          />
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </center>

            <center className="head2">
              <h1 className="extrahighlight">નમૂનો: ક (અ)</h1>
              <br />
              <p className="highlight">
                ગ્રંથાલયોને અનુદાનના નિયમ :૬(છ)ના પરિશિષ્ટ : ક ના આસન ૧૩ અને
                ૧૪ની માહિતીનું વિવરણ પત્રક
              </p>
              <br />
              <p className="highlight">(ગત વર્ષના આવક તથા ખર્ચનું પત્રક)</p>
            </center>
            <div className="row mb-3 col-sm-13 align-items-center">
              <div className="col">
                <table className="table table-bordered">
                  <thead>
                    <tr className="teablehead">
                      <th className="teablehead" scope="col">
                        આવક
                      </th>
                      <th className="teablehead" scope="col">
                        ખર્ચ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="row mb-3 col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૧. લવાજમ :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="number"
                              className="form-control"
                              name="alavajam"
                              value={data.alavajam}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૨. ભંડોળનું વ્યાજ :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="number"
                              className="form-control"
                              name="aintrest"
                              value={data.aintrest}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૩. ભાડાની ઉપજ :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="number"
                              className="form-control"
                              name="arent"
                              value={data.arent}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૪. પસ્તી વેચાણ :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="number"
                              className="form-control"
                              name="awest"
                              value={data.awest}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૫. સરકારી અનુદાન :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="number"
                              className="form-control"
                              name="agrant"
                              value={data.agrant}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૬. પંચાયતની મદદ :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="number"
                              className="form-control"
                              name="ahelp"
                              value={data.ahelp}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label tab">
                              (૧) જિલ્લા :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="number"
                              className="form-control"
                              name="adistrict"
                              value={data.adistrict}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label tab">
                              (૨) તાલુકા :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="number"
                              className="form-control"
                              name="ataluko"
                              value={data.ataluko}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label tab">
                              (૩) ગ્રામ :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="number"
                              className="form-control"
                              name="agam"
                              value={data.agam}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૭. લોક મદદ :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="number"
                              className="form-control"
                              name="aotherhelp"
                              value={data.aotherhelp}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૮. અન્ય આવક :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="number"
                              className="form-control"
                              name="aother"
                              value={data.aother}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">કુલ આવક :</label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="number"
                              className="form-control"
                              value={
                                Number(data.aother) +
                                Number(data.aotherhelp) +
                                Number(data.agam) +
                                Number(data.ataluko) +
                                Number(data.adistrict) +
                                Number(data.ahelp) +
                                Number(data.agrant) +
                                Number(data.awest) +
                                Number(data.arent) +
                                Number(data.aintrest) +
                                Number(data.alavajam)
                              }
                            />
                          </div>
                        </div>
                        <div className="row mb-3 col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૯. વર્ષની શરૂઆતમાં હાથ ઉપની સિલક :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="text"
                              className="form-control"
                              name="aprevios"
                              value={data.aprevios}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="row mb-3 col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              અ. વાંચન સામગ્રી :
                            </label>
                          </div>
                        </div>
                        <div className="row mb-3 tab col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૧. પુસ્તક ખરીદી :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="text"
                              className="form-control"
                              name="kbook"
                              value={data.kbook}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 tab col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૨. વર્તમાન પત્રો, સામયિકો :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="text"
                              className="form-control"
                              name="knewspaper"
                              value={data.knewspaper}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 tab col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૩. પુસ્તક બાંધણી :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="text"
                              className="form-control"
                              name="kbookbinding"
                              value={data.kbookbinding}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 tab2 col-sm-13 align-items-center">
                          <div className=" col">
                            <label className="tab2 col-form-label ">
                              કુલ :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="text"
                              className="form-control"
                              value={
                                Number(data.kbookbinding) +
                                Number(data.knewspaper) +
                                Number(data.kbook)
                              }
                            />
                          </div>
                        </div>

                        <div className="row mb-3 col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              બ. પગાર ખર્ચ :
                            </label>
                          </div>
                        </div>
                        <div className="row mb-3 tab col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">૧. પગાર :</label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="text"
                              className="form-control"
                              name="ksalary"
                              value={data.ksalary}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 tab col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૨. મોંઘવારી :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="text"
                              className="form-control"
                              name="kinfletion"
                              value={data.kinfletion}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 tab col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">૩. અન્ય :</label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="text"
                              className="form-control"
                              name="kother"
                              value={data.kother}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 tab2 col-sm-13 align-items-center">
                          <div className=" col">
                            <label className="tab2 col-form-label ">
                              કુલ :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="text"
                              className="form-control"
                              value={
                                Number(data.kother) +
                                Number(data.ksalary) +
                                Number(data.kinfletion)
                              }
                            />
                          </div>
                        </div>

                        <div className="row mb-3 col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ક. ફર્નિચર ખર્ચ :
                            </label>
                          </div>
                        </div>
                        <div className="row mb-3 tab col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૧. ફર્નિચર :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="text"
                              className="form-control"
                              name="kfurnichar"
                              value={data.kfurnichar}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 tab col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૨. ફર્નિચર મરામત :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="text"
                              className="form-control"
                              name="kfurnicharrepair"
                              value={data.kfurnicharrepair}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 tab col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૩. અન્ય સાધન સામગ્રી :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="text"
                              className="form-control"
                              name="kotherbuy"
                              value={data.kotherbuy}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 tab2 col-sm-13 align-items-center">
                          <div className=" col">
                            <label className="tab2 col-form-label ">
                              કુલ :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="text"
                              className="form-control"
                              value={
                                Number(data.kotherbuy) +
                                Number(data.kfurnicharrepair) +
                                Number(data.kfurnichar)
                              }
                            />
                          </div>
                        </div>

                        <div className="row mb-3 col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ડ. મકાન ભાડુ તથા પરચુરણ ખર્ચ :
                            </label>
                          </div>
                        </div>
                        <div className="row mb-3 tab col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૧. મકાન ભાડુ :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="number"
                              className="form-control"
                              name="krent"
                              value={data.krent}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 tab col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૨. મકાન મરામત(સામાન્ય) :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="number"
                              className="form-control"
                              name="krepair"
                              value={data.krepair}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 tab col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૩. કરવેરા :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="number"
                              className="form-control"
                              name="ktax"
                              value={data.ktax}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 tab col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૪. સ્ટેશનરી/છપામાણી :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="number"
                              className="form-control"
                              name="kstationary"
                              value={data.kstationary}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 tab col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૫. ટપાલ ખર્ચ :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="number"
                              className="form-control"
                              name="kmail"
                              value={data.kmail}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 tab col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૬. પ્રવાસ ખર્ચ :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="number"
                              className="form-control"
                              name="ktrip"
                              value={data.ktrip}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 tab col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૭. વીમાનું પ્રીમિયમ :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="number"
                              className="form-control"
                              name="kpremium"
                              value={data.kpremium}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 tab col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૮. વીજળી ખર્ચ :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="number"
                              className="form-control"
                              name="klightbill"
                              value={data.klightbill}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        <div className="row mb-3 tab col-sm-13 align-items-center">
                          <div className="col">
                            <label className="col-form-label ">
                              ૯. પરચુરણ ખર્ચ :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="number"
                              className="form-control"
                              name="kothersmall"
                              value={data.kothersmall}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="row mb-3 tab2 col-sm-13 align-items-center">
                          <div className=" col">
                            <label className="tab2 col-form-label ">
                              કુલ સરવાળો :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="text"
                              className="form-control"
                              value={
                                Number(data.aother) +
                                Number(data.aotherhelp) +
                                Number(data.agam) +
                                Number(data.ataluko) +
                                Number(data.adistrict) +
                                Number(data.ahelp) +
                                Number(data.agrant) +
                                Number(data.awest) +
                                Number(data.arent) +
                                Number(data.aintrest) +
                                Number(data.alavajam) +
                                Number(data.aprevios)
                              }
                            />
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="row mb-3 tab2 col-sm-13 align-items-center">
                          <div className=" col">
                            <label className="tab2 col-form-label ">
                              કુલ સરવાળો :
                            </label>
                          </div>
                          <div className="col">
                            <input
                              required
                              type="number"
                              className="form-control"
                              name="totalk"
                              onChange={handleInput}
                              value={
                                Number(data.kothersmall) +
                                Number(data.klightbill) +
                                Number(data.kpremium) +
                                Number(data.ktrip) +
                                Number(data.kmail) +
                                Number(data.kstationary) +
                                Number(data.ktax) +
                                Number(data.krepair) +
                                Number(data.krent) +
                                Number(data.kbookbinding) +
                                Number(data.knewspaper) +
                                Number(data.kbook) +
                                Number(data.kother) +
                                Number(data.ksalary) +
                                Number(data.kinfletion) +
                                Number(data.kotherbuy) +
                                Number(data.kfurnicharrepair) +
                                Number(data.kfurnichar)
                              }
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
                <div className=" col">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </center>
          </div>
          <div>
            <Footer></Footer>
          </div>
        </div>
      )}
    </>
  );
}

export default Master;

//start

// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import axios from "axios";

// const master = () => {

//   return <div>master</div>;
// };

// export default master;
