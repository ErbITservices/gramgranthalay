import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
    const { Components } = props;
    const navigator = useNavigate();
    let login = localStorage.getItem("login");
    useEffect(() => {
        
        if (login=== "AdlAhemedabad") {
            navigator("/Adl_ahemedabad_dashboard");
        }
        if (login=== "AdlSurat") {
            navigator("/Adl_surat_dashboard");
        }
        if (login=== "Adlmeshana") {
            navigator("/Adl_meshana_dashboard");
        }
        if (login=== "Adlbhavnagar") {
            navigator("/Adl_bhavnagar_dashboard");
        }
        if (login=== "Adlvadodara") {
            navigator("/Adl_vadodara_dashboard");
        }
        if (login=== "Adlrajkot") {
            navigator("/Adl_rajkot_dashboard");
        }
        if (login=== "director") {
            navigator("/Directo_Dashbord");
        }
        if (login=== "sclgandhinagar") {
            navigator("/Scl_gandhinagar_dashboard");
        }
        if (login=== "sclvadodara") {
            navigator("/Scl_vadodara_dashboard");
        }
        if (login=== "") {
            navigator("/All_Login");
        }
    },[login])
    return (
      <div>
        <Components></Components>
      </div>
    );
}
export default Protected;