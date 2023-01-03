import { DeleteForm } from "../Components/DeleteForm/DeleteForm";
import { Navbar } from "../Components/Navbar/Navbar";
export function Delete() {
  return (
    <div>
      <Navbar />
      <div className="form">
        <DeleteForm />
      </div>
    </div>
  );
}
