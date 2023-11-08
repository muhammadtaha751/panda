export default function ResCards(props){
    const {restaurant_name, cuisine_type} = props.data
    return(
        
        <div  className="dis" style={{height:300,width:300,color:"black"}}onClick={props.onClick}>
            

            <img  style={{width:200}} src="https://tse3.mm.bing.net/th?id=OIP.rUprSy-Tu_ru7GftGXSI-wHaE8&pid=Api&P=0&h=220" />
<h3>{restaurant_name}</h3>
<h5>{cuisine_type}</h5>

</div>
    )
}

// import { useParams } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import { getSingleRestaurant } from '../config/firebase'
// import { addCartToStore } from '../store/cart'
// import { useDispatch } from 'react-redux'

// function RestroDetail() {
//   const { restro_id } = useParams()
//   const [restroData, setRestroData] = useState()
//   const [cart, setCart] = useState([])
//   const dispatch = useDispatch()

//   useEffect(() => {
//     getData()
//   }, [])

//   const getData = async () => {
//     const data = await getSingleRestaurant(restro_id)
//     setRestroData(data)
//   }

//   if (!restroData) {
//     return <div>Loading...</div>
//   }

//   const { opening_hours, restaurant_name, menu } = restroData
//   const open_hrs = []

//   for (let key in opening_hours) {
//     open_hrs.push(`${key}: ${opening_hours[key]}`)
//   }

//   const addToCart = (item) => {
//     dispatch(addCartToStore(item))


//   }
//   return <div>
//     <h1>{restaurant_name}</h1>

//     <h3>Timings</h3>
//     {open_hrs.map(item => <p>{item}</p>)}

//     <h3>Menu</h3>
//     <ul>
//       {menu.map(item => {
//         return <li>{item.item} <button onClick={() => addToCart(item)}>Add to cart</button></li>
//       })}
//     </ul>


//   </div>
// }

// export default RestroDetail