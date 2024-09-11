import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
function Motibhaiaminresult() {
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
      const ratio = Math.min(pdfWidth / imgwidth, pdfheight / imgheight);
      const imgx = (pdfWidth - imgwidth * ratio) / 2;
      const imgy = 30;
      console.log(pdfWidth);
      console.log(imgwidth);
      console.log(ratio);
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("DataTable.pdf");
    });
  };
  const [data, setdata] = useState();
  useEffect(() => {
    const dataget = async () => {};
    dataget();
  }, []);
  const category = useRef();
  async function showresult() {
    console.log(category.current.value);
    try {
      const response = await axios.get(
        `http://localhost:5555/${category.current.value}/`
      );
      console.log(response.data),
        response.data.sort(({ marks: a }, { marks: b }) => b - a);
      setdata(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <NavBar></NavBar>
      <center>
        <div className="main rounded">
          <h1 className="heighlight">Result of Motibhai Amin Award Form</h1>

          <div className="row mb-3 col-sm-13 align-items-center">
            <div className=" col-2">
              <label className="col-sm-10 col-form-label">Category :</label>
            </div>
            <div className="col-8">
              <select
                required
                id="inputState"
                name="gam"
                ref={category}
                className="form-select"
              >
                <option selected value={""}>
                  Select
                </option>
                <option value={"Motibhaiamin1"}>મહિલા બાળ</option>
                <option value={"Motibhaiamin2"}>શહેર ગ્રંથાલય</option>
                <option value={"Motibhaiamin3"}>શહેર શાખા નગરકક્ષા</option>
                <option value={"Motibhaiamin4"}>ગ્રામ ગ્રંથાલય</option>
                <option value={"Motibhaiamin5"}>નગરકક્ષા ૧</option>
                <option value={"Motibhaiamin6"}>નગરકક્ષા ૨</option>
                <option value={"Motibhaiamin7"}>વિશીષ્ટ લાઇબ્રેરી</option>
              </select>
            </div>
            <div className=" col">
              <button
                type="button"
                onClick={showresult}
                className="btn btn-primary"
              >
                Search
              </button>
            </div>
          </div>
          {data && (
            <>
              <table
                ref={pdfref}
                className="table table-bordered table-hover rounded"
              >
                <thead>
                  <tr>
                    <th>Library id</th>
                    <th>Library Name</th>

                    <th>City</th>
                    <th>Marks</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((i) => (
                    <tr>
                      <td>{i.uid}</td>
                      <td>{i.lname}</td>
                      <td>{i.gam}</td>
                      <td>{i.marks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                type="button"
                onClick={downloadpdf}
                className="btn btn-primary"
              >
                Donwload PDF
              </button>
              <a href="/">
                <button class="btn btn-warning m-3 " type="button">
                  Back
                </button>
              </a>
            </>
          )}
        </div>
      </center>
      <Footer></Footer>
    </>
  );
}
export default Motibhaiaminresult;
