import "./Navbar.css";

export function Navbar() {
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
                <a className="nav-link text-black" href="/create">
                  Crear
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="/update">
                  Actualizar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#">
                  Consultar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="/delete">
                  Eliminar
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown ">
            <img
              className="rounded-3"
              src="https://scontent.fuio10-1.fna.fbcdn.net/v/t39.30808-6/226492707_4456185454403628_2684627725507667103_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeERt1Pz8SM7A6k1B7zTWONqzWgq69TZI07NaCrr1NkjTrnI1LUoj_1VVOEkrjaGVgmwrwHgQSr00ttZBTzrq-m8&_nc_ohc=nq-CKgdMte0AX-MagpY&_nc_ht=scontent.fuio10-1.fna&oh=00_AfCJDIOK_4HyzfwkNAz3igbkpuDlMFBTKD-pEkfPqt5x-Q&oe=63BA610B"
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
