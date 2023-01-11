import { NavbarUser } from "../../Components/UserForm/NavbarUser";
import { Footer } from "../../Components/UserForm/Footer";
import "./user.css"
import Foto1 from '../../Assets/bonsai1.png'
import Foto2 from '../../Assets/bonsai2.png'
import Foto3 from '../../Assets/bonsai3.png'
export function Contacto() {
  return (
    <div >
    <NavbarUser />
    <section className="menu">
      <h1> ESCRÍBENOS</h1>
    <div className="columna">
      <div className="foto">
  <img src={Foto1} />
      </div>
      <div className="foto">
        <img src={Foto2} />
      </div>
      <div className="foto">
        <img src={Foto3} />
      </div>
    </div>
  </section>
  <Footer />
    </div>
    
    
  );
}