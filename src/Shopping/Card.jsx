import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Card = ({items ,addtocartfun}) => {

  return (
<div className="card_main">
   {
    items 
    ?
    items.map((ite)=>(
        <Link to={`/Product_detail/${ite.id}`} className='shopping_card' key={ite.id}>
        <img src={ite.imgSrc} alt="" />
        <h1>{ite.title}</h1>
        <p>{ite.description}</p>
    <div className="buttongroup">
        <button className="buttongroupprice">{ite.price}</button>
        <button className="buttongroupadd" onClick={()=>{addtocartfun(ite)}}> Add To Cart</button>
    </div>
    </Link>
      )) : "loading...."}  
      </div>
  )
}

export default Card