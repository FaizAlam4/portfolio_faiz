import React from "react";
import { motion } from "framer-motion";
import faiz from "./asset/faiz1.jpg";
import EduCert from "./EduCert";
import Experience from "./Experience";
import Projects from "./Projects";
import TypingAnimation from "./TypingAnimation";

const PortBody = () => {
    const textArray = ["Faiz Alam", "Full-Stack Developer", "Full-Stack Engineer", "Problem Solver"];
    const typingSpeed = 2000;

    const socialLinks = [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/faizalam4/', icon: '💼' },
        { name: 'GitHub', url: 'https://github.com/FaizAlam4', icon: '💻' },
        { name: 'LeetCode', url: 'https://leetcode.com/u/FaizNexus/', icon: '🧩' }
    ];

    return (
        <>
            {/* Hero Section */}
            <section id="hero">
                <div className="container">
                    <div className="hero-wrapper">
                        {/* Left Side - Text Content */}
                        <motion.div 
                            className="hero-text-content"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <span className="hero-greeting">👋 Hello, I'm</span>
                            </motion.div>
                            
                            <TypingAnimation textArray={textArray} typingSpeed={typingSpeed} />
                            
                            <motion.p 
                                className="hero-tagline"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                Full-Stack Developer building scalable applications, microservices, 
                                and event-driven systems with expertise in modern web technologies.
                            </motion.p>
                            
                            <motion.p 
                                className="hero-subtitle"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                Passionate about system design, payment integrations, and creating 
                                reliable production systems with observability tools.
                            </motion.p>

                            {/* Social Links */}
                            <motion.div 
                                className="hero-social-links"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1 }}
                            >
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="social-link"
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                                        title={link.name}
                                    >
                                        {link.icon}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Profile Image */}
                        <motion.div 
                            className="hero-image-content"
                            initial={{ opacity: 0, y: 30, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="hero-image-wrapper">
                                <motion.div 
                                    className="hero-image-container"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img src={faiz} alt="Faiz Alam" className="hero-profile-image" />
                                    <div className="hero-gradient-ring"></div>
                                </motion.div>
                                
                                {/* Floating badges */}
                                <motion.div 
                                    className="floating-badge badge-1"
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <span className="badge-emoji">💼</span>
                                    <span className="badge-text">2.8+ Years</span>
                                </motion.div>
                                
                                <motion.div 
                                    className="floating-badge badge-2"
                                    animate={{ y: [0, -20, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                >
                                    <span className="badge-emoji">🎓</span>
                                    <span className="badge-text">9.05 CGPA</span>
                                </motion.div>
                                
                                <motion.div 
                                    className="floating-badge badge-3"
                                    animate={{ y: [0, -18, 0] }}
                                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                >
                                    <span className="badge-emoji">🚀</span>
                                    <span className="badge-text">Full-Stack</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Stats Grid */}
                    <motion.div 
                        className="hero-stats-grid"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                    >
                        <motion.div 
                            className="hero-stat-card"
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="stat-number">2.8+</div>
                            <div className="stat-label">Years Experience</div>
                        </motion.div>
                        <motion.div 
                            className="hero-stat-card"
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Technologies</div>
                        </motion.div>
                        <motion.div 
                            className="hero-stat-card"
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="stat-number">350+</div>
                            <div className="stat-label">DSA Problems</div>
                        </motion.div>
                        <motion.div 
                            className="hero-stat-card"
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="stat-number">9.05</div>
                            <div className="stat-label">CGPA</div>
                        </motion.div>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div 
                        className="hero-skills-section"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                    >
                        <h3 className="hero-skills-title">Technical Skills</h3>
                        <div className="hero-skills-tags">
                            {['JavaScript', 'Python', 'Java', 'React', 'Node.js', 'AWS (EKS, EC2)', 'Azure', 
                              'Kubernetes', 'Docker', 'Terraform', 'PostgreSQL', 'Redis', 'Azure Service Bus', 
                              'Grafana', 'OpenSearch', 'Keycloak'].map((skill, idx) => (
                                <motion.span 
                                    key={skill}
                                    className="hero-skill-tag"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 1.8 + idx * 0.05 }}
                                    whileHover={{ scale: 1.1, y: -3 }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Work Experience Section */}
            <Experience />

            {/* Education & Certifications */}
            <EduCert />

            {/* Projects Section */}
            <Projects />
        </>
    );
};

export default PortBody;
