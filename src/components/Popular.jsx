import React from 'react'
import { useNavigate } from 'react-router-dom'

const Popular = ({data}) => {
    const api_key="94fe58ff31b643a988737210aaaa9010"
    const navigate=useNavigate()
    const [movie,setMovie]=useS
    const handelDetails=(data,index)=>{
      
      navigate(`/movies/${index}`)
    

    }
  return (
    <div className='bg-slate-800'>
   <h1 className='font-bold text-2xl text-white  ml-7'>Popular</h1>
    <div className='flex flex-nowrap overflow-x-scroll  w-full mt-5'>
       
    {data.map((data,index)=>(
        
        <img src={`https://image.tmdb.org/t/p/w200${data.poster_path}?api_key=${api_key}`} key={index} className='ml-4 h-[300px] w-[320px] flex' onClick={()=>{handelDetails(data,index)} } alt="" />
    ))}  
   
  </div>
  
</div>
  )
}

export default Popular