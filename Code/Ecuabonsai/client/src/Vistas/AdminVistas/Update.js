import { Navbar } from "../../Components/Navbar/Navbar";
import { UpdateForm } from "../../Components/UpdateForm/UpdateForm";
export function Update() {
  return (
    <div >
      <Navbar/>
      <div className="form">
        <UpdateForm />
      </div>
    </div>
  );
}
