import "../Navbar/Navbar.css";
import Logo from "../../Assets/logo.jpg";
export function NavbarUser() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-cream">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-black" href="/user/inicio">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="/user/catalogo">
                  Catálogo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="/user/mantenimiento_y_servicio">
                  Mantenimiento y Servicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="/user/contacto">
                  Conócenos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="/user/micuenta">
                  Mi cuenta
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown ">
            <img
              className="rounded-3"
              src={Logo}
              height={70}
              width={100}
              alt="MDB Logo"
              loading="lazy"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
