import React from 'react'

const Top = ({topr}) => {
    const api_key="94fe58ff31b643a988737210aaaa9010"
  return (
    <div className='bg-slate-800 mt-3'>
   <h1 className='font-bold text-2xl text-white  ml-7'>Top Rated</h1>
    <div className='flex flex-nowrap overflow-x-scroll  w-full mt-5'>
       
    {topr.map((top,index)=>(
        
        <img src={`https://image.tmdb.org/t/p/w200${top.poster_path}?api_key=${api_key}`} key={index} className='ml-4 h-[300px] w-[320px] flex'  alt="" />
    ))}  
   
  </div>
  
</div>
  )
}

export default Top