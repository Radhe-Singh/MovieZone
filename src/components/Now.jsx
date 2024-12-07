import React from 'react'

const Now = ({now}) => {
    const api_key="94fe58ff31b643a988737210aaaa9010"
  return (
    

      <div className='bg-slate-800 mt-3'>
     <h1 className='font-bold text-2xl text-white  ml-7'>Now Playing</h1>
      <div className='flex flex-nowrap overflow-x-scroll  w-full mt-5'>
         
      {now.length>0?(now.map((now,index)=>(
          
          <img src={`https://image.tmdb.org/t/p/w200${now.poster_path}?api_key=${api_key}`} key={index} className='ml-4 relative h-[300px] w-[320px] flex'  alt="" />
      ))):""}  
      
    </div>
    
  </div>)
  
}

export default Now