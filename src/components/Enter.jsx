import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
function Enter({ arr }) {
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
  return (
    <center>
      <div className="main rounded">
        <table
          ref={pdfref}
          className="table table-bordered table-hover rounded"
        >
          <thead>
            <tr>
              <th colSpan="31" scope="col">
                પુસ્તકાલયની સામાન્ય માહિતી
              </th>
              <th colSpan="4" scope="col">
                ગત વર્ષના આવક ખર્ચાના હિસાબો
              </th>
              <th colSpan="2" scope="col">
                ગ્રંથાલયમાં આવેલ ડેડસ્ટોકની વિગતો
              </th>
              <th scope="col"></th>
              <th colSpan="10" scope="col">
                ગ્રંથાલયમાં નીચેનું દફતર નિભાવવામાં આવે છે?
              </th>
              <th colSpan="5" scope="col"></th>
              <th colSpan="18" scope="col">
                સરકારી અનુદાનની ગણતરી માટેની ગતવર્ષની ખર્ચની વિગતો
              </th>
              <th colSpan="13" scope="col">
                આવક
              </th>
              <th colSpan="19" scope="col">
                ખર્ચ
              </th>
            </tr>
            <tr>
              <th scope="col">ક્રમ</th>
              <th scope="col">ગ્રંથાલયનું નામ</th>
              <th scope="col">ગામ</th>
              <th scope="col">પિન</th>
              <th scope="col">તાલુકો</th>
              <th scope="col">જીલો</th>
              <th scope="col">સ્થાપના તારીખ</th>
              <th scope="col">પુરશો</th>
              <th scope="col">સ્ત્રી</th>
              <th scope="col">કુલ</th>
              <th scope="col">ભણેલાઓ ની સાંખ્ય</th>
              <th scope="col">પુરુષ</th>
              <th scope="col">સ્ત્રી</th>
              <th scope="col">બાળકો</th>
              <th scope="col">કુલ</th>
              <th scope="col">વાર્ષિક</th>
              <th scope="col">પુસ્તક આપ લે વિભાગ</th>
              <th scope="col">વાંચનાલય</th>
              <th scope="col">ગ્રંથાલયનુ વ્યાવસ્થાતંત્ર</th>
              <th scope="col">નોંધણી ક્રમાંક</th>
              <th scope="col">પત્ર વ્યાહાર માટે જવાબદાર વ્યક્તિનુ નામ</th>
              <th scope="col">હોદો આને પૂરું સરનામું</th>
              <th scope="col">ગ્રંથપાલનુ નામ</th>
              <th scope="col">ગ્રંથપાલનુ સરનામું</th>
              <th scope="col">ગ્રંથપાલનુ લાયકાત</th>
              <th scope="col">ગ્રંથપાલનો પગાર</th>
              <th scope="col">મકાન ગ્રંથાલય ની માલિકી નું છે</th>
              <th scope="col">વાર્ષિક ભાડું</th>
              <th scope="col">મકાન ની વર્તમાન સ્થિતિ</th>
              <th scope="col">હવા ઉજાશ આને બીજી સુવિધા છે?</th>
              <th scope="col">
                ગ્રંથાલય દરેકને માટે કોઈપણ ભેદભાવ વગર ખુલ્લુ છે?
              </th>
              <th scope="col">ગત વર્ષના અંતે પુસ્તકોની સંખ્યા</th>
              <th scope="col">આ વર્ષમાં ઉમેરાયેલા પુસ્તકો ની સંખ્યા</th>
              <th scope="col">આ વર્ષમાં કમી થયેલા પુસ્તકોની સંખ્યા</th>
              <th scope="col">વર્ષના અંતે પુસ્તકોની કુલ સંખ્યા</th>
              <th scope="col">વર્ષ દરમ્યાન ઈશ્યૂ થયેલા કુલ પુસ્તકો</th>
              <th scope="col">
                વર્તમાન પત્રો તથા સામયિકો વાંચનારની દૈનિક સરેરાશ સંખ્યા
              </th>
              <th scope="col">
                વર્ષ દરમિયાન ગ્રંથાલયમાં આવતા વર્તમાનપત્રો તથા સામયિકોના નામ
              </th>
              <th scope="col">પરિગ્રહણ પત્રક</th>
              <th scope="col">સભ્ય રજીસ્ટર</th>
              <th scope="col">હાજરી પત્રક</th>
              <th scope="col">ડેડસ્ટોક રજીસ્ટર</th>
              <th scope="col">વાર્ષિક નિવેદન</th>
              <th scope="col">પાવતી બુક</th>
              <th scope="col">વાઉચર ફાઈલ</th>
              <th scope="col">રોજમેળ</th>
              <th scope="col">ઠરાવ બુક</th>
              <th scope="col">ઇસ્યુ રજીસ્ટર</th>
              <th scope="col">નિરીક્ષકે કરેલા સૂચનોનું પાલન થાય છે</th>
              <th scope="col">
                વાંચકોની મૂળભૂત જરૂરિયાતને ગ્રંથાલય પહોંચી વડે છે કે કેમ
              </th>
              <th scope="col">કેટલા અંશે?</th>
              <th scope="col">ગત વર્ષે મળેલી સરકારી અનુદાનની રકમ</th>
              <th scope="col">ગત વર્ષે મળેલી સરકારી અનુદાનની રકમ</th>
              <th scope="col">વાંચન સામગ્રી નમૂનો : ક (અ)</th>
              <th scope="col">કરેલું ખર્ચ</th>
              <th scope="col">માન્ય ખર્ચ</th>
              <th scope="col">કર્મચારી પગાર નમૂનો : ક (બ)</th>
              <th scope="col">કરેલું ખર્ચ</th>
              <th scope="col">માન્ય ખર્ચ</th>
              <th scope="col">વિશેષ નોંધ</th>
              <th scope="col">ફર્નિચર અને રીપેરીંગ નમૂનો: ક (ક)</th>
              <th scope="col">કરેલું ખર્ચ</th>
              <th scope="col">માન્ય ખર્ચ</th>
              <th scope="col">વિશેષ નોંધ</th>
              <th scope="col">મકાન ભાડુ પરચુરણ નમૂનો : ક(ડ)</th>
              <th scope="col">કરેલું ખર્ચ</th>
              <th scope="col">માન્ય ખર્ચ</th>
              <th scope="col">વિશેષ નોંધ</th>
              <th scope="col">કુલ</th>
              <th scope="col">કરેલું ખર્ચ</th>
              <th scope="col">માન્ય ખર્ચ</th>
              <th scope="col">લવાજમ </th>
              <th scope="col">ભંડોળનું વ્યાજ</th>
              <th scope="col">ભાડાની ઉપજ</th>
              <th scope="col">પસ્તી વેચાણ</th>
              <th scope="col">સરકારી અનુદાન</th>
              <th scope="col">પંચાયતની મદદ</th>
              <th scope="col">જિલ્લા</th>
              <th scope="col">તાલુકા</th>
              <th scope="col">ગ્રામ</th>
              <th scope="col">લોક મદદ</th>
              <th scope="col">અન્ય આવક </th>
              <th scope="col">વર્ષની શરૂઆતમાં હાથ ઉપની સિલક </th>
              <th scope="col">કુલ સરવાળો</th>
              <th scope="col">પુસ્તક ખરીદી :</th>
              <th scope="col">વર્તમાન પત્રો, સામયિકો</th>
              <th scope="col"> પુસ્તક બાંધણી</th>
              <th scope="col">પગાર</th>
              <th scope="col">મોંઘવારી</th>
              <th scope="col">અન્ય</th>
              <th scope="col">ફર્નિચર</th>
              <th scope="col">ફર્નિચર મરામત</th>
              <th scope="col">અન્ય સાધન સામગ્રી</th>
              <th scope="col">મકાન ભાડુ</th>
              <th scope="col">મકાન મરામત</th>
              <th scope="col">કરવેરા</th>
              <th scope="col">સ્ટેશનરી/છપામાણી</th>
              <th scope="col">ટપાલ ખર્ચ</th>
              <th scope="col">પ્રવાસ ખર્ચ</th>
              <th scope="col">વીમાનું પ્રીમિયમ</th>
              <th scope="col">વીજળી ખર્ચ</th>
              <th scope="col">પરચુરણ ખર્ચ</th>
              <th scope="col">કુલ સરવાળો</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{arr[0].lname}</td>
              <td>gandhinagar</td>
              <td>3800002</td>
              <td>gandhinagar</td>
              <td>gandhinagar</td>
              <td>27/01/2005</td>
              <td>27</td>
              <td>37</td>
              <td>64</td>
              <td>100</td>
              <td>30</td>
              <td>40</td>
              <td>30</td>
              <td>100</td>
              <td>100</td>
              <td>2000</td>
              <td>09-06</td>
              <td>09-06</td>
              <td>government</td>
              <td>Patel mihirkumar kamleshbhai</td>
              <td>gandhinagar,gujarat,380002</td>
              <td> mihirkumar </td>
              <td>gandhinagar,gujarat,380002</td>
              <td>post graduated</td>
              <td>100000</td>
              <td>No</td>
              <td>20000</td>
              <td>good</td>
              <td>Ha</td>
              <td>Ha</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>200000</td>
              <td>20000</td>
              <td>2000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>library-1</td>
              <td>gandhinagar</td>
              <td>3800002</td>
              <td>gandhinagar</td>
              <td>gandhinagar</td>
              <td>27/01/2005</td>
              <td>27</td>
              <td>37</td>
              <td>64</td>
              <td>100</td>
              <td>30</td>
              <td>40</td>
              <td>30</td>
              <td>100</td>
              <td>100</td>
              <td>2000</td>
              <td>09-06</td>
              <td>09-06</td>
              <td>government</td>
              <td>Patel mihirkumar kamleshbhai</td>
              <td>gandhinagar,gujarat,380002</td>
              <td> mihirkumar </td>
              <td>gandhinagar,gujarat,380002</td>
              <td>post graduated</td>
              <td>100000</td>
              <td>No</td>
              <td>20000</td>
              <td>good</td>
              <td>Ha</td>
              <td>Ha</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>200000</td>
              <td>20000</td>
              <td>2000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>library-1</td>
              <td>gandhinagar</td>
              <td>3800002</td>
              <td>gandhinagar</td>
              <td>gandhinagar</td>
              <td>27/01/2005</td>
              <td>27</td>
              <td>37</td>
              <td>64</td>
              <td>100</td>
              <td>30</td>
              <td>40</td>
              <td>30</td>
              <td>100</td>
              <td>100</td>
              <td>2000</td>
              <td>09-06</td>
              <td>09-06</td>
              <td>government</td>
              <td>Patel mihirkumar kamleshbhai</td>
              <td>gandhinagar,gujarat,380002</td>
              <td> mihirkumar </td>
              <td>gandhinagar,gujarat,380002</td>
              <td>post graduated</td>
              <td>100000</td>
              <td>No</td>
              <td>20000</td>
              <td>good</td>
              <td>Ha</td>
              <td>Ha</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>200000</td>
              <td>20000</td>
              <td>2000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>library-1</td>
              <td>gandhinagar</td>
              <td>3800002</td>
              <td>gandhinagar</td>
              <td>gandhinagar</td>
              <td>27/01/2005</td>
              <td>27</td>
              <td>37</td>
              <td>64</td>
              <td>100</td>
              <td>30</td>
              <td>40</td>
              <td>30</td>
              <td>100</td>
              <td>100</td>
              <td>2000</td>
              <td>09-06</td>
              <td>09-06</td>
              <td>government</td>
              <td>Patel mihirkumar kamleshbhai</td>
              <td>gandhinagar,gujarat,380002</td>
              <td> mihirkumar </td>
              <td>gandhinagar,gujarat,380002</td>
              <td>post graduated</td>
              <td>100000</td>
              <td>No</td>
              <td>20000</td>
              <td>good</td>
              <td>Ha</td>
              <td>Ha</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>200000</td>
              <td>20000</td>
              <td>2000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>library-1</td>
              <td>gandhinagar</td>
              <td>3800002</td>
              <td>gandhinagar</td>
              <td>gandhinagar</td>
              <td>27/01/2005</td>
              <td>27</td>
              <td>37</td>
              <td>64</td>
              <td>100</td>
              <td>30</td>
              <td>40</td>
              <td>30</td>
              <td>100</td>
              <td>100</td>
              <td>2000</td>
              <td>09-06</td>
              <td>09-06</td>
              <td>government</td>
              <td>Patel mihirkumar kamleshbhai</td>
              <td>gandhinagar,gujarat,380002</td>
              <td> mihirkumar </td>
              <td>gandhinagar,gujarat,380002</td>
              <td>post graduated</td>
              <td>100000</td>
              <td>No</td>
              <td>20000</td>
              <td>good</td>
              <td>Ha</td>
              <td>Ha</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>200000</td>
              <td>20000</td>
              <td>2000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>library-1</td>
              <td>gandhinagar</td>
              <td>3800002</td>
              <td>gandhinagar</td>
              <td>gandhinagar</td>
              <td>27/01/2005</td>
              <td>27</td>
              <td>37</td>
              <td>64</td>
              <td>100</td>
              <td>30</td>
              <td>40</td>
              <td>30</td>
              <td>100</td>
              <td>100</td>
              <td>2000</td>
              <td>09-06</td>
              <td>09-06</td>
              <td>government</td>
              <td>Patel mihirkumar kamleshbhai</td>
              <td>gandhinagar,gujarat,380002</td>
              <td> mihirkumar </td>
              <td>gandhinagar,gujarat,380002</td>
              <td>post graduated</td>
              <td>100000</td>
              <td>No</td>
              <td>20000</td>
              <td>good</td>
              <td>Ha</td>
              <td>Ha</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>200000</td>
              <td>20000</td>
              <td>2000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>library-1</td>
              <td>gandhinagar</td>
              <td>3800002</td>
              <td>gandhinagar</td>
              <td>gandhinagar</td>
              <td>27/01/2005</td>
              <td>27</td>
              <td>37</td>
              <td>64</td>
              <td>100</td>
              <td>30</td>
              <td>40</td>
              <td>30</td>
              <td>100</td>
              <td>100</td>
              <td>2000</td>
              <td>09-06</td>
              <td>09-06</td>
              <td>government</td>
              <td>Patel mihirkumar kamleshbhai</td>
              <td>gandhinagar,gujarat,380002</td>
              <td> mihirkumar </td>
              <td>gandhinagar,gujarat,380002</td>
              <td>post graduated</td>
              <td>100000</td>
              <td>No</td>
              <td>20000</td>
              <td>good</td>
              <td>Ha</td>
              <td>Ha</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>200000</td>
              <td>20000</td>
              <td>2000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>library-1</td>
              <td>gandhinagar</td>
              <td>3800002</td>
              <td>gandhinagar</td>
              <td>gandhinagar</td>
              <td>27/01/2005</td>
              <td>27</td>
              <td>37</td>
              <td>64</td>
              <td>100</td>
              <td>30</td>
              <td>40</td>
              <td>30</td>
              <td>100</td>
              <td>100</td>
              <td>2000</td>
              <td>09-06</td>
              <td>09-06</td>
              <td>government</td>
              <td>Patel mihirkumar kamleshbhai</td>
              <td>gandhinagar,gujarat,380002</td>
              <td> mihirkumar </td>
              <td>gandhinagar,gujarat,380002</td>
              <td>post graduated</td>
              <td>100000</td>
              <td>No</td>
              <td>20000</td>
              <td>good</td>
              <td>Ha</td>
              <td>Ha</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>200000</td>
              <td>20000</td>
              <td>2000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>library-1</td>
              <td>gandhinagar</td>
              <td>3800002</td>
              <td>gandhinagar</td>
              <td>gandhinagar</td>
              <td>27/01/2005</td>
              <td>27</td>
              <td>37</td>
              <td>64</td>
              <td>100</td>
              <td>30</td>
              <td>40</td>
              <td>30</td>
              <td>100</td>
              <td>100</td>
              <td>2000</td>
              <td>09-06</td>
              <td>09-06</td>
              <td>government</td>
              <td>Patel mihirkumar kamleshbhai</td>
              <td>gandhinagar,gujarat,380002</td>
              <td> mihirkumar </td>
              <td>gandhinagar,gujarat,380002</td>
              <td>post graduated</td>
              <td>100000</td>
              <td>No</td>
              <td>20000</td>
              <td>good</td>
              <td>Ha</td>
              <td>Ha</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>200000</td>
              <td>20000</td>
              <td>2000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>library-1</td>
              <td>gandhinagar</td>
              <td>3800002</td>
              <td>gandhinagar</td>
              <td>gandhinagar</td>
              <td>27/01/2005</td>
              <td>27</td>
              <td>37</td>
              <td>64</td>
              <td>100</td>
              <td>30</td>
              <td>40</td>
              <td>30</td>
              <td>100</td>
              <td>100</td>
              <td>2000</td>
              <td>09-06</td>
              <td>09-06</td>
              <td>government</td>
              <td>Patel mihirkumar kamleshbhai</td>
              <td>gandhinagar,gujarat,380002</td>
              <td> mihirkumar </td>
              <td>gandhinagar,gujarat,380002</td>
              <td>post graduated</td>
              <td>100000</td>
              <td>No</td>
              <td>20000</td>
              <td>good</td>
              <td>Ha</td>
              <td>Ha</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>200000</td>
              <td>20000</td>
              <td>2000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>library-1</td>
              <td>gandhinagar</td>
              <td>3800002</td>
              <td>gandhinagar</td>
              <td>gandhinagar</td>
              <td>27/01/2005</td>
              <td>27</td>
              <td>37</td>
              <td>64</td>
              <td>100</td>
              <td>30</td>
              <td>40</td>
              <td>30</td>
              <td>100</td>
              <td>100</td>
              <td>2000</td>
              <td>09-06</td>
              <td>09-06</td>
              <td>government</td>
              <td>Patel mihirkumar kamleshbhai</td>
              <td>gandhinagar,gujarat,380002</td>
              <td> mihirkumar </td>
              <td>gandhinagar,gujarat,380002</td>
              <td>post graduated</td>
              <td>100000</td>
              <td>No</td>
              <td>20000</td>
              <td>good</td>
              <td>Ha</td>
              <td>Ha</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>200000</td>
              <td>20000</td>
              <td>2000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>library-1</td>
              <td>gandhinagar</td>
              <td>3800002</td>
              <td>gandhinagar</td>
              <td>gandhinagar</td>
              <td>27/01/2005</td>
              <td>27</td>
              <td>37</td>
              <td>64</td>
              <td>100</td>
              <td>30</td>
              <td>40</td>
              <td>30</td>
              <td>100</td>
              <td>100</td>
              <td>2000</td>
              <td>09-06</td>
              <td>09-06</td>
              <td>government</td>
              <td>Patel mihirkumar kamleshbhai</td>
              <td>gandhinagar,gujarat,380002</td>
              <td> mihirkumar </td>
              <td>gandhinagar,gujarat,380002</td>
              <td>post graduated</td>
              <td>100000</td>
              <td>No</td>
              <td>20000</td>
              <td>good</td>
              <td>Ha</td>
              <td>Ha</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>200000</td>
              <td>20000</td>
              <td>2000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>library-1</td>
              <td>gandhinagar</td>
              <td>3800002</td>
              <td>gandhinagar</td>
              <td>gandhinagar</td>
              <td>27/01/2005</td>
              <td>27</td>
              <td>37</td>
              <td>64</td>
              <td>100</td>
              <td>30</td>
              <td>40</td>
              <td>30</td>
              <td>100</td>
              <td>100</td>
              <td>2000</td>
              <td>09-06</td>
              <td>09-06</td>
              <td>government</td>
              <td>Patel mihirkumar kamleshbhai</td>
              <td>gandhinagar,gujarat,380002</td>
              <td> mihirkumar </td>
              <td>gandhinagar,gujarat,380002</td>
              <td>post graduated</td>
              <td>100000</td>
              <td>No</td>
              <td>20000</td>
              <td>good</td>
              <td>Ha</td>
              <td>Ha</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>200000</td>
              <td>20000</td>
              <td>2000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>library-1</td>
              <td>gandhinagar</td>
              <td>3800002</td>
              <td>gandhinagar</td>
              <td>gandhinagar</td>
              <td>27/01/2005</td>
              <td>27</td>
              <td>37</td>
              <td>64</td>
              <td>100</td>
              <td>30</td>
              <td>40</td>
              <td>30</td>
              <td>100</td>
              <td>100</td>
              <td>2000</td>
              <td>09-06</td>
              <td>09-06</td>
              <td>government</td>
              <td>Patel mihirkumar kamleshbhai</td>
              <td>gandhinagar,gujarat,380002</td>
              <td> mihirkumar </td>
              <td>gandhinagar,gujarat,380002</td>
              <td>post graduated</td>
              <td>100000</td>
              <td>No</td>
              <td>20000</td>
              <td>good</td>
              <td>Ha</td>
              <td>Ha</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>100</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>ha</td>
              <td>200000</td>
              <td>20000</td>
              <td>2000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>-</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>3000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button type="button" onClick={downloadpdf} className="btn btn-primary">
        Donwload PDF
      </button>
      <a href="Home2/">
        <button class="btn btn-danger m-3 " type="button">
          Log Out
        </button>
      </a>
    </center>
  );
}
export default Enter;
