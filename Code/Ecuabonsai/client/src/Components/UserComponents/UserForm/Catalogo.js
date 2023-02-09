
import React from "react";
import {CartContext} from '../UserForm/ShoppingCartContext'
import { useContext } from "react";
import Button from 'react-bootstrap/Button';
import "./UserForm.css";

const Catalogo = ({ _id, nombre,foto,precio,descripcion,catalogos}) => {
 
  const[cart, setCart] = useContext(CartContext);

  const addCart = () =>{
    setCart((currItems)=>{
       const isItemsFound = currItems.find((item)=> item._id === _id);
        if(isItemsFound){
          return currItems.map((item)=>{
            if(item._id === _id){
              return {...item, quantity: item.quantity + 1};
            }else{
              return item;
            }
          });
        }else{
          return [...currItems, {_id, quantity: 1, precio: precio}]
        }
    })
 };

 const removeItem =(_id)=>{
  setCart((currItems)=>{
    if(currItems.find((item) => item._id === _id)?.quantity === 1){
      return currItems.filter((item)=> item._id !== _id);
  }else{
    return currItems.map((item)=> {
      if(item._id === _id){
        return {...item, quantity: item.quantity -1}
      }else{
        return item;
      }
    })
  }
  
});
 };

 const getQuantityById = (_id)=>{
  return cart.find((item) => item._id === _id)?.quantity || 0;
 }
 const quantityPerItem = getQuantityById(_id);

  return (
    
   
     <div className="col">
    
       
        <br></br>
            <div className="card"  style={{width: "18rem"}}>
                <img className="imgCat" src={foto} alt="imagenes"></img>
                <div className="card-body">
                    <h5 className="card-title" >{nombre}</h5>
                    <h4>${precio}</h4>
                  {
                    quantityPerItem === 0 ? (
                      <Button variant="primary" onClick={()=>addCart()}>+Añadir al Carrito</Button> 
                   
                    ):(
                      <Button variant="primary" onClick={()=>addCart()}>+Añadir</Button> 
                    )
                  }
                  {
                    quantityPerItem > 0 && <Button variant="secondary" onClick={()=>removeItem(_id)}>-Quitar</Button> 
                  }
                </div>
            </div>
            <br></br>
        </div>

     
    
  );
};
export default Catalogo;
