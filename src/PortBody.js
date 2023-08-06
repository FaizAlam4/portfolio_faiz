import React from 'react'
import faiz from './asset/faiz.jpeg';
import EduCert from './EduCert';

import TypingAnimation from './TypingAnimation';
const PortBody = () => {

  const textArray = ['Hello there, I am Faiz Alam...'];
  const typingSpeed = 3000; // milliseconds

  return (
    <>
      <section id="hero">
        <div className="container">
          <div className="hero-content">
            <TypingAnimation textArray={textArray} typingSpeed={typingSpeed} />
            <p>Aspiring Computer Science Engineer</p>
          </div>
        </div>
      </section>

      <section id="about">
        <div class="container">
          <div class="profile-container">
            <div class="profile-image">
              <img src={faiz} alt="Profile" />
            </div>
            <div class="profile-content">
              <h2 style={{ "fontSize": "1.8rem" }}>About Me</h2>
              <p>
                A Computer Science Engineering student with a profound affection for coding and problem-solving. I relish the art of tackling intricate challenges and transforming them into elegant solutions. My strong foundation in algorithms and data structures drives my commitment to continuous learning and staying abreast of the latest technologies in the field.
                <br /> <br />
                Beyond this, I possess a love for crafting websites. I have acquired proficiency in both the frontend and backend aspects of website development, and I am currently proficient in the MERN stack. Given the dynamic nature of technology, I strive to maintain maximum flexibility. This motivates me to consistently update and upgrade my skill set—a practice I deem important and crucial in the present era.

                Thank you for providing your text, and I hope this refined version meets your needs!


              </p>

            </div>
          
          </div>
          <br />
          {/* <hr />
          <br /> */}
       
        </div>
      </section>
      
      <EduCert/>

      <section style={{ "textAlign": "center" }} id="projects">
        <div className="container">
          <h2 style={{ "textDecoration": "underline", "fontSize": "1.8rem" }}>Projects</h2>
          <div className="project">
            <h2 style={{ "backgroundColor": "#f8f8f8", "borderRadius": "7px" }}>FitCrux - Fitness Buddy <a href={"https://github.com/FaizAlam4/FitCrux_Full_Fledged#readme"} target={"_blank"}>Readme</a></h2>
            <p>
              Domain: Web Application | MERN stack
              <ul>
                <li> A website for health-conscious people who want to
                  take care of their lifestyle.</li>
                <li>Full-fledged prototype made using React framework and NodeJS.</li>
                <li>
                  Properly hosted on render.com and code is on Github along with
                  a readme file to make you understand</li>
              </ul>
            </p>
          </div>

          <div className="project">
            <h2 style={{ "backgroundColor": "#f8f8f8", "borderRadius": "7px" }}>EhSaas - A self-assessment system <a href={"https://github.com/FaizAlam4/Angular-Project#readme"} target={"_blank"}>Readme</a></h2>
            <p> Domain: Web Application | Programming Languages:
              JavaScript, TypeScript
              <ul>
                <li>Constructed an application for students specially to selfassessment.</li>
                <li>Utilized Angular module and component to create a fast
                  single page application.</li>
                <li>


                  It is a front-end prototype only made using Angular.
                  Hosted on Github, go through readme
                </li>
              </ul>
            </p>


          </div>

          <div className="project">
            <h2 style={{ "backgroundColor": "#f8f8f8", "borderRadius": "7px" }}>Custom Web Scrapper <a href={"https://github.com/FaizAlam4/Web-Scrapper-by-Faiz#readme"} target={"_blank"}>Readme</a></h2>
            <p> Domain: Utility | Programming Languages: Python
              <ul>
                <li>
                  Built a web scraping tool using python
                  package Beautiful Soap to scrape data.
                </li>
                <li>
                  Upgraded code to make the tool customizable.
                </li>
                <li>
                  Created interactive page with tkinter library of python for
                  user interaction.
                </li>
              </ul>
            </p>
          </div>

          <div className="project">
            <h2 style={{ "backgroundColor": "#f8f8f8", "borderRadius": "7px" }}>Histogram Project <a href={"https://github.com/FaizAlam4/TinyTalesProject#readme"} target={"_blank"}>Readme</a></h2>
            <p>  Domain: Application | Programming Languages:JavaScript/JSX
              <ul>

                <li>
                  Built a graph making tool for data
                  representation.
                </li>
                <li>
                  It is a front-end project made using ReactJS only.
                </li>
                <li>
                  Used a random URL to showcase its working
                  hosted on github-pages, with proper readme.
                </li>

              </ul>

            </p>
          </div>

        </div>
      </section>

      <section id="contact">
        <div className="container cont1" style={{ "textAlign": "center", "fontSize": "1.1rem", "color": "#666" }}>
          <h2 style={{ "textAlign": "center", "textDecoration": "underline", "fontSize": "1.8rem", "color": "black" }}>Contact Me</h2>
          <br />
          <p className='mycontact'>If you'd like to get in touch, feel free to reach out to me at the details provided below
            <br />
            <div className='contacts'>
              <div className='cn'>
                Email : <b> faiza232574@gmail.com</b>
              </div>

              <div className='cn'>
                Mobile No. : <b>(+91) 7987072308</b> 
              </div>

              <div className='cn'>
                LinkedIn : <a href="https://www.linkedin.com/in/faiz-alam-9179b6135/" target={"_blank"}> <b>link</b></a>
              </div>
            </div>

          </p>
        </div>
      </section>


    </>
  )
}

export default PortBody
