import React from "react";
import faiz from "./asset/faiz1.jpg";
import EduCert from "./EduCert";
import Experience from "./Experience";
import Projects from "./Projects";
import TypingAnimation from "./TypingAnimation";

const PortBody = () => {
    const textArray = ["Faiz Alam", "A Full-Stack Developer", "Problem Solver"];
    const typingSpeed = 2000;

    return (
        <>
            {/* Hero Section */}
            <section id="hero">
                <div className="container">
                    <div className="hero-content">
                        <TypingAnimation textArray={textArray} typingSpeed={typingSpeed} />
                        <p style={{ fontSize: '20px', color: '#64748b', marginTop: '15px' }}>
                            Software Development Engineer | MERN Stack Developer
                        </p>
                        <p style={{ fontSize: '14px', color: '#94a3b8', marginTop: '10px', maxWidth: '600px', margin: '10px auto' }}>
                            Crafting beautiful, scalable, and user-centric web solutions with passion for clean code and exceptional design.
                        </p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about">
                <div className="container">
                    <div className="profile-container">
                        <div className="profile-image">
                            <img src={faiz} alt="Faiz Alam" />
                        </div>
                        <div className="profile-content">
                            <h2 style={{
                              fontSize: '36px',
                              fontWeight: '700',
                              marginBottom: '20px',
                              background: 'linear-gradient(135deg, #6366f1, #ec4899)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text'
                            }}>About Me</h2>
                            <p>
                                I'm a passionate <strong>Computer Science Engineering graduate</strong> from Lovely Professional University (CGPA: 9.05) 
                                and currently working as an <strong>SDE I</strong>. My journey in tech has been driven by a deep love for 
                                problem-solving, clean architecture, and building scalable solutions.
                            </p>
                            <p style={{ marginTop: '15px' }}>
                                With a strong foundation in <strong>Data Structures & Algorithms</strong>, I specialize in <strong>full-stack web development</strong> 
                                with expertise in the <strong>MERN Stack</strong>. I'm passionate about creating responsive, user-friendly applications 
                                and continuously learning new technologies.
                            </p>
                            <p style={{ marginTop: '15px' }}>
                                I'm seeking opportunities that offer <strong>professional growth</strong>, <strong>technical challenges</strong>, 
                                and the chance to make <strong>meaningful impact</strong> through innovative solutions. Let's build something amazing together!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work Experience Section */}
            <Experience />

            {/* Education & Certifications */}
            <EduCert />

            {/* Projects Section */}
            <Projects />

            {/* Contact Section */}
            <section id="contact">
                <div className="container cont1">
                    <h2>
                        Let's Connect
                    </h2>
                    <p className="mycontact">
                        I'm always open to interesting projects and opportunities. Feel free to reach out and let's start a conversation!
                    </p>
                    <div className="contacts">
                        <div className="cn">
                            <strong style={{ fontSize: '18px' }}>Email</strong>
                            <p style={{ marginTop: '8px' }}>
                                <a href="mailto:mfaizalam32@gmail.com">
                                    mfaizalam32@gmail.com
                                </a>
                            </p>
                        </div>

                        <div className="cn">
                            <strong style={{ fontSize: '18px' }}>Phone</strong>
                            <p style={{ marginTop: '8px' }}>
                                <a href="tel:+917987072308">
                                    (+91) 7987072308
                                </a>
                            </p>
                        </div>

                        <div className="cn">
                            <strong style={{ fontSize: '18px' }}>LinkedIn</strong>
                            <p style={{ marginTop: '8px' }}>
                                <a href="https://www.linkedin.com/in/faiz-alam-9179b6135/" target="_blank" rel="noreferrer">
                                    Connect with me
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortBody;
