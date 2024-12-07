import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
const PopularDetails = () => {
     const api_key="94fe58ff31b643a988737210aaaa9010"
    const location=useLocation();
    const navigate=useNavigate();
    const data=location.state?.data;
  return (
    <div className='bg-slate-800'>
     <div className='flex'>
    <button onClick={()=>navigate("/")} className='bg-blue-800 w-24 text-white p-3 ml-3 hover:bg-yellow-500 rounded-3xl mt-4 font-bold'>Back</button>   
    <h1 className='font-bold text-2xl text-white  ml-7 mt-[20px]'>Popular</h1>
    </div>
     <div className='flex flex-wrap   w-full mt-5'>
        
     {data.map((data,index)=>(
         
         <img src={`https://image.tmdb.org/t/p/w200${data.poster_path}?api_key=${api_key}`} key={index} className='ml-4  mt-4 h-[300px] w-[320px] flex'  alt="" />
     ))}  
    
   </div>
   
 </div>
  )
}

export default PopularDetails