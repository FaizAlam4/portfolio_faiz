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
      description: "Global deep-tech platform automating quality assurance across international agricultural trade markets.",
      responsibilities: [
        "Architected the Material Movement module to solve complex end-to-end lot traceability; drove real-time state updates to an executive dashboard via an event-driven Azure Service Bus pipeline.",
        "Took end-to-end ownership of Grafana dashboards backed by a Logstash-to-OpenSearch pipeline with PostgreSQL materialized views -- cutting load times by 85%.",
        "Implemented role-based multi-tenant access control across OpenSearch indices for centralized logging, reducing cross-team troubleshooting by over 50%.",
        "Integrated Razorpay into the licensing flow; maintained idempotency and validated webhook signatures to safely handle failures.",
        "Integrated Keycloak SSO (OAuth2/RBAC) authentication into the assurance application and routed APIs through a centralized gateway.",
        "Prototyped a Retrieval-Augmented Generation (RAG) pipeline (Azure OpenAI) for automated data classification."
      ],
      technologies: ["Node.js", "PostgreSQL", "Azure Service Bus", "Grafana", "OpenSearch", "Keycloak", "Razorpay", "Azure OpenAI"]
    },
    {
      id: 2,
      position: "Software Engineer (Intern -> Consultant)",
      company: "MountBlue Technologies Pvt. Ltd.",
      location: "Bengaluru, India",
      duration: "Nov 2023 - Feb 2025",
      description: "Engineered scalable real-time systems and critical attendance pipelines while refactoring legacy schemas.",
      responsibilities: [
        "Built the real-time notification delivery layer (bell-icon and push alerts) using Socket.IO and Firebase, supporting 2,000+ daily events.",
        "Engineered a fraud-resistant attendance pipeline with geo-validation and selfie authentication; automated 3 distinct categories of audit reports.",
        "Refactored legacy PostgreSQL transaction schemas to resolve memory bottlenecks.",
        "Migrated the React frontend build pipeline from CRA to Vite, significantly accelerating local dev cycle times."
      ],
      technologies: ["React", "Socket.IO", "Firebase", "PostgreSQL", "Vite"]
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
