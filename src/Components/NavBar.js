// import React from 'react'
// import React, {useState} from 'react'
// import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'

export const NavBar = () => {


  
  
    
    window.addEventListener('scroll', function(){
      const arrowUp = document.getElementById('arrow-up');
      // const body = document.getElementById('body');
      // console.log(body, arrowUp);
      if(window.scrollY >= 300){
        arrowUp.classList.remove("invisible");
        // console.log(window.scrollY);
        // console.log(window.scrollY);
      }else{
        arrowUp.classList.add("invisible");
        // console.log(window.scrollY);
      }
    });
  
  
  // const [nav, setNav] = useState(false);
  const handleHamburgerEffect = () =>{
    const bar1 = document.getElementById('bar1');
    const bar2 = document.getElementById('bar2');
    const bar3 = document.getElementById('bar3');
    const navDoc = document.getElementById('nav-doc');

    bar1.classList.toggle('translate-y-[7px]');
    bar2.classList.toggle('invisible');
    bar3.classList.toggle('-translate-y-[9px]');

    bar1.classList.toggle('rotate-45');
    bar1.classList.toggle('bg-[#ffff00]');
    
    bar3.classList.toggle('-rotate-45');
    bar3.classList.toggle('bg-[#ffff00]');
    // bar3.classList.toggle('-translate-y-4');

    navDoc.classList.toggle('-translate-x-[1000px]')
    
  }

  return (
    <div className='flex justify-between items-center w-full h-16 fixed border border-transparent bg-blue-500 text-white px-4 bottom-0 md:top-0 z-[99999] '>
      <h1 className=' md:px-2 text-2xl md:text-4xl  font-medium'>#Harsh</h1>
      <ul className='px-2 hidden md:flex '>            
          <li className='px-4 py-2 cursor-pointer text-lg hover:scale-125 transition-all duration-200  '>
            <Link to={"home"} smooth duration={500} >Home</Link>
            
          </li>
          <li className='px-4 py-2 cursor-pointer text-lg hover:scale-125 transition-all duration-200  '>
            <Link to={"about"} smooth duration={500} >About</Link>
            </li>
          <li className='px-4 py-2 cursor-pointer text-lg hover:scale-125 transition-all duration-200  '>
            <Link to={"portfolio"} smooth duration={500} >Portfolio</Link>
          </li>
          <li className='pl-4 py-2 cursor-pointer text-lg hover:scale-125 transition-all duration-200  '>
            <Link to={"contact"} smooth duration={500} >Contact</Link>
          </li>
        </ul>



      <div onClick={handleHamburgerEffect} className='md:hidden cursor-pointer w-7'>
        {/* {nav?<FaTimes size={30} />:<FaBars size={30} />}  */}
        {/* nav */}
        <div id='bar1' className="line h-1 my-1 rounded-md bg-white w-full border-2 border-transparent  transition-all duration-300 "></div>
        <div id='bar2' className="line h-1 my-1 rounded-md bg-white w-full border-2 border-transparent "></div>
        <div id='bar3' className="line h-1 my-1 rounded-md bg-white w-full border-2 border-transparent duration-300"></div>
      </div>

      <div id='nav-doc' className='md:hidden h-[136px] docker border-2 text-white absolute w-full right-0 left-0 bottom-16 z-[99999]  px-1 -translate-x-[1000px] transition-all duration-300 bg-[#ff5358] '>

          <ul className='flex justify-center text-base items-center h-full'>
            <li className='mx-1 sm:mx-2 border-2 p-3 '>
              <Link to={"home"} smooth duration={500} >Home</Link>
            </li>
            <li className='mx-1 sm:mx-2 border-2 p-3 '>
              <Link to={"about"} smooth duration={500} >About</Link>
            </li>
            <li className='mx-1 sm:mx-2 border-2 p-3 '>
              <Link to={"portfolio"} smooth duration={500} >Portfolio</Link>
            </li>
            <li className='mx-1 sm:mx-2 border-2 p-3 '>
              <Link to={"contact"} smooth duration={500} >Contact</Link>
            </li>
          </ul>
        
      </div>

      <div  id='arrow-up' className=' scroll-up absolute bottom-20 border-2 border-transparent bg-blue-600 text-white px-4 py-2 right-4 rounded text-lg duration-300 transition-all focus:ring-4 focus:ring-blue-400 '>
          <button>
            <Link to={"home"} smooth duration={500} >
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </Link>
            
          </button>
      </div>

    </div>
  )
}
