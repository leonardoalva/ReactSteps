import { useNavigate } from 'react-router'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function CartView(){
    const {cart,getTotal} = useContext(CartContext)
    const total = getTotal()
    const navigate = useNavigate()


    return(
        <>
        <div className='d-flex flex-column align-items-center mt-5'>
            <ul className='w-75'>
                {cart.map(prod=>(
                    <li key={prod.id}>
                        <p>{prod.producto} x {prod.count} </p>
                        <Button variant='danger'>X</Button>
                    </li>
                ))}
            </ul>
            <h2>TOTAL:{total}</h2>
            <button
            onClick={()=>navigate('/checkout')}>
            ir al checkout
            </button>
        </div>
        </>
    )
}

export default CartView