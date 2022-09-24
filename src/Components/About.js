import React from 'react'
// import aboutImage from '../Assets/harsh1.png'
// import myFile from '../Assets/TestFileDownload.docx'

export const About = () => {


    // const tabLinks = document.getElementsByClassName('tab-links')
    // const tabLinks = document.getElementsByClassName('tab-contents')


    // function openTab(tab) {
    //   // console.log(tabLinks);

    //   // To remove underline: -
    //   for (var tabLink of tabLinks) {
    //     tabLink.classList.remove('border-b-blue-600')
    //   }

    //   // To clear tab-content: -
    //   var contentNames = ['skills', 'experience', 'education'];
    //   for (var content of contentNames) {
    //     // console.log(document.getElementById(content));
    //     document.getElementById(content).classList.add('hidden');
    //   }

    //   // To display specific content: -
    //   document.getElementById(tab + '-tab').classList.add('border-b-blue-600');
    //   document.getElementById(tab).classList.toggle('hidden');
    // }

    
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
      <div className="about py-20" id="about">
        <div className="container mx-auto">
        <h2 className="text-3xl font-semibold my-6 text-center ">About Me </h2>
          <div className="row flex flex-col md:flex-row justify-between items-center  ">
            <div className="left h-1/3  flex  justify-center ">
              <img src="https://scontent.fnag6-1.fna.fbcdn.net/v/t39.30808-6/308399879_992442754912216_7758675848761638087_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vJZnroFEqjoAX8ZBAAe&_nc_ht=scontent.fnag6-1.fna&oh=00_AT_YpYH0Q9lhhaOD9oDhJv8M3eUMOmDkL9e0FEF9UfWPug&oe=63342F3A" className="w-1/3 md:w-2/3 border-2 border-blue-500 rounded-full" alt="" />
            </div>
            <div className="right w-[97%] mx-8 xsm:mx-4 md:mx-2 ">
              
              <p className="text-justify text-base py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
                eaque veritatis, esse obcaecati dolor
                ad autem officiis sint! Voluptas quasi alias nisi reprehenderit!</p>
              <div className="my-4">
                <div className="tab-titles flex md:justify-start justify-center">
                  <p className="tab-links border-2 border-transparent rounded-sm border-b-blue-600 active-link mx-7 md:mr-12 text-lg cursor-pointer  "
                    onClick={handleSkills} id="skills-tab">Skills</p>
                  <p className="tab-links mx-7 md:mr-12 text-lg cursor-pointer border-2 border-transparent rounded-sm"
                    onClick={handleExperience} id="experience-tab">Experience</p>
                  <p className="tab-links mx-7 md:mr-12 text-lg cursor-pointer border-2 border-transparent rounded-sm" onClick={handleEducation} id="education-tab">Education</p>
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
                  <div className="hidden experience-content" id="experience">
                    Experience
                  </div>
                  <div className="hidden education-content" id="education">
                    Education
                  </div>
                </div>
              </div>
              <button
                className="px-3 sm:px-4 py-3 border border-transparent bg-blue-600 text-white font-medium rounded-md hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ">
                  <a href={require('../Assets/TestFileDownload.docx')} download>
                    Download
                  </a>
                CV</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
