import { NavbarUser } from "../../Components/UserForm/NavbarUser";
import {LoginUser} from "../../Components/Login.js/LoginUser"
import { Footer } from "../../Components/UserForm/Footer";
export function Micuenta() {
  return (
    <div className="inicio" >
    <NavbarUser />
    <div className="registerPropaganda">
      <p>¿Ya tienes cuenta? Haz clic en este botón e introduce tus datos de usuario y continua con tu compra.</p>
      </div>
      <div className="register">
          <LoginUser/>
        </div>
       <Footer/>
    </div>
  );
}