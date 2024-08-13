import { useRef, useState } from "react";
import { useEffect } from "react";
import { BiBook, BiBookOpen } from "react-icons/bi";
import NavBar from "../components/NavBar";
import axios from "axios";
function SingleData(props) {
  let [arr, datastate] = useState([]);
  let [data, setData] = useState([]);
  useEffect(() => {
    const dataget = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/form/`);

        setData(response.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    dataget();
  }, []);
  const number = useRef();
  const handleonclick = () => {
    console.log(number.current.value);

    console.log();

    let temp = data.filter((elm) => elm.uid === number.current.value);

    console.log("");
    if (temp.length !== 0) {
      datastate(data.filter((elm) => elm.uid === number.current.value));
      console.log(arr[0].gam);
    } else;
  };
  const d = new Date();
  let year = d.getFullYear();
  return (
    <center>
      <NavBar></NavBar>
      <div class="form-group">
        <label for="exampleFormControlFile1">Search by id</label>
        <input
          ref={number}
          type="text"
          name="pin"
          className="form-control mb-3 col"
        />
        <button className="btn btn-primary col" onClick={handleonclick}>
          serch
        </button>
      </div>
      {arr.length !== 0 && (
        <div className="form ">
          <center>
            <div className=" head2">
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
              <label className="highlightdata">{arr[0].lname}</label>
            </div>
          </div>
          <div className="row mb-3 col-sm-13 align-items-center">
            <div className="col-1">
              <label className="col-form-label">ગામ :</label>
            </div>
            <div className="col">
              <label className="highlightdata ">{arr[0].gam}</label>
            </div>
            <div className="col-1">
              <label for="inputPassword6" className="col-form-label">
                પિન :
              </label>
            </div>
            <div className="col">
              <label className="highlightdata">{arr[0].pin}</label>
            </div>
            <div className="col-1">
              <label for="inputPassword6" className="col-form-label">
                તાલુકો :
              </label>
            </div>
            <div className="col">
              <label className="highlightdata">{arr[0].taluko}</label>
            </div>
            <div className="col-1">
              <label className="col-form-label">જીલો :</label>
            </div>
            <div className="col">
              <label className="highlightdata">{arr[0].district}</label>
            </div>
          </div>

          <div className="row mb-1 col-sm-13 align-items-center">
            <div className="col-2">
              <label for="inputPassword6" className="col-form-label col-sm-10">
                સ્થાપના તારીખ:
              </label>
            </div>
            <div className="col-2">
              <label className="highlightdata">{arr[0].sthapnadate}</label>
            </div>
            <div className="col-sm-2">
              <label for="inputPassword6" className="col-form-label ">
                ભણેલાઓ ની સાંખ્ય :
              </label>
            </div>
            <div className="col">
              <label className="highlightdata">{arr[0].studypeople}</label>
            </div>
            <div className="row mb-3 col-sm-13 align-items-center"></div>
            <div className="col">
              <label for="inputPassword6" className="col-form-label ">
                સભ્ય સંખ્યા : પુરુષ
              </label>
            </div>
            <div className="col">
              <label className="highlightdata">{arr[0].studymale}</label>
            </div>
            <div className="col-1">
              <label for="inputPassword6" className="col-form-label ">
                સ્ત્રી :
              </label>
            </div>
            <div className="col">
              <label className="highlightdata">{arr[0].studyfemale}</label>
            </div>
            <div className="col-1">
              <label for="inputPassword6" className="col-form-label ">
                બાળકો :
              </label>
            </div>
            <div className="col">
              <label className="highlightdata">{arr[0].studychild}</label>
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
              <label className="highlightdata">
                {arr[0].studychild + arr[0].studyfemale + arr[0].studymale}
              </label>
            </div>
          </div>
          <div className="row mb-3 col-sm-13 align-items-center">
            <div className="col-sm-3">
              <label for="inputPassword6" className="col-form-label ">
                સબ્યો પાસેથી લવાજમ લેવામા આવે છે? :
              </label>
            </div>

            <div className="col-2">
              <label className="highlightdata">{arr[0].lavaj}</label>
            </div>

            <div className="col-2">
              <label for="inputPassword6" className="col-form-label ">
                વાર્ષિક :
              </label>
            </div>
            <div className="col-2">
              <label className="highlightdata">{arr[0].lavajamount}</label>
            </div>
          </div>

          <div className="row mb-3 col-sm-13 align-items-center">
            <div className="col-3">
              <label for="inputPassword6" className="col-form-label col-sm-10">
                કામકાજના કલાકો: પુસ્તક આપ લે વિભાગ :
              </label>
            </div>
            <div className="col-2">
              <label className="highlightdata">
                {arr[0].workinghourslibrary}
              </label>
            </div>
            <div className="col-2">
              <label for="inputPassword6" className="col-form-label col-sm-10">
                વાંચનાલય :
              </label>
            </div>
            <div className="col-2">
              <label className="highlightdata">
                {arr[0].workinghourslibrary}
              </label>
            </div>
          </div>
          <div className="row mb-3 col-sm-13 align-items-center">
            <div className="col-3">
              <label for="inputPassword6" className="col-form-label col-sm-10">
                ગ્રંથાલયનુ વ્યાવસ્થાતંત્ર : પંચાયત/સંસ્થા/મંડળ/શાળા/અન્ય સંચાલિત
              </label>
            </div>
            <div className="col-2">
              <label className="highlightdata">{arr[0].handleby}</label>
            </div>
            <div className="col-4">
              <label for="inputPassword6" className="col-form-label col-sm-10">
                વ્યાવસ્થાતંત્ર રજીસ્ટર હોય તો નોંધણી ક્રમાંક :
              </label>
            </div>
            <div className="col-2">
              <label className="highlightdata">{arr[0].registernumber}</label>
            </div>
          </div>
          <div className="row mb-3 col-sm-13 align-items-center">
            <div className=" col-3">
              <label for="inputPassword" className="col-sm-10 col-form-label">
                પત્ર વ્યાહાર માટે જવાબદાર વ્યક્તિનુ નામ :
              </label>
            </div>
            <div className="col-9">
              <label className="highlightdata">{arr[0].emailmen}</label>
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
              <label className="highlightdata">{arr[0].emailmenaddres}</label>
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
              <label className="highlightdata">{arr[0].libraryen}</label>
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
              <label className="highlightdata">{arr[0].libraryenaddres}</label>
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
              <label className="highlightdata">
                {arr[0].libraryeneducation}
              </label>
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
              <label className="highlightdata">{arr[0].libraryensalary}</label>
            </div>
          </div>
          <div className="row mb-3 col-sm-13 align-items-center">
            <div className="col-3">
              <label for="inputPassword6" className="col-form-label ">
                મકાન ગ્રંથાલય ની માલિકી નું છે :
              </label>
            </div>

            <div className="col-2">
              <label className="highlightdata">{arr[0].housestate}</label>
            </div>

            <div className="col-2">
              <label for="inputPassword6" className="col-form-label ">
                વાર્ષિક ભાડું :
              </label>
            </div>
            <div className="col-2">
              <label className="highlightdata">{arr[0].houserent}</label>
            </div>
          </div>
          <div className="row mb-3 col-sm-13 align-items-center">
            <div className="col-3">
              <label for="inputPassword6" className="col-form-label ">
                મકાન ની વર્તમાન સ્થિતિ :
              </label>
            </div>
            <div className="col-2">
              <label className="highlightdata"> {arr[0].hosestatus}</label>
            </div>
            <div className="col-3">
              <label for="inputPassword6" className="col-form-label ">
                હવા ઉજાશ આને બીજી સુવિધા છે? :
              </label>
            </div>
            <div className="col-2">
              <label className="highlightdata"> {arr[0].aircondition}</label>
            </div>
          </div>
          <div className="row mb-3 col-sm-13 align-items-center">
            <div className="col-5">
              <label for="inputPassword6" className="col-form-label ">
                ગ્રંથાલય દરેકને માટે કોઈપણ ભેદભાવ વગર ખુલ્લુ છે? :
              </label>
            </div>
            <div className="col-2">
              <label className="highlightdata"> {arr[0].openforevryone}</label>
            </div>
          </div>
          <div className="row mb-3 col-13 align-items-center">
            <div className="col">
              <label
                for="inputPassword6"
                className="col-form-label col highlight"
              >
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
              <label className="highlightdata">
                {" "}
                {arr[0].lastyearbookcount}
              </label>
            </div>
          </div>
          <div className="row mb-3 col-13 align-items-center">
            <div className="col-3">
              <label for="inputPassword6" className="col-form-label  ">
                (2) આ વર્ષમાં ઉમેરાયેલા પુસ્તકો ની સંખ્યા :
              </label>
            </div>
            <div className="col-3">
              <label className="highlightdata">
                {" "}
                {arr[0].currentyearbookcount}
              </label>
            </div>
          </div>
          <div className="row mb-3 col-13 align-items-center">
            <div className="col-3">
              <label for="inputPassword6" className="col-form-label  ">
                (3) આ વર્ષમાં કમી થયેલા પુસ્તકોની સંખ્યા :
              </label>
            </div>
            <div className="col-3">
              <label className="highlightdata">
                {" "}
                {arr[0].lastyearaddedbook}
              </label>
            </div>
          </div>
          <div className="row mb-3 col-13 align-items-center">
            <div className="col-3">
              <label for="inputPassword6" className="col-form-label  ">
                (4) વર્ષના અંતે પુસ્તકોની કુલ સંખ્યા :
              </label>
            </div>
            <div className="col-3">
              <label className="highlightdata">
                {" "}
                {arr[0].endyearabookcount}
              </label>
            </div>
          </div>
          <div className="row mb-3 col-13 align-items-center">
            <div className="col-13">
              <label
                for="inputPassword6"
                className="col-form-label col highlight"
              >
                ગ્રંથાલયમાં આવેલ ડેડસ્ટોકની વિગતો (અલગ પત્રકમાં યાદી બનાવીને
                જોડવી) :
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
              <label className="highlightdata"> {arr[0].publishbook}</label>
            </div>
            <div className="col-3">
              <label for="inputPassword6" className="col-form-label  ">
                (2) વર્તમાન પત્રો તથા સામયિકો વાંચનારની દૈનિક સરેરાશ સંખ્યા :
              </label>
            </div>
            <div className="col-3">
              <label className="highlightdata"> {arr[0].newspapercount}</label>
            </div>
          </div>
          <div className="row mb-3 col-13 align-items-center">
            <div className="col-7">
              <label
                for="inputPassword6"
                className="col-form-label col highlight"
              >
                વર્ષ દરમિયાન ગ્રંથાલયમાં આવતા વર્તમાનપત્રો તથા સામયિકોના નામ :
              </label>
            </div>
            <div className="col-5">
              <label className="highlightdata">{arr[0].newpaper}</label>
            </div>
          </div>

          <div className="row mb-3 col-13 align-items-center">
            <div className="col">
              <label
                for="inputPassword6"
                className="col-form-label col highlight"
              >
                ગ્રંથાલયમાં નીચેનું દફતર નિભાવવામાં આવે છે? :
              </label>
            </div>
          </div>
          <div className="row mb-3 col-15 align-items-center">
            <div className="col">
              <div className="form-check">
                <label className="form-check-label" for="defaultCheck1">
                  ૧. પરિગ્રહણ પત્રક :
                </label>
                <label className="highlightdata">{arr[0].parigrahan}</label>
              </div>
            </div>
            <div className="col">
              <div className="form-check">
                <label className="form-check-label" for="defaultCheck1">
                  ૨. સભ્ય રજીસ્ટર :
                </label>
                <label className="highlightdata">{arr[0].register}</label>
              </div>
            </div>
            <div className="col">
              <div className="form-check">
                <label className="form-check-label" for="defaultCheck1">
                  ૩. હાજરી પત્રક :
                </label>
                <label className="highlightdata">
                  {arr[0].attendencregister}
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-3 col-15 align-items-center">
            <div className="col">
              <div className="form-check">
                <label className="form-check-label" for="defaultCheck1">
                  ૪. ડેડસ્ટોક રજીસ્ટર :
                </label>
                <label className="highlightdata">{arr[0].deadregister}</label>
              </div>
            </div>
            <div className="col">
              <div className="form-check">
                <label className="form-check-label" for="defaultCheck1">
                  ૫. વાર્ષિક નિવેદન :
                </label>
                <label className="highlightdata">{arr[0].anualrequest}</label>
              </div>
            </div>
            <div className="col">
              <div className="form-check">
                <label className="form-check-label" for="defaultCheck1">
                  ૬. પાવતી બુક :
                </label>
                <label className="highlightdata">{arr[0].recieptbook}</label>
              </div>
            </div>
          </div>
          <div className="row mb-3 col-15 align-items-center">
            <div className="col">
              <div className="form-check">
                <label className="form-check-label" for="defaultCheck1">
                  ૭. વાઉચર ફાઈલ :
                </label>
                <label className="highlightdata">{arr[0].voucherbook}</label>
              </div>
            </div>
            <div className="col">
              <div className="form-check">
                <label className="form-check-label" for="defaultCheck1">
                  ૮. રોજમેળ :
                </label>
                <label className="highlightdata">{arr[0].rojmel}</label>
              </div>
            </div>
            <div className="col">
              <div className="form-check">
                <label className="form-check-label" for="defaultCheck1">
                  ૯. ઠરાવ બુક :
                </label>
                <label className="highlightdata">{arr[0].commandbook}</label>
              </div>
            </div>
          </div>
          <div className="row mb-3 col-13 align-items-center">
            <div className=" align-items-center">
              <div className="form-check ">
                <label className="form-check-label" for="defaultCheck1">
                  ૧o. ઇસ્યુ રજીસ્ટર :
                </label>
                <label className="highlightdata">
                  {arr[0].publishregister}
                </label>
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
              <label className="highlightdata">
                {arr[0].followinstructoin}
              </label>
            </div>
          </div>

          <div className="row mb-3 col-sm-13 align-items-center">
            <div className="col-4">
              <label for="inputPassword6" className="col-form-label ">
                કેટલા અંશે? :
              </label>
            </div>
            <div className="col-2">
              <label className="highlightdata">{arr[0].whichlevel}</label>
            </div>
          </div>
        </div>
      )}
    </center>
  );
}
export default SingleData;
