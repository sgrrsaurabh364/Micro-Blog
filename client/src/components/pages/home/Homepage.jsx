import { useState,useEffect } from "react";
import "./homepage.css"
import Sidebar1 from "../../sidebar/Sidebar1"
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import axios from "axios";
import { useLocation } from "react-router-dom"; 



export default function Homepage() {
const[posts,setPosts]= useState([]);
const {search}=useLocation();


useEffect(()=>{
const fetchposts = async ()=>{
 const res= await axios.get("/posts"+search)
 setPosts(res.data);
}
fetchposts()
},[search])

  return (
    <>
      <Header/>
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar1 />
      </div>
    </>
  );
}
 