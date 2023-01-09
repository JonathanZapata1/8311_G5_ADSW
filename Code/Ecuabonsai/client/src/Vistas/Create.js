import { Navbar } from "../Components/Navbar/Navbar";
import { CreateForm } from "../Components/CreateForm/CreateFrom";

export function Create() {
  return (
    <div>
      <Navbar />
      <div className="form">
        <CreateForm />
      </div>
    </div>
  );
}
