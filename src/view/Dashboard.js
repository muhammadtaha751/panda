import { useState,useEffect } from "react"
import Navbar from "../component/Navbar"
import { postRestaurants } from "../config/firebase"
import { useNavigate } from "react-router-dom"
import ResCards from "../component/ResCards"
import { getRestaurants } from "../config/firebase"
import Dashboard_text from "../component/Dashboard_text"
import Footer from "../component/Footer"
import Footer_two from "../component/Footer_two"
import Footer_three from "../component/Footer_three"


export default function Dashboard(){
    const[restroData,setRestroData] = useState([])
const navigate = useNavigate()
  
useEffect(()=>{
    getData()
   },[])

   const getData = async()=>{
  
   const data =await getRestaurants()
   console.log('data -->', data)
   setRestroData(data)
   }

return(
    <div>
        <div>
        <Navbar/>
        </div>

        <div className='dash_two'>
                <h1>Food and groceries delivery from <br /> ڪراچي Karachi’s best restaurants and <br /> shops</h1>
                <img src='https://images.deliveryhero.io/image/foodpanda/city-page/refresh-hero-city-pk.png?width=1264' />
            </div>

            <div >
                <h1>All Restaurants</h1>
                <div className='dis'>
                {restroData.map(item =>{
                    return <ResCards data={item} onClick={()=>navigate(`/resdetail/${item.id}`)}/>
                })}
                </div>
            </div>

            <div>
                <Dashboard_text/>
            </div>
            <div>
                <Footer/>
            </div>
            <div>
                <Footer_two/>
            </div>
            <div>
                <Footer_three/>
            </div>

    </div>
    
)
}