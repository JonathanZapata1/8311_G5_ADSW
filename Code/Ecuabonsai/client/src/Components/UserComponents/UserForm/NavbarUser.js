import "../../AdminComponents/Navbar/Navbar.css";
import Logo from "../../../Assets/logo.jpg";
import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "./ShoppingCartContext";
import { Button } from "reactstrap";
import Modal from 'react-bootstrap/Modal';


export function NavbarUser() {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc,curr) => {return acc + curr.quantity * curr.precio}
  , 0);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                <a className="nav-link text-black" href="/inicio">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="/catalogo">
                  Catálogo
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-black"
                  href="/mantenimiento_y_servicio"
                >
                  Mantenimiento y Servicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="/conocenos">
                  Conócenos
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Button  onClick={handleShow}>
                  <i className="fas fa-shopping-cart" />
                  {quantity}
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header >
                    <Modal.Title>Carrito de Compras</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Productos en el carro: {quantity}
                    <br></br>
                    Total: ${totalPrice}
                    <br></br>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Finalizar Compra
                    </Button>
                  </Modal.Footer>
                </Modal>
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

          <div className="dropdown ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-black" href="/micuenta">
                  <i className="fas fa-user-alt" />
                  <br />
                  Mi cuenta
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
