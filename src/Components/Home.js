import React from 'react'
import { Link } from 'react-scroll'
import myImage from '../Assets/myImage2s.png'
// import myImage1 from '../Assets/harsh.jpg'
import myFile from '../Assets/Resume - HarshNileshDesai.pdf'
// import {FiDownload} from 'react-icons/md'

import Typed from "typed.js";
import { useEffect, useRef } from "react";

export const Home = () => {


    

    // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Harsh Nilesh Desai"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 1200,
      loop: true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
    
  return (
    <div name='home' className='pt-12 md:pt-20 h-[92vh] w-full'>
        
        <div className='h-[95%] mx-2 flex flex-col-reverse md:flex-row justify-evenly gap-4 '>
            <div className="left w-[100%] md:w-1/2 flex justify-center items-center flex-col-reverse md:flex-row md:border-r-2 md:border-r-blue-500  ">
                <div className='media-icons  w-[100%] md:w-[20%] flex md:flex-col items-center justify-evenly '>
                    <div className='px-1 w-12 flex justify-center items-center h-12'>
                        <a href="https://www.facebook.com/profile.php?id=100024395020922" target={"_blank"} rel="noreferrer">
                            <i className="fa-brands fa-facebook cursor-pointer text-lg px-1  text-blue-500 hover:scale-150 border border-transparent hover:bg-blue-500 hover:text-white hover:rounded-full  transition-all"></i>
                        </a>
                    </div>
                    <div className='px-1 w-12 flex justify-center items-center h-12'>
                        <a href="https://www.instagram.com/harshdesai889/" rel="noreferrer" target={"_blank"}>
                            <i className="fa-brands fa-instagram cursor-pointer text-lg px-[6px]  text-red-500 hover:scale-150 border border-transparent hover:bg-red-500 hover:text-white hover:rounded-full transition-all"></i>
                        </a>
                    </div>
                    <div className='px-1 w-12 flex justify-center items-center h-12'>
                        <a href="https://wa.me/919322585046" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-whatsapp cursor-pointer text-lg px-[6px]  text-green-500 hover:scale-150 border border-transparent hover:bg-green-500 hover:rounded-full hover:text-white transition-all"></i>
                        </a>
                    </div>
                    <div className='px-1 w-12 flex justify-center items-center h-12'>
                        <a href="https://github.com/desaiHarsh08" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github cursor-pointer text-lg px-[6px] hover:scale-150 border border-transparent hover:bg-black hover:rounded-full hover:text-white transition-all"></i>
                        </a>
                    </div>
                </div>
                <div className="intro flex flex-col justify-evenly w-[100%] md:w-[70%] md:h-[70%] ">
                    <div className='space-y-6'>
                        <h2 className='text-xl sm:text-2xl font-medium my-3 text-center ' >Hi, There 🙋‍♂️</h2>
                        <h2 className='text-2xl sm:text-3xl font-medium my-3 text-center text-red-600 '>
                            I'm 
                            <span className='ml-4 text-blue-600' ref={el}></span>
                            
                        </h2>
                        <p className='text-center'>
                            Currently, I love to work on web applications using technologies like React JS and Tailwind CSS. Check out my some of the <Link to={'portfolio'} smooth duration={500} className='text-blue-700 font-medium underline underline-offset-2 cursor-pointer ' >work</Link>.

                            </p>
                    </div>
                    <div className="btns mt-8 my-5 flex justify-center ml-2">
                        <button  className=' px-4 py-2 bg-blue-600 text-white font-semibold text-[1rem] sm:text-lg rounded-md focus:ring-4 focus:ring-blue-300 mr-4 hover:bg-blue-700 '>
                            <a href={myFile} download>
                            <span className='mx-1'>Download CV</span>
                            <i className="fa-solid fa-download"></i>
                            </a>
                        </button>
                        <button className=' px-4 py-2 bg-orange-500 text-white font-semibold text-[1rem] sm:text-lg rounded-md focus:ring-4 focus:ring-orange-300 mr-4 hover:bg-orange-600 '>
                            <Link to={"contact"} smooth duration={500} >
                                Contact
                                <i className="fa-solid fa-phone-flip pl-2"></i>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="right md:w-1/2 flex justify-center items-center ">
                <img src={myImage} className='w-[40%] sm:w-[60%] border-2 border-blue-500  rounded-full ' alt="myProfileImage" />
            </div>
        </div>

    </div>
  )
  
}
