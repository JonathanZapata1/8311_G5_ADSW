import { NavbarUser } from "../../Components/UserForm/NavbarUser";
import {Register} from "../../Components/Login.js/Register"
import { Footer } from "../../Components/UserForm/Footer";

export function RegisterUser() {
  return (
    <div className="inicio" >
    <NavbarUser />
       <Register/>
       <Footer/>
    </div>
  );
}