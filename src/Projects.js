import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
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
      id: 2,
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
    },
    {
      id: 3,
      title: "Todoist App",
      domain: "Task Management",
      tech: "ReactJS | Ant Design | Local Storage",
      description: "A modern todo application with intuitive features like favorites, archiving, and real-time task management.",
      features: [
        "Add, check, and archive tasks",
        "Add/remove favorites functionality",
        "Fully responsive design",
        "Clean and intuitive UI",
        "Local storage persistence"
      ],
      links: {
        demo: "https://todoist-peach.vercel.app/",
        github: "https://github.com/FaizAlam4/Todoist"
      }
    },
    {
      id: 4,
      title: "Easy Banking Landing Page",
      domain: "UI/UX Design",
      tech: "HTML | CSS | JavaScript | Responsive Design",
      description: "A sleek, responsive banking landing page built with pure HTML, CSS, and JavaScript without any framework dependencies.",
      features: [
        "Responsive design for all devices",
        "Pure CSS styling without frameworks",
        "Smooth animations and transitions",
        "Modern UI/UX design principles",
        "Optimized performance"
      ],
      links: {
        demo: "https://easy-bank-landing-page-ruddy.vercel.app/",
        github: "https://github.com/FaizAlam4/easyBank-landing-page"
      }
    },
    {
      id: 5,
      title: "EhSaas - Self-Assessment System",
      domain: "Educational Application",
      tech: "Angular | TypeScript | Single Page Application",
      description: "A comprehensive self-assessment system for students built with Angular, featuring modular architecture and fast performance.",
      features: [
        "Built for student self-assessment",
        "Angular modules and components",
        "Fast single-page application",
        "Frontend prototype with modern architecture",
        "User-friendly assessment interface"
      ],
      links: {
        github: "https://github.com/FaizAlam4/Angular-Project#readme"
      }
    },
    {
      id: 6,
      title: "Pricing Component",
      domain: "Interactive Component",
      tech: "HTML | CSS | JavaScript",
      description: "A dynamic pricing component with toggle functionality between annual and monthly billing plans.",
      features: [
        "Toggle between annual/monthly plans",
        "Multiple storage options",
        "Responsive design",
        "User-friendly interface",
        "Smooth animations"
      ],
      links: {
        demo: "https://pricing-project-smoky.vercel.app/",
        github: "https://github.com/FaizAlam4/Pricing_Project"
      }
    }
  ];

  return (
    <section id="projects" style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(236, 72, 153, 0.03) 100%)' }}>
      <div className="container">
        <h2 style={{
          fontSize: '36px',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '50px',
          background: 'linear-gradient(135deg, #6366f1, #ec4899)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Featured Projects
        </h2>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-domain">{project.domain}</div>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tech">Tech Stack: {project.tech}</div>
              <p className="project-description">{project.description}</p>
              
              <div style={{ marginBottom: '20px' }}>
                <strong style={{ color: '#1e293b', fontSize: '13px' }}>Key Features:</strong>
                <ul className="project-features">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-links">
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noreferrer" className="project-link">
                    🚀 Live Demo
                  </a>
                )}
                <a href={project.links.github} target="_blank" rel="noreferrer" className="project-link" 
                   style={project.links.demo ? {} : { flex: '1' }}>
                  💻 GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
