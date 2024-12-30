import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Backend_API from '../../Backend_API';
const Home = () => {
   const [ post , setPost] = useState([]);
   const cat = useLocation().search;
   //console.log(location);
   useEffect(()=>{
    const fetchData = async()=>{
      try{
       const res = await axios.get(`${Backend_API}/api/posts${cat}`);
       setPost(res.data);
      }catch(e){
        console.log(e)
      }
    }
    fetchData();
   },[cat])
   const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  return (
    <div className='home'>
    <div className="posts">
    {post.map((post)=>(
        <div className='post' key={post.id}>
        <div className='img'>
        <img src={`./upload/${post.img}`} alt="img"/>
        </div>
        <div className='content'>
        <Link className='link' to={`/post/${post.id}`} >
        <h1>{post.title}</h1></Link>
        <p>{getText(post.desc)}</p>
        <button>Read More</button>
        </div>
        </div>
    ))}
    </div>
    </div>
  )
}

export default Home