import { CartContext } from "./CartContext";
import { useState } from "react";


function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const agregarAlCarrito = (prod) => {
    const isInCart = cart.some((item) => item.id === prod.id);

    if (isInCart) {
      const productoRepetido = cart.find((item) => item.id === prod.id);
      const cartSinElProducto = cart.filter((item) => item.id !== prod.id);
      setCart([
        ...cartSinElProducto,
        { ...productoRepetido, count: productoRepetido.count + prod.count },
      ]);
    } else {
      setCart([...cart, prod]);
    }
  };

  const getCant = () => {
    const cantidades = cart.map((prod) => prod.count);
    const cantidad = cantidades.reduce((acc, current) => acc + current, 0);
    return cantidad;
  };

  const getTotal = ()=>{
    const totales = cart.map(prod=> prod.count*prod.precio)
    const total = totales.reduce((acc,current)=> acc+current,0)

    return total
  }

  return (
    <CartContext.Provider value={{ cart, agregarAlCarrito, getCant, getTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
