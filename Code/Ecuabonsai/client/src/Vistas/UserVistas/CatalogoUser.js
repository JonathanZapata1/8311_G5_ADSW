import { NavbarUser } from "../../Components/UserForm/NavbarUser";
import { UserForm } from "../../Components/UserForm/UserForm";
export function CatalogoUser() {
  return (
    <div >
    <NavbarUser />
      <div className="form">
        <UserForm />
      </div>
    </div>
  );
}