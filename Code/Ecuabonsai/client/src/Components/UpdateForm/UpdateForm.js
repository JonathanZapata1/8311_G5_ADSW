import React, { useState } from "react";
import { useEffect } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import axios from "axios";
import "./UpdateForm.css";
export const getProductos = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/producto`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getPromocion = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/promotion`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export function UpdateForm() {
  const [data, setData] = useState([
    {
      id: "",
      producto: "",
      descripcion: "",
      foto: "",
      promocion: "",
    },
  ]);
  
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [bonsaiSeleccionado, setBonsaiSeleccionado] = useState({
    id: "",
    producto: "",
    descripcion: "",
    foto: "",
    promocion: "",
  });

  const seleccionarBonsai = (elemento, caso) => {
    setBonsaiSeleccionado(elemento);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBonsaiSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const editar = () => {
    catalogos.map((bonsai) => {
      if (bonsai._id === bonsaiSeleccionado._id) {
        bonsai.especie = bonsaiSeleccionado.especie;
        bonsai.descripcion = bonsaiSeleccionado.descripcion;
        bonsai.foto = bonsaiSeleccionado.foto;
        bonsai.promocion = bonsaiSeleccionado.promocion;
      }
    });
    setCatalogos(catalogos);
    setModalEditar(false);
    axios.put("http://localhost:5000/producto", {});
  };

  const [catalogos, setCatalogos] = useState([]);

  useEffect(() => {
    getAllCatalogos();
  }, []);

  const getAllCatalogos = async () => {
    let response = await getProductos();
    setCatalogos(response.data);
  };

  return (
    <div className="container">
      <div className="blur">
        <h2 className="tittle">Actualizar Productos Catalogo</h2>
        <br />
        <table className="table table-striped ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Descripcion</th>
              <th>Foto</th>
              <th>Promocion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {catalogos.map((elemento) => (
              <tr>
                <td>{elemento._id}</td>
                <td>{elemento.especie}</td>
                <td>{elemento.descripcion}</td>
                <td>
                  <img className="imagenArbol" src={elemento.foto} />
                </td>
                <td>{elemento.promocion}</td>
                <td>
                  <button
                    className="btn btn-naranja"
                    onClick={() => seleccionarBonsai(elemento, "Editar")}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Producto</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={bonsaiSeleccionado && bonsaiSeleccionado._id}
            />
            <br />

            <label>Producto</label>
            <input
              className="form-control"
              type="text"
              name="especie"
              value={bonsaiSeleccionado && bonsaiSeleccionado.especie}
              onChange={handleChange}
            />
            <br />

            <label>Descripcion</label>
            <input
              className="form-control"
              type="text"
              name="descripcion"
              value={bonsaiSeleccionado && bonsaiSeleccionado.descripcion}
              onChange={handleChange}
            />
            <br />
            <label>Foto</label>
            <input
              className="form-control"
              type="text"
              name="foto"
              value={bonsaiSeleccionado && bonsaiSeleccionado.foto}
              onChange={handleChange}
            />
            <input
              className="form-control"
              type="file"
              name="foto"
              access="false"
              multiple="false"
              id="file-1661659003480"
              value={bonsaiSeleccionado && bonsaiSeleccionado.foto}
              onChange={handleChange}
            />
            <br />
            <label>Promocion</label>
            <select
              className="form-control"
              type="text"
              name="promocion"
              value={bonsaiSeleccionado && bonsaiSeleccionado.promocion}
              onChange={handleChange}
            >
              <option value="10%" selected="true" id="select-1661659027080-0">
                10%
              </option>
              <option value="25%" id="select-1661659027080-1">
                25%
              </option>
              <option value="50%" id="select-1661659027080-2">
                50%
              </option>
            </select>

            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
