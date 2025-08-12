import { CartContext } from "./CartContext";
import { useState } from 'react'

function CartProvider({children}){
const [cart, setCart] = useState([])
console.log(cart)

const agregarAlCarrito = (prod)=> setCart([...cart,prod])

const getCant = ()=>{
    const cantidades = cart.map(prod => prod.count)
    const cantidad = cantidades.reduce((acc,current)=>acc+current,0)
    return cantidad

}   

    return(
        <CartContext.Provider value={{cart,agregarAlCarrito,getCant}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;