import { useState } from "react"
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"


export default function CartPage(){
    const [showCart, setShowCart] = useState(false)
    const cart = useSelector(state => state.cart)
    const navigate = useNavigate()

    let totalPrice = 0
    cart.map(item => {
      totalPrice += item.price
    })

    const carty =()=>{
        navigate('/Cart')
      }

    return(
        <div className="cartPage" onClick={carty}>
         
          <div onClick={() => setShowCart(!showCart)}
    style={{ }}
    >
      <img width='50' src='data:image/png;base64,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' />
      {cart.length}
    </div>

    {showCart && <div style={{ backgroundColor: 'white', width: '300px', color: 'black' }}>
      {cart.map(item => {
        return <div>
          {item.item} | Rs.{item.price}
        {  console.log('item..',item.item)}
        </div>
      })}
      <p><b>Total Price: Rs. {totalPrice}</b></p>
      <button>Checkout</button>
    </div>}
    <div>
    
    </div>
        </div>
    )
}