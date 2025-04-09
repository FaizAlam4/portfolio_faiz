import React from "react";
import faiz from "./asset/faiz1.jpg";
import EduCert from "./EduCert";

import TypingAnimation from "./TypingAnimation";
const PortBody = () => {
    const textArray = ["Hello there, I am Faiz Alam..."];
    const typingSpeed = 3000; // milliseconds

    return (
        <>
            <section id="hero">
                <div className="container">
                    <div className="hero-content">
                        <TypingAnimation textArray={textArray} typingSpeed={typingSpeed} />
                        <p>Software Development Engineer</p>
                    </div>
                </div>
            </section>

            <section id="about">
                <div class="container">
                    <div class="profile-container">
                        <div className="profile-image">
                            <img src={faiz} alt="Profile" />
                        </div>
                        <div className="profile-content">
                            <h2 style={{ fontSize: "1.8rem" }}>About Me</h2>
                            <p>I'm a Computer Science Engineering graduate and currently working as an SDE I. I'm passionate about coding, problem-solving, and building scalable solutions with clean architecture. With a strong foundation in data structures and algorithms, I constantly strive to learn and adapt to new technologies. I'm proficient in full-stack web development, particularly the MERN stack, and enjoy crafting responsive, user-friendly applications. I'm currently exploring new opportunities that offer greater professional growth, financial stability, and impactful challenges.</p>
                        </div>
                    </div>
                    <br />
                    {/* <hr />
          <br /> */}
                </div>
            </section>

            <EduCert />

            <section style={{ textAlign: "center" }} id="projects">
                <div className="container">
                    <h2 style={{ textDecoration: "underline", fontSize: "1.8rem" }}>Projects</h2>

                    <div className="project" style={{ marginBottom: "20px" }}>
                        <h2 style={{ backgroundColor: "#f8f8f8", borderRadius: "7px", marginBottom: "10px" }}>
                            Todoist
                        </h2>
                        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "10px" }}>
                            <a href="https://todoist-peach.vercel.app/" target="_blank">Vercel</a>
                            <a href="https://github.com/FaizAlam4/Todoist" target="_blank">GitHub</a>
                        </div>
                        <p>
                            Domain: Web Application | Technology: ReactJS, AntUI
                            <ul>
                                <li>Built a todoist like web app</li>
                                <li>Features like adding, check in, archiving, adding/removing favourites</li>
                                <li>Proper responsive for any device</li>
                            </ul>
                        </p>
                    </div>

                    <div className="project" style={{ marginBottom: "20px" }}>
                        <h2 style={{ backgroundColor: "#f8f8f8", borderRadius: "7px", marginBottom: "10px" }}>
                            Trello
                        </h2>
                        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "10px" }}>
                            <a href="https://trello-react-faiz.vercel.app/" target="_blank">Vercel</a>
                            <a href="https://github.com/FaizAlam4/trello-react-faiz" target="_blank">GitHub</a>
                        </div>
                        <p>
                            Domain: Application(Clone) | Technology: React | Library: MUI, Redux Toolkit
                            <ul>
                                <li>Built the Trello clone application using its official APIs</li>
                                <li>It is responsive and optimized with redux</li>
                                <li>Performed CRUD operations</li>
                            </ul>
                        </p>
                    </div>

                    <div className="project" style={{ marginBottom: "20px" }}>
                        <h2 style={{ backgroundColor: "#f8f8f8", borderRadius: "7px", marginBottom: "10px" }}>
                            Country Project
                        </h2>
                        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "10px" }}>
                            <a href="https://countries-vite-project.vercel.app/" target="_blank">Vercel</a>
                            <a href="https://github.com/FaizAlam4/countries-vite-project" target="_blank">GitHub</a>
                        </div>
                        <p>
                            Domain: Web Application | Technology: ReactJS
                            <ul>
                                <li>Built a ReactJS project to display country data and detailed view of each country</li>
                                <li>Used filters and sub filters for many parameters</li>
                                <li>Implemented dark mode with the help of context API</li>
                                <li>Performed CRUD operations</li>
                            </ul>
                        </p>
                    </div>

                    <div className="project" style={{ marginBottom: "20px" }}>
                        <h2 style={{ backgroundColor: "#f8f8f8", borderRadius: "7px", marginBottom: "10px" }}>
                            Easy Banking Landing Page
                        </h2>
                        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "10px" }}>
                            <a href="https://easy-bank-landing-page-ruddy.vercel.app/" target="_blank">Vercel</a>
                            <a href="https://github.com/FaizAlam4/easyBank-landing-page" target="_blank">GitHub</a>
                        </div>
                        <p>
                            Domain: Web Application | Technology: JavaScript
                            <ul>
                                <li>A responsive sleek designed page using pure CSS, HTML (no library used)</li>
                                <li>Responsive Design</li>
                            </ul>
                        </p>
                    </div>

                    <div className="project" style={{ marginBottom: "20px" }}>
                        <h2 style={{ backgroundColor: "#f8f8f8", borderRadius: "7px", marginBottom: "10px" }}>
                            EhSaas - A self-assessment system
                        </h2>
                        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "10px" }}>
                            <a href="https://github.com/FaizAlam4/Angular-Project#readme" target="_blank">GitHub</a>
                        </div>
                        <p>
                            Domain: Web Application | Programming Languages: JavaScript, TypeScript
                            <ul>
                                <li>Constructed an application for students specially to self-assessment.</li>
                                <li>Utilized Angular module and component to create a fast single page application.</li>
                                <li>It is a front-end prototype only made using Angular. Hosted on Github, go through readme</li>
                            </ul>
                        </p>
                    </div>

                    <div className="project" style={{ marginBottom: "20px" }}>
                        <h2 style={{ backgroundColor: "#f8f8f8", borderRadius: "7px", marginBottom: "10px" }}>
                            Pricing Project
                        </h2>
                        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "10px" }}>
                            <a href="https://pricing-project-smoky.vercel.app/" target="_blank">Vercel</a>
                            <a href="https://github.com/FaizAlam4/Pricing_Project" target="_blank">GitHub</a>
                        </div>
                        <p>
                            Domain: Web Application | Technology: JavaScript
                            <ul>
                                <li>Developed a pricing component with options for annual and monthly plans.</li>
                                <li>Implemented using HTML, CSS, and JavaScript for a responsive design.</li>
                                <li>Features include different storage options and user allowances.</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="container cont1" style={{ textAlign: "center", fontSize: "1.1rem", color: "#666" }}>
                    <h2 style={{ textAlign: "center", textDecoration: "underline", fontSize: "1.8rem", color: "black" }}>Contact Me</h2>
                    <br />
                    <p className="mycontact">
                        If you'd like to get in touch, feel free to reach out to me at the details provided below
                        <br />
                        <div className="contacts">
                            <div className="cn">
                                Email : <b> mfaizalam32@gmail.com</b>
                            </div>

                            <div className="cn">
                                Mobile No. : <b>(+91) 7987072308</b>
                            </div>

                            <div className="cn">
                                LinkedIn :{" "}
                                <a href="https://www.linkedin.com/in/faiz-alam-9179b6135/" target={"_blank"}>
                                    {" "}
                                    <b>link</b>
                                </a>
                            </div>
                        </div>
                    </p>
                </div>
            </section>
        </>
    );
};

export default PortBody;
