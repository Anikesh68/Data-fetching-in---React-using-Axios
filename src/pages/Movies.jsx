import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Movie = () => {
    let [data,setData] = useState([])
    const API = "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";

        const getMovieData = async()=>{
            try{
            const res = await axios.get(API)
            console.log(res);
            setData(res.data.Search);
            }catch(error){
                console.log("kuchh to gadbad hai",error);
                
            }
        }

        
     useEffect(()=>{
        getMovieData()
     },[])
  return (
    <div>
      {
      data.map((ele,idx)=>{
        let {Poster,Title,Type,Year,} =ele;
        return(
            <section key={idx}>
                <img src={Poster}alt="" height="200" />
                <p>Title:{Title}</p>
                <p> Type:{Type}</p>
                <h3>Year:{Year}</h3>
            </section>
        )
        
      })
      }
    </div>
  )
}

export default Movie
