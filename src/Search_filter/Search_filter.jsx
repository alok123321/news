import React, { useState } from 'react'
import { Data } from './Data'
import 'Search_filter.css'



const Search_filter = () => {
const [searchVal,setSearchVal] = useState("");

const handlesearchbar =(e)=>{ 
    setSearchVal(e.target.value)
}
    const fatchdata = Data.filter((i)=>{
        if(i.title.toLowerCase() .includes(searchVal.toLowerCase()) || i.category
            .includes(searchVal.toLowerCase()))
        {return i;}
    })

  

   
return (
    <div>
            <div className="Search_filter_container">
                    <input type="text" name="searchtext" id="Search_filter_searchtext" placeholder='search here...' onChange={handlesearchbar} value={searchVal} />
                    <div className="Search_filter_heading">
                            <p>Name</p>
                            <p>Category</p>
                            <p>Images</p>
                    </div>

                    {
                            fatchdata.length > 0 ? fatchdata.map((item, index) => (
                                    <div className="Search_filter_datalist" key={index}>
                                            <p>{item.title}</p>
                                            <p>{item.category}</p>
                                            <img src={item.image} alt="img" />
                                    </div>
                            )) : <div>No results found</div>
                    }
            </div>
            </div>
    
)
}

export default Search_filter