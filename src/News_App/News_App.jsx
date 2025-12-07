import React, { useEffect, useState } from "react";
import axios from "axios";
import 'News_App.css'
// acfef6613e6247bb9938024351eeb86b

// "https://newsapi.org/v2/everything?q=bitcoin&apiKey=acfef6613e6247bb9938024351eeb86b"

const News_App = () => {
  const [newsdata, setNewsdata] = useState("");

  const [valuesearchs,setValuesearchs]=useState("All");
  useEffect(() => {
    fatchdata();
  }, [valuesearchs]);

  const fatchdata = async () => {
    await axios
      .get(
        `https://newsapi.org/v2/everything?q=${valuesearchs}&apiKey=acfef6613e6247bb9938024351eeb86b`
      )
      .then((response) => {
        setNewsdata(response.data.articles);
      });
  };




  const getvaluesearch =(e)=>{
    setValuesearchs(e.target.value)
  }

  const getbuttondata = (e)=>{
    setValuesearchs(e.target.value)
  }



  
  return (
    <div>
      <nav className="navbar">
        <div className="titles">News Hub</div>
        <div className="searchbar">
          <input
            type="text"
            name="search"
            placeholder="Search Here.."
            id="searchtext"
            onChange={getvaluesearch}
            value={valuesearchs}
          />
          {/* <button type="submit" onClick={fatchdata}>Search</button> */}
        </div>
      </nav>

      <h1 className="htitle">Stay Update With TrendyNews!</h1>
      <div className="buttongroup">
        <button type="submit" onClick={getbuttondata} value="Sports">
          Sports
        </button>
        <button type="submit" onClick={getbuttondata} value="Politics">
          Politics
        </button>
        <button type="submit" onClick={getbuttondata} value="Health">
          Health
        </button>
        <button type="submit" onClick={getbuttondata} value="Entertainment">
          Entertainment
        </button>
        <button type="submit" onClick={getbuttondata} value="Technology">
          Technology
        </button>
      </div>

      <div className="cardmain">
        {newsdata 
          ? newsdata.map((item, index) => (

            item.urlToImage ?
              <div className="cardcontainer" key={index}>
                <img src={item.urlToImage}
                  alt=""
                />
                <p className="title">{item.title}</p>
                <p className="des">{item.description.slice(0, 150)}</p>
                <button ><a href={item.url} target="_blank">Read More</a></button>
              </div>
              : null
            ))
          : "loading..."}
       
      </div>
    </div>
  );
};

export default News_App;
