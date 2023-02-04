import { NavbarUser } from "../../Components/UserForm/NavbarUser";
import {LoginUser} from "../../Components/Login.js/LoginUser"
import { Footer } from "../../Components/UserForm/Footer";
export function Micuenta() {
  return (
    <div className="inicio" >
    <NavbarUser />
       <LoginUser/>
       <Footer/>
    </div>
  );
}