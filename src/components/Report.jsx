import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
function Report({arr,handleback,title}) {
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
    console.log(arr);
    
  return (
    <center>
      <div className="main rounded">
        <h1 className="heighlight">{title}</h1>
        <table
          ref={pdfref}
          className="table table-bordered table-hover rounded"
        >
          <thead>
            <tr>
              <th>Library id</th>
              <th>Library Name</th>
              <th>District</th>
              <th>Taluko</th>
              <th>City</th>
              <th>phone</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {arr.length != 0 &&
              arr.map((i) => (
                <tr>
                  <td>{i.uid}</td>
                  <td>{i.lname}</td>
                  <td>{i.district}</td>
                  <td>{i.taluko}</td>
                  <td>{i.gam}</td>
                  <td>{i.phone}</td>
                  <td>{i.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <button type="button" onClick={downloadpdf} className="btn btn-primary">
        Donwload PDF
      </button>

      <button onClick={handleback} class="btn btn-warning m-3 " type="button">
        Back
      </button>
    </center>
  );
}
export default Report;
