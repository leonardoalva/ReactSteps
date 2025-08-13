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

  return (
    <CartContext.Provider value={{ cart, agregarAlCarrito, getCant }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
