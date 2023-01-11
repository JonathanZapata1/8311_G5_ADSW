import { NavbarUser } from "../../Components/UserForm/NavbarUser";
import {Login} from "../../Components/Login.js/Login"
import { Footer } from "../../Components/UserForm/Footer";
export function Micuenta() {
  return (
    <div className="inicio" >
    <NavbarUser />
       <Login/>
       <Footer/>
    </div>
  );
}