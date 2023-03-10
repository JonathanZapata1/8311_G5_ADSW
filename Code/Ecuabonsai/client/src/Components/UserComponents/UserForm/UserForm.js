import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Catalogo from "./Catalogo.js";

export const getProductos = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/producto`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export function UserForm() {
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
        <div className="row">
        {catalogos.map((item, index) => {
          return <Catalogo key={index} {...item} />;
        })}
        </div>
        
      </div>
  );
}
