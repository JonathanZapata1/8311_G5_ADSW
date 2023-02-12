import React, { useEffect, useState } from "react";
import axios from "axios";

export function CreateForm() {
  const [products, setProducts] = useState([]);
  const [promos, setPromos] = useState([]);
  const uri = "http://localhost:5000/";

  useEffect(() => {
    async function getProducts() {
      var products = [];
      let aux = (await axios.get(`${uri}tipoproducto`)).data;
      for (let i = 0; i < aux.length; i++) {
        var tipo = aux[i].tipo;
        products.push(<option>{tipo}</option>);
      }
      setProducts(products);
    }
    async function getPromos() {
      var promos = [];
      let aux = (await axios.get(`${uri}promotion`)).data;
      for (let i = 0; i < aux.length; i++) {
        var promo = aux[i].descuento;
        promos.push(<option>{promo}</option>);
      }
      setPromos(promos);
    }
    getProducts();
    getPromos();
  }, []);
  /*Envio de datos*/

  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [promocion, setPromocion] = useState("");

  const handleTipoChange = (event) => {
    setTipo(Array.from(event.target.selectedOptions, (option) => option.value));
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handlePrecioChange = (event) => {
    setPrecio(event.target.value);
  };
  const handlePromocionChange = (event) => {
    setPromocion(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const tipoString = tipo.join(",");
    try {
      const response = await axios.post(`${uri}producto`, {
        tipo: tipoString,
        descripcion,
        precio,
        promocion,
      });
      console.log(response.data);
      alert("Se ha registrado su producto correctamente ");
      setTipo("");
      setDescripcion("");
      setPrecio(0);
      setPromocion(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container blur">
      <center>
        <div
          className="card text-white bg-secondary border-primary center"
          style={{ width: "20rem", height: "35rem" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="rendered-form">
              <div className="formbuilder-select form-group field-select-1661658959184">
                <label
                  htmlFor="select-1661658959184"
                  className="formbuilder-select-label"
                >
                  Seleccionar un producto
                  <span className="formbuilder-required">*</span>
                </label>
                <select
                  className="form-control"
                  name="select-1661658959184[]"
                  multiple="true"
                  id="select-1661658959184"
                  required="required"
                  aria-required="true"
                  value={tipo}
                  onChange={handleTipoChange}
                >
                  {products};
                </select>
              </div>
              <div className="formbuilder-file form-group field-file-1661659003480">
                <label
                  htmlFor="file-1661659003480"
                  className="formbuilder-file-label"
                >
                  Subir Imagen
                </label>
                <input
                  type="file"
                  className="form-control"
                  name="file-1661659003480"
                  access="false"
                  multiple="false"
                  id="file-1661659003480"
                />
              </div>

              <div className="formbuilder-button form-group field-button-1661661233333">
                <label
                  htmlFor="select-1661659027080"
                  className="formbuilder-select-label"
                >
                  Descripcion del producto
                </label>
                <div className="textDiv">
                  <input
                    value={descripcion}
                    onChange={handleDescripcionChange}
                    className="form-control"
                    type="text"
                  ></input>
                </div>
              </div>

              <div className="formbuilder-button form-group field-button-1661661233333">
                <label
                  htmlFor="select-1661659027080"
                  className="formbuilder-select-label"
                >
                  Precio del producto ($)
                </label>
                <div className="textDiv">
                  <input
                    value={precio}
                    onChange={handlePrecioChange}
                    className="form-control"
                    type="number"
                    name="points"
                    min="0"
                    max="200"
                    step="0.01"
                  ></input>
                </div>
              </div>

              <div className="formbuilder-select form-group field-select-1661659027080">
                <label
                  htmlFor="select-1661659027080"
                  className="formbuilder-select-label"
                >
                  Seleccionar Promoción
                </label>
                <select
                  value={promocion}
                  onChange={handlePromocionChange}
                  className="form-control"
                  name="select-1661659027080"
                  id="select-1661659027080"
                >
                  {promos}
                </select>
              </div>

              <div className="formbuilder-button form-group field-button-1661661233333">
                <button
                  type="submit"
                  className="btn-primary btn"
                  name="button-1661661233333"
                  access="false"
                  id="button-1661661233333"
                >
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </center>
    </div>
  );
}
