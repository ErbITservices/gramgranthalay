import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
function Enter({ arr }) {
  const pdfref = useRef();
  const downloadpdf = () => {
    const input = pdfref.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
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
      pdf.addImage(imgData, "PNG", imgx, imgy);
      pdf.save("DataTable.pdf");
    });
  };
  return (
    <center>
      <div className="main rounded" ref={pdfref}>
        <table className="table table-bordered table-hover rounded">
          <thead>
            <tr>
              <th scope="col">Sr</th>
              <th scope="col">Name of library</th>
              <th scope="col">Grant Taken</th>
              <th scope="col">amount of grant</th>
              <th scope="col">status</th>
            </tr>
          </thead>
          <tbody>
            {arr.map((i) => (
              <tr>
                <th scope="row">{i.srno}</th>
                <td>{i.name}</td>
                <td>{i.grantetaken}</td>
                <td>{i.grantamount}</td>
                <td>{i.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button type="button" onClick={downloadpdf} className="btn btn-primary">
        Donwload PDF
      </button>
    </center>
  );
}
export default Enter;
