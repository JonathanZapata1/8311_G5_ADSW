import { NavbarUser } from "../../Components/UserForm/NavbarUser";
import { Footer } from "../../Components/UserForm/Footer";
export function Mantenimiento() {
  return (
    <div >
    <NavbarUser />
      <div className="form2">
      <div className="mensaje">
          </div>
        <section className="principio">
          <h1> Objetivos: </h1>
          <div className="oracion">
            <div>
              <i className="fas fa-hamburger" />
              <span>
                Entrega del producto en buen estado y con un excelente actitud. 
              </span> 
            </div>
            <div>
              <i className="fas fa-hamburger" />
              <span>
                Firmes defensores de que calidad y belleza no está en el precio, sino en el producto.
              </span> 
            </div>
            <div>
              <i className="fas fa-hamburger" />
              <span>
                Exigentes en el cuidado del arboles bonsai.
              </span> 
            </div>
            <div>
              <i className="fas fa-hamburger" />
              <span>
                Llevar un ambiente moderno y clasico a tu hogar. 
              </span> 
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
    
  );
}