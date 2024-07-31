import "bootstrap/dist/css/bootstrap.min.css";
import { useRef, useState } from "react";
import { BiBook, BiBookOpen } from "react-icons/bi";
import { GiPoliceBadge } from "react-icons/gi";
function Form() {
  const [fees, feesstate] = useState();
  const [rent, rentstate] = useState();
  const [suchan, suchanstate] = useState();
  const [count, countstate] = useState(0);
  const district = useRef("");
  const name = useRef("");
  const gam = useRef("");
  const taluko = useRef("");
  const date = useRef("");
  const d = new Date();
  let year = d.getFullYear();

  function print() {
    console.log(district.current.value);
    console.log(name.current.value);
    console.log(taluko.current.value);
    console.log(gam.current.value);
    console.log(date.current.value);

    // console.log(arr);
  }

  const handleSubmit = async (e) => {
    const arr = [
      {
        district: district.current.value,
        name: name.current.value,
        taluko: taluko.current.value,
        gam: gam.current.value,
        date: date.current.value,
      },
    ];
    try {
      const senddata = await fetch(
        `http://localhost:5000/contactForm/dataform`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(arr),
        }
      );

      if (senddata.ok) {
        name = "";
      }
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit()} className="form ">
      <center>
        <div className="head">
          <h1>
            <span className="icon">
              <BiBookOpen />
            </span>{" "}
            ગ્રામ ગ્રંથાલયનો નિરીક્ષણ અહેવલ સને : {year - 1} - {year}
            <span className="icon">
              <BiBookOpen />
            </span>{" "}
          </h1>
        </div>
      </center>
      <div className="row mb-3 col-sm-13 align-items-center">
        <div className=" col-2">
          <label for="inputPassword" className="col-sm-10 col-form-label">
            ગ્રંથાલયનું નામ :
          </label>
        </div>
        <div className="col-10">
          <input
            type="text"
            ref={name}
            className="form-control"
            id="inputPassword"
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
          <select id="inputState" ref={gam} className="form-select">
            <option selected>પસંદ કરો</option>
            <option>ગામ:1</option>
            <option>ગામ:2</option>
            <option>ગામ:3</option>
          </select>
        </div>
        <div className="col-1">
          <label for="inputPassword6" className="col-form-label">
            પિન :
          </label>
        </div>
        <div className="col">
          <input
            type="number"
            id="inputPassword6"
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
          <select id="inputState" className="form-select">
            <option ref={taluko} selected>
              પસંદ કરો
            </option>
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
          <select ref={district} id="inputState" className="form-select">
            <option selected>પસંદ કરો</option>
            <option>district-1</option>
            <option>district-2</option>
            <option>district-1</option>
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
            type="date"
            ref={date}
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div className="col-1">
          <label for="inputPassword6" className="col-form-label ">
            વસ્તી : પુરશો
          </label>
        </div>
        <div className="col">
          <input
            type="number"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div className="col-1">
          <label for="inputPassword6" className="col-form-label ">
            સ્ત્રી :
          </label>
        </div>
        <div className="col">
          <input
            type="number"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div className="col-1">
          <label for="inputPassword6" className="col-form-label ">
            કુલ :
          </label>
        </div>
        <div className="col">
          <input
            type="number"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>
      <div className="row mb-1 col-sm-13 align-items-center">
        <div className="col-sm-2">
          <label for="inputPassword6" className="col-form-label ">
            ભણેલાઓ ની સાંખ્ય :
          </label>
        </div>
        <div className="col">
          <input
            type="number"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div className="col">
          <label for="inputPassword6" className="col-form-label ">
            સભ્ય સંખ્યા : પુરુષ
          </label>
        </div>
        <div className="col">
          <input
            type="number"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div className="col-1">
          <label for="inputPassword6" className="col-form-label ">
            સ્ત્રી :
          </label>
        </div>
        <div className="col">
          <input
            type="number"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div className="col-1">
          <label for="inputPassword6" className="col-form-label ">
            બાળકો :
          </label>
        </div>
        <div className="col">
          <input
            type="number"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div className="col-1">
          <label for="inputPassword6" className="col-form-label ">
            કુલ
          </label>
        </div>
        <div
          className="col
        "
        >
          <input
            type="number"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>
      <div className="row mb-3 col-sm-13 align-items-center">
        <div className="col-sm-3">
          <label for="inputPassword6" className="col-form-label ">
            સબ્યો પાસેથી લવાજમ લેવામા આવે છે? :
          </label>
        </div>

        <div className="col-2">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(event) => {
              feesstate(event.target.value);
            }}
          >
            <option selected>Select</option>
            <option value="ha">Ha</option>
            <option value="na">Na</option>
          </select>
        </div>
        {fees === "ha" && (
          <>
            <div className="col-2">
              <label for="inputPassword6" className="col-form-label ">
                વાર્ષિક :
              </label>
            </div>
            <div className="col-2">
              <input
                type="number"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </>
        )}
      </div>

      <div className="row mb-3 col-sm-13 align-items-center">
        <div className="col-3">
          <label for="inputPassword6" className="col-form-label col-sm-10">
            કામકાજના કલાકો: પુસ્તક આપ લે વિભાગ :
          </label>
        </div>
        <div className="col-2">
          <input
            type="text"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div className="col-2">
          <label for="inputPassword6" className="col-form-label col-sm-10">
            વાંચનાલય :
          </label>
        </div>
        <div className="col-2">
          <input
            type="text"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>
      <div className="row mb-3 col-sm-13 align-items-center">
        <div className="col-3">
          <label for="inputPassword6" className="col-form-label col-sm-10">
            ગ્રંથાલયનુ વ્યાવસ્થાતંત્ર : પંચાયત/સંસ્થા/મંડળ/શાળા/અન્ય સંચાલિત
          </label>
        </div>
        <div className="col-2">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(event) => {
              state(event.target.value);
            }}
          >
            <option selected>પસંદ કરો</option>
            <option value="ha">panchayat</option>
            <option value="na">Mandan</option>
            <option value="na">school</option>
            <option value="na">other</option>
          </select>
        </div>
        <div className="col-4">
          <label for="inputPassword6" className="col-form-label col-sm-10">
            વ્યાવસ્થાતંત્ર રજીસ્ટર હોય તો નોંધણી ક્રમાંક :
          </label>
        </div>
        <div className="col-2">
          <input
            type="text"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>
      <div className="row mb-3 col-sm-13 align-items-center">
        <div className=" col-3">
          <label for="inputPassword" className="col-sm-10 col-form-label">
            પત્ર વ્યાહાર માટે જવાબદાર વ્યક્તિનુ નામ :
          </label>
        </div>
        <div className="col-9">
          <input type="text" className="form-control" id="inputPassword" />
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
            type="text"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
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
            className="form-control"
            id="exampleFormControlTextarea1"
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
          <select className="form-select" aria-label="Default select example">
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
            type="number"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>
      <div className="row mb-3 col-sm-13 align-items-center">
        <div className="col-3">
          <label for="inputPassword6" className="col-form-label ">
            મકાન ગ્રંથાલય ની માલિકી નું છે :
          </label>
        </div>

        <div className="col-2">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(event) => {
              rentstate(event.target.value);
            }}
          >
            <option selected>પસંદ કરો</option>
            <option value="ha">Ha</option>
            <option value="na">Na</option>
          </select>
        </div>
        {rent === "ha" && (
          <>
            <div className="col-2">
              <label for="inputPassword6" className="col-form-label ">
                વાર્ષિક ભાડું :
              </label>
            </div>
            <div className="col-2">
              <input
                type="number"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </>
        )}
      </div>
      <div className="row mb-3 col-sm-13 align-items-center">
        <div className="col-3">
          <label for="inputPassword6" className="col-form-label ">
            મકાન ની વર્તમાન સ્થિતિ :
          </label>
        </div>
        <div className="col-2">
          <input
            type="text"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div className="col-3">
          <label for="inputPassword6" className="col-form-label ">
            હવા ઉજાશ આને બીજી સુવિધા છે? :
          </label>
        </div>
        <div className="col-2">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(event) => {}}
          >
            <option selected>પસંદ કરો</option>
            <option value="ha">Ha</option>
            <option value="na">Na</option>
          </select>
        </div>
      </div>
      <div className="row mb-3 col-sm-13 align-items-center">
        <div className="col-5">
          <label for="inputPassword6" className="col-form-label ">
            ગ્રંથાલય દરેકને માટે કોઈપણ ભેદભાવ વગર ખુલ્લુ છે? :
          </label>
        </div>
        <div className="col-2">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(event) => {}}
          >
            <option selected>પસંદ કરો</option>
            <option value="ha">Ha</option>
            <option value="na">Na</option>
          </select>
        </div>
      </div>
      <div className="row mb-3 col-13 align-items-center">
        <div className="col">
          <label for="inputPassword6" className="col-form-label col highlight">
            ગત વર્ષના આવક ખર્ચાના હિસાબો : (નમૂના ક મુજબ) :
          </label>
        </div>
      </div>
      <div className="row mb-3 col-13 align-items-center">
        <div className="col-3">
          <label for="inputPassword6" className="col-form-label  ">
            (1) ગત વર્ષના અંતે પુસ્તકોની સંખ્યા :
          </label>
        </div>
        <div className="col-3">
          <input
            type="number"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>
      <div className="row mb-3 col-13 align-items-center">
        <div className="col-3">
          <label for="inputPassword6" className="col-form-label  ">
            (2) આ વર્ષમાં ઉમેરાયેલા પુસ્તકો ની સંખ્યા :
          </label>
        </div>
        <div className="col-3">
          <input
            type="number"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>
      <div className="row mb-3 col-13 align-items-center">
        <div className="col-3">
          <label for="inputPassword6" className="col-form-label  ">
            (3) આ વર્ષમાં કમી થયેલા પુસ્તકોની સંખ્યા :
          </label>
        </div>
        <div className="col-3">
          <input
            type="number"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>
      <div className="row mb-3 col-13 align-items-center">
        <div className="col-3">
          <label for="inputPassword6" className="col-form-label  ">
            (4) વર્ષના અંતે પુસ્તકોની કુલ સંખ્યા :
          </label>
        </div>
        <div className="col-3">
          <input
            type="number"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>
      <div className="row mb-3 col-13 align-items-center">
        <div className="col-13">
          <label for="inputPassword6" className="col-form-label col highlight">
            ગ્રંથાલયમાં આવેલ ડેડસ્ટોકની વિગતો (અલગ પત્રકમાં યાદી બનાવીને જોડવી)
            :
          </label>
        </div>
      </div>
      <div className="row mb-3 col-13 align-items-center">
        <div className="col-3">
          <label for="inputPassword6" className="col-form-label  ">
            (1) વર્ષ દરમ્યાન ઈશ્યૂ થયેલા કુલ પુસ્તકો (પુસ્તક પરિભ્રમણ) :
          </label>
        </div>
        <div className="col-3">
          <input
            type="number"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div className="col-3">
          <label for="inputPassword6" className="col-form-label  ">
            (2) વર્તમાન પત્રો તથા સામયિકો વાંચનારની દૈનિક સરેરાશ સંખ્યા :
          </label>
        </div>
        <div className="col-3">
          <input
            type="number"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>
      <div className="row mb-3 col-13 align-items-center">
        <div className="col-7">
          <label for="inputPassword6" className="col-form-label col highlight">
            વર્ષ દરમિયાન ગ્રંથાલયમાં આવતા વર્તમાનપત્રો તથા સામયિકોના નામ :
          </label>
        </div>
        <div className="col">
          <label for="inputPassword6" className="col-form-label  ">
            <button
              type="button"
              onClick={() => {
                countstate(count + 1);
              }}
              className="btn btn-primary"
            >
              ઉમેરો
            </button>
          </label>
        </div>
      </div>
      <ul className="list-group">
        {Array.apply(null, { length: count }).map((e, i) => (
          <span className="busterCards" key={i}>
            <div className="row mb-3 col-13 align-items-center">
              <div className="col-2 align-items-center">
                {i} name of newpaper :
              </div>

              <div className="col-5">
                <input
                  type="text"
                  id="inputPassword6"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>
            </div>
          </span>
        ))}
      </ul>
      <div className="row mb-3 col-13 align-items-center">
        <div className="col">
          <label for="inputPassword6" className="col-form-label col highlight">
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
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
          </div>
        </div>
        <div className="col">
          <div className="form-check">
            <label className="form-check-label" for="defaultCheck1">
              ૨. સભ્ય રજીસ્ટર
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
          </div>
        </div>
        <div className="col">
          <div className="form-check">
            <label className="form-check-label" for="defaultCheck1">
              ૩. હાજરી પત્રક
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
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
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
          </div>
        </div>
        <div className="col">
          <div className="form-check">
            <label className="form-check-label" for="defaultCheck1">
              ૫. વાર્ષિક નિવેદન
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
          </div>
        </div>
        <div className="col">
          <div className="form-check">
            <label className="form-check-label" for="defaultCheck1">
              ૬. પાવતી બુક
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
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
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
          </div>
        </div>
        <div className="col">
          <div className="form-check">
            <label className="form-check-label" for="defaultCheck1">
              ૮. રોજમેળ
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
          </div>
        </div>
        <div className="col">
          <div className="form-check">
            <label className="form-check-label" for="defaultCheck1">
              ૯. ઠરાવ બુક
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
          </div>
        </div>
      </div>
      <div className="row mb-3 col-13 align-items-center">
        <div className=" align-items-center">
          <div className="form-check ">
            <label className="form-check-label" for="defaultCheck1">
              ઇસ્યુ રજીસ્ટર
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
          </div>
        </div>
      </div>
      <div className="row mb-3 col-sm-13 align-items-center">
        <div className="col-4">
          <label for="inputPassword6" className="col-form-label ">
            નિરીક્ષકે કરેલા સૂચનોનું પાલન થાય છે?
          </label>
        </div>

        <div className="col-2">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(event) => {
              suchanstate(event.target.value);
            }}
          >
            <option selected>Select</option>
            <option value="ha">Ha</option>
            <option value="na">Na</option>
          </select>
        </div>
      </div>
      {suchan === "ha" && (
        <div className="row mb-3 col-sm-13 align-items-center">
          <div className="col-4">
            <label for="inputPassword6" className="col-form-label ">
              કેટલા અંશે? :
            </label>
          </div>
          <div className="col-2">
            <input
              type="text"
              id="inputPassword6"
              className="form-control"
              aria-describedby="passwordHelpInline"
            />
          </div>
        </div>
      )}
      <div className="row mb-3 col-sm-13 align-items-center">
        <div className="col-4">
          <label for="inputPassword6" className="col-form-label ">
            વાંચકોની મૂળભૂત જરૂરિયાતને ગ્રંથાલય પહોંચી વડે છે કે કેમ?
          </label>
        </div>

        <div className="col-2">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(event) => {
              suchanstate(event.target.value);
            }}
          >
            <option selected>પસંદ કરો</option>
            <option value="ha">Ha</option>
            <option value="na">Na</option>
          </select>
        </div>
      </div>
      <div className="row mb-3 col-sm-13 align-items-center">
        <div className="col-4">
          <label for="inputPassword6" className="col-form-label ">
            ગત વર્ષે મળેલી સરકારી અનુદાનની રકમ :
          </label>
        </div>
        <div className="col-2">
          <input
            type="number"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </div>
      <div className="row mb-3 col-sm-13 align-items-center">
        <div className="col">
          <label for="inputPassword6" className="col-form-label highlight">
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
                      type="number"
                      id="inputPassword6"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                  <td className="th">
                    ઉપર કોલમ: ૨૪માં દર્શાવેલ રકમના ૫૦% રકમનો ખર્ચ વાંચન સામગ્રી
                    માટે ફરજીયાત છે
                  </td>
                </tr>
                <tr>
                  <th scope="row">૨</th>
                  <td>કર્મચારી પગાર નમૂનો : ક (બ)</td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>ફર્નિચર અને રીપેરીંગ નમૂનો: ક (ક)</td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">૪</th>
                  <td> મકાન ભાડુ પરચુરણ નમૂનો : ક(ડ)</td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                </tr>
                <tr>
                  <th scope="row">૫</th>
                  <td>કુલ</td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      id="inputPassword6"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </center>

      <center className="head">
        <h1 className="extrahighlight">નમૂનો: ક (અ)</h1>
        <br />
        <p className="highlight">
          ગ્રંથાલયોને અનુદાનના નિયમ :૬(છ)ના પરિશિષ્ટ : ક ના આસન ૧૩ અને ૧૪ની
          માહિતીનું વિવરણ પત્રક
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
                      <label for="inputPassword6" className="col-form-label ">
                        ૧. લવાજમ :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૨. ભંડોળનું વ્યાજ :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૩. ભાડાની ઉપજ :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૪. પસ્તી વેચાણ :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૫. સરકારી અનુદાન :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૬. પંચાયતની મદદ :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 col-sm-13 align-items-center">
                    <div className="col">
                      <label
                        for="inputPassword6"
                        className="col-form-label tab"
                      >
                        (૧) જિલ્લા :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 col-sm-13 align-items-center">
                    <div className="col">
                      <label
                        for="inputPassword6"
                        className="col-form-label tab"
                      >
                        (૨) તાલુકા :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 col-sm-13 align-items-center">
                    <div className="col">
                      <label
                        for="inputPassword6"
                        className="col-form-label tab"
                      >
                        (૩) ગ્રામ :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૭. લોક મદદ :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૮. અન્ય આવક :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        કુલ આવક :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૯. વર્ષની શરૂઆતમાં હાથ ઉપની સિલક :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                </td>

                <td>
                  <div className="row mb-3 col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        અ. વાંચન સામગ્રી :
                      </label>
                    </div>
                  </div>
                  <div className="row mb-3 tab col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૧. પુસ્તક ખરીદી :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 tab col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૨. વર્તમાન પત્રો, સામયિકો :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 tab col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૩. પુસ્તક બાંધણી :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 tab2 col-sm-13 align-items-center">
                    <div className=" col">
                      <label
                        for="inputPassword6"
                        className="tab2 col-form-label "
                      >
                        કુલ :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>

                  <div className="row mb-3 col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        બ. પગાર ખર્ચ :
                      </label>
                    </div>
                  </div>
                  <div className="row mb-3 tab col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૧. પગાર :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 tab col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૨. મોંઘવારી :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 tab col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૩. અન્ય :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 tab2 col-sm-13 align-items-center">
                    <div className=" col">
                      <label
                        for="inputPassword6"
                        className="tab2 col-form-label "
                      >
                        કુલ :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>

                  <div className="row mb-3 col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ક. ફર્નિચર ખર્ચ :
                      </label>
                    </div>
                  </div>
                  <div className="row mb-3 tab col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૧. ફર્નિચર :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 tab col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૨. ફર્નિચર મરામત :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 tab col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૩. અન્ય સાધન સામગ્રી :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 tab2 col-sm-13 align-items-center">
                    <div className=" col">
                      <label
                        for="inputPassword6"
                        className="tab2 col-form-label "
                      >
                        કુલ :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>

                  <div className="row mb-3 col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ડ. મકાન ભાડુ તથા પરચુરણ ખર્ચ :
                      </label>
                    </div>
                  </div>
                  <div className="row mb-3 tab col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૧. મકાન ભાડુ :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 tab col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૨. મકાન મરામત(સામાન્ય) :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 tab col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૩. કરવેરા :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 tab col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૪. સ્ટેશનરી/છપામાણી :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 tab col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૫. ટપાલ ખર્ચ :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 tab col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૬. પ્રવાસ ખર્ચ :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 tab col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૭. વીમાનું પ્રીમિયમ :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 tab col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૮. વીજળી ખર્ચ :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 tab col-sm-13 align-items-center">
                    <div className="col">
                      <label for="inputPassword6" className="col-form-label ">
                        ૯. પરચુરણ ખર્ચ :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                  <div className="row mb-3 tab2 col-sm-13 align-items-center">
                    <div className=" col">
                      <label
                        for="inputPassword6"
                        className="tab2 col-form-label "
                      >
                        કુલ સરવાળો :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="row mb-3 tab2 col-sm-13 align-items-center">
                    <div className=" col">
                      <label
                        for="inputPassword6"
                        className="tab2 col-form-label "
                      >
                        કુલ સરવાળો :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="row mb-3 tab2 col-sm-13 align-items-center">
                    <div className=" col">
                      <label
                        for="inputPassword6"
                        className="tab2 col-form-label "
                      >
                        કુલ સરવાળો :
                      </label>
                    </div>
                    <div className="col">
                      <input
                        type="number"
                        id="inputPassword6"
                        className="form-control"
                        aria-describedby="passwordHelpInline"
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </center>
    </form>
  );
}

export default Form;
