import React from 'react';

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      position: "Software Engineer (SDE I)",
      company: "AgNext Technologies Pvt. Ltd.",
      location: "Mohali, India",
      duration: "March 2025 - Present",
      description: "Leading microservices architecture and cloud infrastructure optimization. Designing and deploying containerized solutions while implementing enterprise-grade logging, monitoring, and authentication systems.",
      responsibilities: [
        "Architected containerized microservices using Node.js, FastAPI, and Docker with optimized CI/CD pipelines (40% efficiency improvement)",
        "Implemented centralized logging & monitoring stack (Logstash → OpenSearch → Grafana) reducing incident detection time by 20%",
        "Enabled multi-tenancy and RBAC in OpenSearch, scaling cloud application infrastructure across multiple clients",
        "Integrated Keycloak SSO with role-based access control, reducing authentication support overhead significantly",
        "Developed RAG-powered intelligent retrieval layer on OpenSearch for enhanced decision workflows (15% accuracy improvement)"
      ],
      technologies: ["Node.js", "FastAPI", "Docker", "OpenSearch", "Grafana", "Keycloak", "RAG", "Microservices"]
    },
    {
      id: 2,
      position: "Software Engineer (Consultant via MountBlue Technologies)",
      company: "AgNext Technologies Pvt. Ltd.",
      location: "Mohali, India",
      duration: "February 2024 - February 2025",
      description: "Contributed to core product development as a consultant, building critical features for field operations platform. Developed PWA with offline capabilities and real-time notification infrastructure.",
      responsibilities: [
        "Engineered Progressive Web App with offline sync, geo-tagging, and biometric attendance for field audits (30% efficiency gain)",
        "Architected real-time notification system using Socket.IO and Firebase Cloud Messaging handling 2000+ daily notifications",
        "Developed and maintained core REST API modules ensuring secure, zero-downtime deployments in production",
        "Collaborated with QA and DevOps teams to establish deployment best practices and system reliability standards"
      ],
      technologies: ["React", "Node.js", "PWA", "Socket.IO", "FCM", "REST APIs", "MongoDB", "Firebase"]
    }
  ];

  return (
    <section id="experience" className="work-experience-section">
      <div className="container">
        <h2>Professional Experience</h2>
        
        <div className="work-timeline">
          {workExperience.map((job, index) => (
            <div key={job.id} className="work-item">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
