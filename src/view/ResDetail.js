import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getSingleRestaurant } from '../config/firebase'
import { addCartToStore } from '../store/cart'
import { useDispatch } from 'react-redux'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

function ResDetail() {
    const { resdetai_id } = useParams()
    const [restroData, setRestroData] = useState()
    const [cart, setCart] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await getSingleRestaurant(resdetai_id)
        setRestroData(data)
    }

    if (!restroData) {
        return <div>Loading...</div>
    }

    const { opening_hours, restaurant_name, menu } = restroData
    const open_hrs = []

    for (let key in opening_hours) {
        open_hrs.push(`${key}: ${opening_hours[key]}`)
    }

    const addToCart = (item) => {
        dispatch(addCartToStore(item))
    }

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
            <div className="adBar">

<a href="#">
    <p>Homepage</p>
</a>
<a href="#">
    <p>Karachi</p>
</a>
<a href="#">

</a>
</div>
<div className='heading'>
<h1>{restaurant_name}</h1>
</div>
            </div>
           <div className='timing'>
            <h3>Timings</h3>
            {open_hrs.map(item => <p>{item}</p>)}
            </div>
            <div className='menu'>
            <h3>Menu</h3>
            <ul>
                {menu.map(item => {
                    return <li>{item.item} <button onClick={() => addToCart(item)}>Add to cart</button></li>
                })}
            </ul>
            </div>
           

<div>
    <Footer/>
</div>

        </div>
    )

}


export default ResDetail