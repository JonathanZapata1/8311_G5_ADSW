import { NavbarUser } from "../../Components/UserForm/NavbarUser";
import { UserForm } from "../../Components/UserForm/UserForm";
import {Footer} from "../../Components/UserForm/Footer";

export function CatalogoUser() {
  return (
    <div >
    <NavbarUser />
      <div className="form">
        <UserForm />
      </div>
      <Footer/>
    </div>
  );
}