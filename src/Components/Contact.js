import React from 'react'

export const Contact = () => {

  // let url = "https://script.google.com/macros/s/AKfycbz38tN5lwQlzar2ERB6QgE0BjUolx5U1mXNbhBI9uqnYHzIaKgGPNS1MADY_ht8qyc/exec";

  let form = document.getElementById("formId");
  // // let submit = document.querySelector(".submit");
  // // let message = document.querySelector(".submit");
  const handleSubmit = () =>{
    form.value = "";
  }
  // const handleForm = (e)=>{
  //   e.preventDefault();
  //   // submit.va
  //   fetch(url, {method:"POST", body:new FormData((form).get(0))}).then(res=>res.text()).then(data=>{
  //     console.log(data);
  //   })
  //   .catch(err=>{
  //     console.log(err);
  //   })
  //   // form.reset();
  // }

  return (
    <>

{/* <!-- Contact --> */}
      <div name='contact' className="contact py-20" id="contact">
        <h2 className="text-3xl font-semibold my-6 text-center ">Contact Me</h2>
        <div
          className="flex  relative justify-center items-center min-h-scree n bg-[#112d42] before:contents-[''] before:absolute before:top-0 before:left-0 before:w-1/2 before:h-full before:bg-[#03a9f4] ">
          <div className="contact-container relative min-h-[550px] pb-12 flex flex-col items-center md:flex-row z-[1000] ">
            <div
              className="contact-info relative h-fit top-10 w-[76vw] md:w-96 bg-[#0f3959]  md:right-[14rem] lg:right-96 z-10 py-8 px-3 md:p-10 flex flex-col justify-between text-white ">
              <div>
                <h3 className="text-2xl font-semibold">Contact Info</h3>
                <ul className="info relative my-5 text-slate-300">
                  <li className="relative flex my-5 cursor-pointer items-center hover:text-slate-100">
                    <i className="fa-solid fa-location-dot text-4xl mx-2"></i>
                    <p className="mx-2">
                      E-6/32, New Vyankatesh nagar society, K.D.K College road, Nandanvan, Nagpur.
                    </p>
                  </li>
                  <li className="relative flex my-5 cursor-pointer items-center hover:text-slate-100">
                    <i className="fa-solid fa-phone text-4xl mx-2"></i>
                    <p className="mx-2">+91 9322585046</p>
                  </li>
                  <li className="relative flex my-5 cursor-pointer items-center hover:text-slate-100">
                    <i className="fa-regular fa-envelope text-4xl mx-2"></i>
                    <p className="mx-2">desaiharsh183@gmail.com</p>
                  </li>
                </ul>
                <ul className="social-media flex justify-center items-center space-x-4">
                  <li className="py-5 h-[50px]"><a href="/"><i
                        className="fa-brands fa-facebook-f text-xl px-3 py-1 text-blue-600 hover:text-blue-500 "></i></a>
                  </li>
                  <li className="py-5 h-[50px]"><a href="/"><i
                        className="fa-brands fa-whatsapp text-xl px-2 py-1 text-green-600 hover:text-green-500"></i></a>
                  </li>
                  <li className="py-5 h-[50px] "><a href="/"><i
                        className="fa-brands fa-instagram text-xl px-2 py-1 text-red-600 hover:text-red-300"></i></a></li>
                  <li className="py-5 h-[50px] hover:text-slate-500"><a href="/"><i
                        className="fa-brands fa-github text-xl px-2 py-1 "></i></a></li>
                </ul>
              </div>
            </div>
            <div
              className="contact-form bg-white md:pl-[79px] py-5  md:py-[20px] px-2 md:px-[50px] top-6 md:h-[559p x] lg:-left-2 h-[87%]  w-[87vw] md:left-[6rem] md:w-[56vw] relative md:absolute  ">
              <h3 className="text-[#0f3959] text-xl font-medium mb-2 ">Send a message</h3>
              <div className="form-box relative  ">
                <form id='formId'  className="form flex flex-col justify-between " action='https://getform.io/f/1c74cb2f-a3e7-4b92-98d2-84eb982f13f3' method='POST'>
                  <div className="input-box relative mb-8 w-full  ">
                    <input type="text" name="name" id="name"
                      className="border w-[95%] p-2  text-[#333] outline-orange-300  " placeholder="Enter your name"
                      required />
                  </div>
                  <div className="input-box relative mb-8 w-full ">
                    <input type="email" name="email" id="email"
                      className="border  w-[95%] p-2 text-[#333] outline-orange-300" placeholder="Enter your email"
                      required />

                  </div>
                  <div className="input-box relative mb-8 w-full">
                    <textarea name="message" rows="5" id="message"
                      className="border w-[95%] p-2 text-[#333] outline-orange-300 "
                      placeholder="Enter your message" required></textarea>

                  </div>
                  <div className="input-box  mb-8 w-full">
                    <button onClick={handleSubmit} className="submit px-4 p-2 bg-orange-500 text-white font-semibold rounded-md focus:ring-4 focus:ring-orange-300">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>



      


    </>
  )
}
