import React from 'react'
import { Link } from "react-router-dom";
const Navbar = ({handlesearch,handleclick,searchvalue,handleclickall}) => {
  return (
    <>
      <div className="Shopping_navbar">
     <Link to="/" className='Linkstyle'> <div className="Shopping_logo">E-Cart</div></Link> 
       <div className="Shopping_searchbar">
           <input type="text" name="search " value={searchvalue} id="Shopping_search" placeholder='Search Products' onChange={handlesearch} />
       </div>
       <Link to="/cart" className='Linkstyle'>   <div className="Shopping_cart">Cart</div></Link> 
   </div>
   <div className="Shopping_filterby">
       <button value="No Filter"  type="submit" onClick={handleclickall}>No Filter</button>
       <button value="Xiaomi"  type="submit" onClick={handleclick}>Xiaomi</button>
       <button value="iPhone" type="submit"  onClick={handleclick}>iPhone</button>
       <button value="Lenovo"  type="submit" onClick={handleclick}>Lenovo</button>
       {/* <p value="">{">=29999"}</p>
       <p value="">{">=49999"}</p>
       <p value="">{">=69999"}</p>
       <p value="">{">=89999"}</p> */}
   </div>
</>
  )
}

export default Navbar