
import React from 'react'
import './App.css'
// import News_App from './News_App'
// import Search_filter from './Search_filter/Search_filter'
import Shopping from './Shopping/Shopping'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Product_detail from './Shopping/Product_detail'
import Cart from './Shopping/Cart'

function App() {
  const id=1;

  return (
    <>
      
    {/* <News_App/> */}
    {/* <Search_filter/> */}

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Shopping/>}/>
      <Route path={`/Product_detail/:id`} element={<Product_detail/>}/>
      <Route path='/cart' element={<Cart />}/>
  
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
