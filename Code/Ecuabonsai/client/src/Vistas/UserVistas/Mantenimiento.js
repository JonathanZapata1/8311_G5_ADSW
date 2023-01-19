import { NavbarUser } from "../../Components/UserForm/NavbarUser";
import { Footer } from "../../Components/UserForm/Footer";
import ImagenMant from '../../Assets/servicios.jpg'
import "./user.css";
export function Mantenimiento() {
  return (
    <div>
    <div className="inicio">
    <NavbarUser />
    <div className="text-left">
          <table className="eslogan">
          <tr>
          <td>
            <h1>Objetivos</h1>
            <h5>Entrega del producto en buen estado y con excelente actitud.</h5>
            <p>Firmes defensores de que calidad y belleza no esta en el precio, sino en el producto.</p>
            <h5>Exigentes en el cuidado de los arboles bonsái</h5>
            <p>Llevamos un ambiente moderno y clasico</p>
            </td>
            <td>
              <img className="portada" src={ImagenMant}></img>
            </td>    
            </tr>
                       
          </table>
        </div>
      </div>
      <Footer />
    </div>
    
  );
}