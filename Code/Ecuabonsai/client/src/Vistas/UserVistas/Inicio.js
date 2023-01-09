import { NavbarUser } from "../../Components/UserForm/NavbarUser";
import "./user.css";
export function Inicio() {
  return (
    <div>
      <NavbarUser />
      <div className="inicio">
        <h1>Ecuabonsai</h1>
        <h1>El arte del Bonsai cerca de ti</h1>
        <img className="inicioimg" src="https://scontent.fuio10-1.fna.fbcdn.net/v/t39.30808-6/306902236_5750411694980991_4678951055789468915_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeF1XoGenLYDyDa7E_BEBafpgsaEb0ETVzOCxoRvQRNXM4cOq0vjMn0rgziNz0LcIh7XAHVm1-j7w6NYLZzXe5kY&_nc_ohc=n3I-FECMrPAAX8d9zS8&tn=V_ey3XNaayuhpdlL&_nc_ht=scontent.fuio10-1.fna&oh=00_AfC-EuQgdskVkZt_BAfSKdMTePMBSx55Zeg-cUu_3o0Dhg&oe=63C0D7E4" alt="inicio"/>
      </div>
    </div>
  );
}
