import { NavbarUser } from "../../Components/UserForm/NavbarUser";
import { Footer } from "../../Components/UserForm/Footer";
import "./user.css"
import Foto1 from '../../Assets/bonsai1.png'
import Foto2 from '../../Assets/bonsai2.png'
import Foto3 from '../../Assets/bonsai3.png'
export function Contacto() {
  return (
    <div className="inicio">
    <NavbarUser />
    <section className="menu">
      <h1> Bonsáis únicos en el Ecuador🎋</h1>
    <div className="columna">
      <div className="foto">
  <img src={Foto1} alt="foto1" />
      </div>
      <div className="foto">
        <img src={Foto2} alt='foto2'/>
      </div>
      <div className="foto">
        <img src={Foto3} alt="foto3" />
      </div>
    </div>
  </section>
  <Footer />
    </div>
    
    
  );
}