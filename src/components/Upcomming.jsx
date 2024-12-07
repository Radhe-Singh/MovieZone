import React from 'react'

const Upcomming = ({upcom}) => {
    const api_key="94fe58ff31b643a988737210aaaa9010"
  return (
    

      <div className='bg-slate-800 mt-3'>
     <h1 className='font-bold text-2xl text-white  ml-7'>upcomming</h1>
      <div className='flex flex-nowrap overflow-x-scroll  w-full mt-5'>
         
      {upcom.length>0?(upcom.map((upcom,index)=>(
          
          <img src={`https://image.tmdb.org/t/p/w200${upcom.poster_path}?api_key=${api_key}`} key={index} className='ml-4 relative h-[300px] w-[320px] flex'  alt="" />
      ))):""}  
      
    </div>
    
  </div>)
  
}

export default Upcomming