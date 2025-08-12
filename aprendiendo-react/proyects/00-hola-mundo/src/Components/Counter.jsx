import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Counter({item}) {
    const [count, setCount] = useState(0);
    const {agregarAlCarrito} = useContext(CartContext)


    const increment = () => {
        setCount(count + 1);}
    const decrement = () => {
        if (count > 0){
        setCount(count - 1)};}
    const agregarItem = ()=>{agregarAlCarrito({...item,count})
    
    };

  return (
    <>
      <h1>{count}</h1>
    <div className="Container-Counter">
      <button className={"boton-Compra"} onClick={increment}>+</button>
      <button className={"boton-Compra"} onClick={decrement}>-</button>
      <button className={"boton-Compra"} onClick={agregarItem}>agregar al carrito</button>
    </div>
    </>
  );
}

export default Counter;