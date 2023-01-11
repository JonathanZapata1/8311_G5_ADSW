import { NavbarUser } from "../../Components/UserForm/NavbarUser";
import { Footer } from "../../Components/UserForm/Footer";
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
              <img className="portada" src="https://scontent.fuio10-1.fna.fbcdn.net/v/t39.30808-6/277101596_5258284584193707_253664897078156816_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeFanXgk3zf6dfwbgoimMsxNQOCLY9_uNPNA4Itj3-4088_RR_EzRb7YhUNUobdesfNF2EM00DxA8oWbFj8vDaos&_nc_ohc=T_Xg1jHhrX4AX_UrjNJ&tn=V_ey3XNaayuhpdlL&_nc_ht=scontent.fuio10-1.fna&oh=00_AfBIUyNqNiHmprNCrBW93K1YFzSFNgoa56-gQvvf9DwheQ&oe=63C314D1"></img>
            </td>
        
    
            </tr>
            
          </table>
        </div>
      </div>
      <Footer />
    </div>
    
  );
}