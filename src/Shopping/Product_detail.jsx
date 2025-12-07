import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { items } from './Data'
const Product_detail = () => {
  const {id} = useParams();

  const [product,setproduct]=useState({});
const [relatedproduct,setRelatedproduct]=useState([]);



  useEffect(() => {
    const filterdata = items.filter((items)=>{return items.id==id});
    setproduct(filterdata[0]);
  

  }, [id])
  

  useEffect(() => {
    const filterproduct = items.filter((items)=>{return items.category==product.category});
    setRelatedproduct(filterproduct);
 
  

  }, [product.category])

  return (
    <div>
<Navbar/>


<div className='Cart_shopping_card'>

        <img src={product.imgSrc} alt="" />
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
    <div className="Cart_buttongroup">
        <button className="Cart_buttongroupprice">{product.price}</button>
        <button className="Cart_buttongroupadd"> Add To Cart</button>
    </div>
    </div>
    </div>


    <div style={{display:"flex" , justifyContent:"center", gap:"20px",flexWrap:"wrap"}}>
{
  relatedproduct.map((item,index)=>{
    return (
   
      <div className='shopping_card' key={index} >
        <img src={item.imgSrc} alt="" />
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <div className="buttongroup">
          <button className="buttongroupprice">{item.price}</button>
          <button className="buttongroupadd"> Add To Cart</button>
        </div>
      </div>

    );
  })
      }
            </div>







    </div>
  )
}

export default Product_detail