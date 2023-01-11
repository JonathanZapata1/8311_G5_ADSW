import { NavbarUser } from "../../Components/UserForm/NavbarUser";
import { UserForm } from "../../Components/UserForm/UserForm";
import {Footer} from "../../Components/UserForm/Footer";
import "./user.css";

export function CatalogoUser() {
  return (
    <div className="inicio">
    <NavbarUser />
      <div className="form">
        <UserForm />
      </div>
      <Footer/>
    </div>
  );
}