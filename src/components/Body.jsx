import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Popular from './Popular'
import Now from './now'
import Upcomming from './Upcomming'
import Top from './Top'
import SearchMovie from './SearchMovie'

const Body = () => {
    const[data,setData]=useState([])//popular movies data
    const[now,setNow]=useState([])//now movies data
    const[upcom,setUpcomming]=useState([]);//upcomming movies data
    const[topr,setTop]=useState([]);//top Rated movie
    const[text,setText]=useState()//search movie name

    const[searchdata,setSearchdata]=useState([]);
    const[searccond,setSearcond]=useState(true);
    const[loading,setLoading]=useState(true)// use for know data fetch yes or non
    const api_key="94fe58ff31b643a988737210aaaa9010"
    const fundata=async()=>{
        const response=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
        const data=await response.json();
        setData(data.results)
    }
    const nowdata=async()=>{
        const response=await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`)
        const data=await response.json();
        setNow(data.results);
        setLoading(false);
    }
  const upcomming=async()=>{
      const response=await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`)
      const data=await response.json();
      setUpcomming(data.results);
      setLoading(false);
  }
  const top=async()=>{
    const response=await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`)
    const data=await response.json();
    setTop(data.results);
    setLoading(false);
}
const Search=async()=>{
  const response=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${text}`)
  const data=await response.json();
  setSearchdata(data.results);
  setLoading(false);
}


const handleSearch=(e)=>{
    e.preventDefault();
    const value=e.target.value;
    setText(value);
    Search();
    setSearcond(true);

}


    useEffect(()=>{fundata();nowdata();upcomming(); top()},[])
  return (<>
  <Header data={data} now={now}/>
<div className="bg-[url('https://fruitanews.org/wp-content/uploads/2017/09/Movies.jpg')] relative h-[200px] flex justify-center items-center ">
    <input type="search" name="movie" id=""  placeholder='search here' className='w-[500px] p-3 text-white text-xl bg-slate-600 shadow-inherit rounded-2xl ' onChange={handleSearch}/>
  </div>
  {searccond===false?(<SearchMovie searchdata={searchdata}/>):(<>
    <Popular data={data}/>
   <Now now={now} loading={loading}/>
   <Upcomming upcom={upcom}/>
   <Top topr={topr}/></>)} 
  </>
      
  )
}

export default Body