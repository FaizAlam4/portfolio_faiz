import React from 'react'

const EduCert = () => {
  return (
    <div>
      <section id="education" className="education-section">
      <div className="container">
        <h2>Education </h2>
        <div className="education-item">
          <h3>Bachelor of Technology in Computer Science Engineering</h3>
          <p>Lovely Professional University,   <strong> CGPA: 9.05 </strong> [2020-2024]</p> <br />
          <h3>Higher Secondary(12 <sup>th</sup>), Central Board of Secondary Education </h3>
          <p>Kendriya Vidyalaya No. 1, <strong>Percentage: 91.6%</strong>  </p>
        </div>
        <br />
        <div className="education-item">
          <h2>Certificates/Certifications <a id='lk' href="https://drive.google.com/drive/folders/1lepuDQLsZsN3qQQ6tm1knUtB7fWtzdCc?usp=sharing" target={"_blank"}>Go</a></h2>

          <p>Node JS (CipherSchool)</p>
          <p>Database Management Essential (Coursera)</p>
          <p>DevOps Certification (CipherSchool)</p>
          <p>DSA Self-paced (GFG)</p>
          <p>Github master course (Udemy)</p>

        </div>
      </div>
    </section>
    </div>
  )
}

export default EduCert
