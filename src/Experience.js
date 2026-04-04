import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      position: "Software Engineer (SDE I)",
      company: "AgNext Technologies Pvt. Ltd.",
      location: "Mohali, India",
      duration: "Mar 2025 - Present",
      description: "Resolved inconsistent payment states via Razorpay integrations, improved scalability with event-driven microservices, and enhanced system observability.",
      responsibilities: [
        "Resolved inconsistent payment states via Razorpay integrations (idempotent APIs, webhooks).",
        "Improved scalability with event-driven microservices (Azure Service Bus).",
        "Handled distributed edge cases using state machines with retry/rollback.",
        "Improved incident response via observability pipelines (Grafana, Logstash, OpenSearch).",
        "Secured systems via Keycloak auth (OAuth2, RBAC, SSO).",
        "Enabled faster access using semantic search (Azure OpenAI + OpenSearch).",
        "Boosted team efficiency by mentoring interns on backend design and API practices."
      ],
      technologies: ["Node.js", "Next.js", "REST APIs", "Azure Service Bus", "Grafana", "OpenSearch", "Keycloak", "Razorpay"]
    },
    {
      id: 2,
      position: "Software Engineer (Consultant via MountBlue)",
      company: "AgNext Technologies Pvt. Ltd.",
      location: "Mohali, India",
      duration: "Feb 2024 - Feb 2025",
      description: "Solved field reliability with an offline-first PWA, reduced delays via real-time systems, and ensured audit integrity through geo-validation workflows.",
      responsibilities: [
        "Solved field reliability via offline-first PWA (React, caching, sync).",
        "Reduced delays via real-time systems (Socket.IO, Firebase) handling 2000+ daily events.",
        "Ensured audit integrity through geo-validation workflows.",
        "Improved performance by optimizing REST APIs and DB queries.",
        "Enhanced visibility via attendance and tracking systems."
      ],
      technologies: ["React", "PWA", "Socket.IO", "Firebase", "REST APIs", "MongoDB"]
    },
    {
      id: 3,
      position: "Software Engineer Intern",
      company: "MountBlue Technologies Pvt. Ltd.",
      location: "Bengaluru, India",
      duration: "Nov 2023 - Feb 2024",
      description: "Trained in DSA, frontend, and backend technologies, and built applications that were selected for deployment.",
      responsibilities: [
        "Completed rigorous training in Data Structures and Algorithms.",
        "Developed full-stack applications using MERN stack.",
        "Contributed to projects that were deployed to production."
      ],
      technologies: ["DSA", "JavaScript", "React", "Node.js", "MongoDB"]
    }
  ];

  return (
    <section id="experience" className="work-experience-section">
      <div className="container">
        <h2>Professional Experience</h2>
        
        <div className="work-timeline">
          {workExperience.map((job, index) => (
            <motion.div 
              key={job.id} 
              className="work-item"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <div className="work-card">
                <h3>{job.position}</h3>
                <div className="company">{job.company}</div>
                <div className="location">📍 {job.location}</div>
                <div className="duration">{job.duration}</div>
                
                <p>
                  {job.description}
                </p>

                <div className="work-responsibilities">
                  <strong>Key Contributions:</strong>
                  <ul>
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div className="work-tech">
                  {job.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
