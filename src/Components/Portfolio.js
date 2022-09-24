import React from 'react'
// import msClonePhone from '../Assets/ms-clone-phone.png'
// import proj1 from '../Assets/proj-1.png'
// import proj2 from '../Assets/proj-2.jpg'

// import{Swiper, SwiperSlide} from 'swiper/react';
// import "swiper/swiper.b"




export const Portfolio = () => {






  return (
    <div className='portfolio mt-24'>
      



      {/* <!-- Portfolio --> */}
      <div className="portfolio px-2" id="portfolio">
        <h2 className="text-3xl font-semibold my-6 text-center ">Portfolio</h2>
        <div className="portfolio-container container mx-auto py-10">



        <div className="card  py-4 flex flex-col sm:flex-row px-2 sm:px-10  ">
                  <div className="left sm:w-1/2  flex justify-center">
                    <img src="https://scontent.fnag6-1.fna.fbcdn.net/v/t39.30808-6/308626449_995356911287467_7022146612426627937_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=_WJUBOURPgIAX9Az2in&_nc_ht=scontent.fnag6-1.fna&oh=00_AT-2t9B7NGehocTcukncoJ9z-8LZIwKQjKfGNuRYjc9zCQ&oe=6334C0CC" className="h-[235px]" alt="project-1" />
                  </div>
                  <div className="right px-2 ">
                    <h3 className="text-xl font-medium my-4 text-center sm:text-left">Microsoft Clone</h3>
                    <p className="mt-8 my-4 text-center sm:text-left">Microsoft's home page cloned using HTML + CSS(Tailwind
                      CSS) + JavaScript</p>
                    <div className="btns sm:block justify-center flex">
                      <a href="https://github.com/desaiHarsh08/ms-clone.github.io" target="_blank" rel="noreferrer"
                        className="px-2  sm:px-4 py-2 border-2 border-transparent bg-slate-700 rounded-sm text-stone-200 hover:text-white hover:bg-slate-900 focus:ring-4 focus:ring-slate-400 text-xs sm:text-base my-3 mx-2">
                        <i className="fa-brands fa-github mr-1"></i>
                        Github - Source Code
                      </a>
                      <a href="https://desaiharsh08.github.io/ms-clone.github.io/" target="_blank" rel="noreferrer"
                        className="px-4 py-2 border border-transparent bg-red-600 rounded-sm hover:bg-red-800 text-white blo ck my-3 sm:inline-block w-fit text-xs sm:text-base ">Live
                        demo</a>
                    </div>
                  </div>
                </div>





                <div className="card mt-10 py-4  flex flex-col sm:flex-row px-2 sm:px-10">
                  <div className="left sm:w-1/2 flex justify-center">
                    <img src="https://scontent.fnag6-2.fna.fbcdn.net/v/t39.30808-6/308804022_995356874620804_5179584783258419387_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=qKd8IRxakn0AX9iHWmX&_nc_ht=scontent.fnag6-2.fna&oh=00_AT_vCsd8jozxnUa0ZpZfWr1Mmn5QykTaU9L_dPs5fu_SAg&oe=6334D935" className="h-[235px]" alt="project-1" />
                  </div>
                  <div className="right px-2 ">
                    <h3 className="text-xl text-center font-medium my-4">Tic-Tac-Toe</h3>
                    <p className="mt-8 my-4 text-center py-4 ">Two player game using Java</p>
                    <a href="/" rel="noreferrer"
                      className="px-4 py-2 border border-transparent bg-slate-700 rounded-sm text-stone-200 hover:bg-slate-900 focus:ring-4 focus:ring-slate-400 sm:mr-2 block my-3 sm:inline-block w-fit m-auto text-xs sm:text-base">
                      <i className="fa-brands fa-github mr-1"></i>
                      Github - Source Code
                    </a>
                  </div>
                </div>
        













          {/* <!-- Swiper -->
          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide cursor-pointer">
                <div className="card  py-4 flex flex-col sm:flex-row px-2 sm:px-10  ">
                  <div className="left sm:w-1/2  flex justify-center">
                    <img src={proj1} className="h-[235px]" alt="project-1" />
                  </div>
                  <div className="right px-2 ">
                    <h3 className="text-xl font-medium my-4 text-center sm:text-left">Microsoft Clone</h3>
                    <p className="mt-8 my-4 text-center sm:text-left">Microsoft's home page cloned using HTML + CSS(Tailwind
                      CSS) + JavaScript</p>
                    <div className="btns sm:block justify-center flex">
                      <a href="https://github.com/desaiHarsh08/ms-clone.github.io" target="_blank"
                        className="px-2  sm:px-4 py-2 border-2 border-transparent bg-slate-700 rounded-sm text-stone-200 hover:text-white hover:bg-slate-900 focus:ring-4 focus:ring-slate-400 text-xs sm:text-base my-3 mx-2">
                        <i className="fa-brands fa-github "></i>
                        Github - Source Code
                      </a>
                      <a href="https://desaiharsh08.github.io/ms-clone.github.io/" target="_blank"
                        className="px-4 py-2 border border-transparent bg-red-600 rounded-sm hover:bg-red-800 text-white blo ck my-3 sm:inline-block w-fit text-xs sm:text-base ">Live
                        demo</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide cursor-pointer">
                <div className="card  py-4  flex flex-col sm:flex-row px-2 sm:px-10">
                  <div className="left sm:w-1/2 flex justify-center">
                    <img src={proj2} className="h-[235px]" alt="project-1" />
                  </div>
                  <div className="right px-2 ">
                    <h3 className="text-xl text-center font-medium my-4">Tic-Tac-Toe</h3>
                    <p className="mt-8 my-4 text-center py-4 ">Two player game using Java</p>
                    <a href="https://github.com/desaiHarsh08/ms-clone.github.io"
                      className="px-4 py-2 border border-transparent bg-slate-700 rounded-sm text-stone-200 hover:bg-slate-900 focus:ring-4 focus:ring-slate-400 sm:mr-2 block my-3 sm:inline-block w-fit m-auto text-xs sm:text-base">
                      <i className="fa-brands fa-github"></i>
                      Github - Source Code
                    </a>
                  </div>
                </div>
              </div>

            </div>
            <div className="swiper-button-next text-orange-400"></div>
            <div className="swiper-button-prev text-orange-400"></div>
          </div> */}
        </div>
      </div>



      

    </div>
  )
}
