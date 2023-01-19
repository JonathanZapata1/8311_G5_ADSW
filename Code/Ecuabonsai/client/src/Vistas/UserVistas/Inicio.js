import { NavbarUser } from "../../Components/UserForm/NavbarUser";
import { Footer } from "../../Components/UserForm/Footer";
import Foto from '../../Assets/fondobonsai1.jpg'
import "./user.css";
export function Inicio() {
  return (
    <div>
     
      <div className="inicio">
      <NavbarUser />
        <div className="text-left">
          <table className="eslogan">
          <tr>
          <td>
            <h3>Bonsáis en Quito</h3>
            <h1>El arte del Bonsái cerca de ti cerca de ti</h1>
            <p>
              Contamos con una amplia variedad en especies,tamaños y edades, En
              Ecuabonsai, nos especializamos en ayudarte a conseguir el que
              arbol que armonizará sus espacios
            </p>
            </td>
            <td>
              <img className="portada" src={Foto} ></img>
            </td>
            </tr>
            
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}