import React from 'react'
import aboutImage from '../Assets/harsh.jpg'
import myFile from '../Assets/Resume_HarshNileshDesai.pdf'

export const About = () => {



    
    const handleSkills = () =>{
      const skillsTab = document.getElementById('skills-tab');
    const experienceTab = document.getElementById('experience-tab');
    const educationTab = document.getElementById('education-tab');
    const skillsContent = document.getElementById('skills');
    const educationContent = document.getElementById('education');
    const experienceContent = document.getElementById('experience');


      skillsTab.classList.add('border-b-blue-600');
      skillsContent.classList.remove('hidden');

      experienceTab.classList.remove('border-b-blue-600');
      experienceContent.classList.add('hidden');
      educationTab.classList.remove('border-b-blue-600');
      educationContent.classList.add('hidden');
    }
    const handleExperience = () =>{

      const skillsTab = document.getElementById('skills-tab');
      const experienceTab = document.getElementById('experience-tab');
      const educationTab = document.getElementById('education-tab');
      const skillsContent = document.getElementById('skills');
      const educationContent = document.getElementById('education');
      const experienceContent = document.getElementById('experience');


      skillsTab.classList.remove('border-b-blue-600');
      skillsContent.classList.add('hidden');

      experienceTab.classList.add('border-b-blue-600');
      experienceContent.classList.remove('hidden');
      experienceContent.classList.add('block');

      educationTab.classList.remove('border-b-blue-600');
      educationContent.classList.add('hidden');
    }
    const handleEducation = () =>{

      const skillsTab = document.getElementById('skills-tab');
      const experienceTab = document.getElementById('experience-tab');
      const educationTab = document.getElementById('education-tab');
      const skillsContent = document.getElementById('skills');
      const experienceContent = document.getElementById('experience');
      const educationContent = document.getElementById('education');




      skillsTab.classList.remove('border-b-blue-600');
      skillsContent.classList.add('hidden');

      experienceTab.classList.remove('border-b-blue-600');
      experienceContent.classList.add('hidden');

      educationTab.classList.add('border-b-blue-600');
      educationContent.classList.remove('hidden');
    }


  return (
    <div name='about' className=''>
     


        {/* <!-- About --> */}
      <div className="about py-20 " id="about">
        <div className="container mx-auto">
        <h2 className="text-3xl font-semibold my-6 text-center ">About Me </h2>
          <div className="row flex flex-col md:flex-row justify-between items-center  ">
            <div className="left h-1/3  flex  justify-center ">
              <img src={aboutImage} className="w-1/3 md:w-2/3 border-2 border-blue-500 rounded-full" alt="" />
            </div>
            <div className="right w-[97%] mx-8 xsm:mx-4 md:mx-2 ">
              
              <p className="text-justify text-base py-4">
                I am currently pursuing <span className='font-bold'>B. E</span> from K.D.K College of Engineering in <span className='font-bold'>Information Technology</span> stream. My hometown is Nagpur. I have completed my schooling from Central India Public School, Nagpur and I did my 12th from Bhavan's B.P Vidhya Mandir, Nagpur in Computer Science branch.
                <br /><br />
                Coming to my hobbies, I like to playing cricket, watching T.V. and Internet surfing.
                <br /><br />
                I want to be a <span className='font-bold'>Full Stack Developer</span>
                <br /><br />
                My strength is hard worker as well as smart worker and a quick learner. I am always given my 100%.
                <br /><br />
                I am self-motivated, and disciplined soul. I am always been to up-skill myself by learning new things whenever I get a chance.
                </p>
              <div className="my-4">
                <div className="tab-titles flex md:justify-start justify-center">
                  <p className="w-1/3 flex justify-center tab-links border-4 border-transparent rounded-md border-b-blue-600 active-link  md:mr-12 text-lg cursor-pointer text-red-500 font-bold  "
                    onClick={handleSkills} id="skills-tab">Skills</p>
                  <p className="w-1/3 flex justify-center tab-links  md:mr-12 text-lg cursor-pointer border-4 border-transparent rounded-md text-red-500 font-bold" onClick={handleEducation} id="education-tab">Education</p>
                  <p className="w-1/3 flex justify-center tab-links  md:mr-12 text-lg cursor-pointer border-4 border-transparent rounded-md text-red-500 font-bold"
                    onClick={handleExperience} id="experience-tab">Experience</p>
                </div>
                <div className="tab-contents my-4 min-h-[252px]">
                  <div className=" skills-content " id="skills">
                    <ul id="skills-list">
                      <li className="text-red-600 my-2">
                        <span>HTML</span>
                        <div className="flex items-center w-full h-4 rounded-md  bg-slate-600">
                          <div className="h-full w-[87%] rounded-md bg-blue-500"></div>
                          <span className="text-white">87%</span>
                        </div>
                      </li>
                      <li className="text-red-600 my-2">
                        <span>CSS</span>
                        <div className="flex items-center w-full h-4 rounded-md  bg-slate-600">
                          <div className="h-full w-[61%] rounded-md bg-blue-500"></div>
                          <span className="text-white">61%</span>
                        </div>
                      </li>
                      <li className="text-red-600 my-2">
                        <span>JavaScript</span>
                        <div className="flex items-center w-full h-4 rounded-md  bg-slate-600">
                          <div className="h-full w-[75%] rounded-md bg-blue-500"></div>
                          <span className="text-white">75%</span>
                        </div>
                      </li>
                      <li className="text-red-600 my-2">
                        <span>C</span>
                        <div className="flex items-center w-full h-4 rounded-md  bg-slate-600">
                          <div className="h-full w-[89%] rounded-md bg-blue-500"></div>
                          <span className="text-white">89%</span>
                        </div>
                      </li>
                      <li className="text-red-600 my-2">
                        <span>Java(Core)</span>
                        <div className="flex items-center w-full h-4 rounded-md  bg-slate-600">
                          <div className="h-full w-[89%] rounded-md bg-blue-500"></div>
                          <span className="text-white">87%</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="hidden education-content" id="education">
                    <table className='border-2 border-red-200 w-full'>
                      <thead>
                        <tr className='text-center border'>
                          <th className='border-2 text-red-500 border-blue-600'>Sr.No</th>
                          <th className='border-2 text-red-500 border-blue-600'>Qualification</th>
                          <th className='border-2 text-red-500 border-blue-600'>Result</th>
                          <th className='border-2 text-red-500 border-blue-600'>Year</th>
                          <th className='border-2 text-red-500 border-blue-600'>Board</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className='text-center'>
                          <td className='border-2 border-blue-300'>1.</td>
                          <td className='border-2 border-blue-300'>10th</td>
                          <td className='border-2 border-blue-300'>85.60%</td>
                          <td className='border-2 border-blue-300'>2017</td>
                          <td className='border-2 border-blue-300'>C.B.S.E</td>
                        </tr>
                        <tr className='text-center'>
                          <td className='border-2 border-blue-300'>2.</td>
                          <td className='border-2 border-blue-300'>12th</td>
                          <td className='border-2 border-blue-300'>84.00%</td>
                          <td className='border-2 border-blue-300'>2019</td>
                          <td className='border-2 border-blue-300'>C.B.S.E</td>
                        </tr>
                      </tbody>
                    </table>


                    
                  </div>
                  <div className="hidden experience-content" id="experience">
                    Experience
                  </div>
                </div>
              </div>
              <button
                className="px-3 sm:px-4 py-3 border border-transparent bg-blue-600 text-white font-medium rounded-md hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ">
                  <a href={myFile} download>
                    Download CV
                  </a>
                 </button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
