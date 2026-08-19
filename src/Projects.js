import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Job Pulse",
      domain: "AI-Powered Job Aggregation & Resume Analysis Platform",
      tech: "Docker | AWS (EKS) | Terraform | Kubernetes | Groq/Azure OpenAI | Redis",
      description: "A job aggregation platform with an AI resume analyzer, composite ranking engine, and fully containerized microservices.",
      features: [
        "Built AI resume analyzer (Groq/Azure OpenAI)",
        "Automated a Cron-based engine to ingest and deduplicate listings via SHA256",
        "Designed composite ranking engine backed by Redis cache-aside (sub-5ms read latency)",
        "Containerized services with Docker, 183 automated tests (81% coverage) via GitHub Actions CI/CD",
        "Provisioned Kubernetes cluster on AWS (EKS) using Terraform",
        "Configured HPA, ALB ingress, and rolling deployments for zero-downtime releases"
      ],
      links: {
        demo: "http://job-pulse-ten.vercel.app/",
        github: "https://github.com/FaizAlam4/job-pulse"
      }
    },
    {
      id: 2,
      title: "Trello Clone",
      domain: "Full-Stack Application",
      tech: "React | Redux Toolkit | Trello APIs | MUI",
      description: "A fully functional Trello clone application built using official Trello APIs with real-time board management and card operations.",
      features: [
        "Built using Trello's official APIs",
        "Optimized with Redux Toolkit for state management",
        "Fully responsive and mobile-friendly",
        "CRUD operations on boards and cards",
        "Drag-and-drop functionality"
      ],
      links: {
        demo: "https://trello-react-faiz.vercel.app/",
        github: "https://github.com/FaizAlam4/trello-react-faiz"
      }
    },
    {
      id: 3,
      title: "Country Explorer",
      domain: "Web Application",
      tech: "ReactJS | Context API | REST APIs",
      description: "An interactive web app to explore country data with advanced filtering, detailed country information, and dark mode support.",
      features: [
        "Display comprehensive country information",
        "Advanced filters and sub-filters for parameters",
        "Dark mode using Context API",
        "Detailed view for each country",
        "CRUD operations implementation"
      ],
      links: {
        demo: "https://countries-vite-project.vercel.app/",
        github: "https://github.com/FaizAlam4/countries-vite-project"
      }
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3>{project.title}</h3>
              <p className="project-domain">{project.domain}</p>
              <div className="project-tech">
                {project.tech.split(' | ').map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-features">
                <strong>Features:</strong>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="project-links">
                {project.links.demo && <a href={project.links.demo} target="_blank" rel="noreferrer">Live Demo</a>}
                <a href={project.links.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
