import React, { useState ,useEffect} from "react";
import Card from "./Card";
import "./Card.css";
import { items } from "./Data";
import Navbar from "./Navbar";
import Cart from "./Cart";
const Shopping = () => {
const [searchvalue,setSearchvalue]=useState("");
const [itemnew,setItemnew]=useState(items);

const [finalcartdata,setFinalcartdata]=useState([])



// console.log(finalcartdata)
const addtocartfun=(itemss)=>{
  setFinalcartdata([...finalcartdata,itemss])
 
}

  const handlesearch = (e)=>{
    setSearchvalue(e.target.value);
  }

  const handleclick =(e)=>{
    setSearchvalue(e.target.value);
  }
  const handleclickall=()=>{
    setSearchvalue("");
  }

  useEffect(()=>{
    const filterdata = items.filter((items)=>{return items.title.toLowerCase(). includes(searchvalue.toLowerCase())})
    setItemnew(filterdata);
  },[searchvalue])
  return (
    <>
   <Navbar handlesearch={handlesearch} handleclick={handleclick} searchvalue={searchvalue} handleclickall={handleclickall} />

    <Card items={itemnew} addtocartfun={addtocartfun}/>
    <Cart finalcartdata={finalcartdata}></Cart>
    </>
  );
};

export default Shopping ;
