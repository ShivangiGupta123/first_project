import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './product.css'
import {Link} from 'react-router-dom'
function Product() {
    const [get , setGet] =useState([])
    useEffect(()=>{
      
        axios.get('http://localhost:5600/api/v1/getproductdata').then((res)=>{
            console.log(res.data)
            setGet(res.data)

           
        }).catch((err)=>{
            console.log(err)
        })
    
        
    },[])

    return (
        <div>{get.map((item)=>{
            return(
                <div >
                
                <div className ="container-product" >
                 <img src = {item.Image} alt = "headphone"/>
                 <div>
                 <p>category: {item.Category}</p>
                 <p>brand : {item.Brand}</p>
                 <p>price : ₹{item.Price}</p>
                 <p>size : {item.Size}</p>
                 <Link to = {"/Cart"}><button className = 'button2'>Add to Cart</button></Link>
                 
                 </div>
                 
                </div>
                  
               </div>
               )
            })}
        </div>
    )
}

export default Product
