import React from "react";
import "./UserForm.css";

const Catalogo = ({ catalogos = [] }) => {
  return (
    <div className="row">
      {catalogos.map((item, index) => (
        <div key={index} className="col">
            <div className="card"  style={{width: "18rem"}}>
                <img className="imgCat" src={item.foto} alt="imagenes"></img>
                <div className="card-body">
                    <h5 className="card-title" >{item.nombre}</h5>
                    <p className="card-text"> {item.descripcion}</p>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
};
export default Catalogo;
