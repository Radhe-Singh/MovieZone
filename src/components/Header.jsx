import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
const Header = ({data,now}) => {
  const[option,setOption]=useState(true)
  const navigate=useNavigate();
  const handleoption=(e)=>{
   setOption(true);
   const value=e.target.textContent;
   navigate(`/movie/${value}`,{state:{data,now}})
  }
  return (
    <>
    <header className="bg-gray-800 p-4">
    <nav className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="text-white text-2xl font-bold">
        <Link to="/">MovieZone</Link>
      </div>
      <ul className="hidden md:flex space-x-8 text-white">
        <li>
          <Link to="/" className="hover:text-yellow-400 transition" >Home</Link>
        </li>
        <li>
          <Link to="/movies" className="hover:text-yellow-400 transition" onMouseOver={()=>setOption(false)}>Movies</Link>
        </li>
        <li>
          <Link to="/tv" className="hover:text-yellow-400 transition">TV Shows</Link>
        </li>
        <li>
          <Link to="/Booksmark" className="hover:text-yellow-400 transition">BooksMark</Link>
        </li>
      </ul>
      <div className="md:hidden flex items-center">
        {/* Mobile Menu Button */}
        <button className="text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  
  </header>
  {option===false?(
    <div className='w-[150px] h-[150px] bg-slate-900  float-right z-50 mr-32  rounded-xl'>
    <ul className='text-white p-2 justify-center items-center text-xl '>
      <li onClick={handleoption} className='hover:bg-yellow-300 p-1 hover:text-blue-800 rounded-xl'>Popular</li>
      <li onClick={handleoption} className='hover:bg-yellow-300 p-1 hover:text-blue-800 rounded-xl'>Now Trending</li>
      <li onClick={handleoption} className='hover:bg-yellow-300 p-1 hover:text-blue-800 rounded-xl'>Upcomming</li>
      <li onClick={handleoption} className='hover:bg-yellow-300 p-1 hover:text-blue-800 rounded-xl'>Top Rated</li>
    </ul>
    </div>):""}
  </>
  
  )
}

export default Header