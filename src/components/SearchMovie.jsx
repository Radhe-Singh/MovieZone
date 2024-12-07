import React from 'react'

const SearchMovie = ({searchdata}) => {
    const api_key="94fe58ff31b643a988737210aaaa9010"
  return (
    <div className='bg-slate-800'>
   <h1 className='font-bold text-2xl text-white  ml-7'>Your Searching Movie</h1>
    <div className='flex flex-wrap   w-full mt-5'>
       
    {searchdata.map((data,index)=>(
        
        <img src={`https://image.tmdb.org/t/p/w200${data.poster_path}?api_key=${api_key}`} key={index} className='ml-4 mt-2 h-[300px] w-[320px] flex'  alt="" />
    ))}  
   
  </div>
  
</div>
  )
}

export default SearchMovie