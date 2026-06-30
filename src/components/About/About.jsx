import "./About.css"

function About() {
  const skills = [
    { category: "Languages", items: ["Java", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"] },
    { category: "Core CS & Libraries", items: ["React.js", "Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)", "DBMS", "Problem Solving"] },
    { category: "Specializations & Tools", items: ["Cybersecurity (IAM)", "Risk Management", "Git & GitHub", "REST APIs", "MS Office"] }
  ];

  const education = [
    {
      institution: "Cambridge Institute of Technology",
      degree: "Bachelor of Technology in Computer Science Engineering",
      duration: "07/2022 – 08/2026",
      location: "Ranchi, India"
    },
    {
      institution: "Birla Institute of Technology Mesra",
      degree: "Computer Science Diploma / Coursework",
      duration: "08/2017 – 08/2022",
      location: "Ranchi, India"
    }
  ];

  return (
    <section id="about">
      <div className="container about-container">
        <div className="section-header">
          <h2 className="section-title">about</h2>
          <div className="section-line"></div>
        </div>

        <div className="about-grid">
          <div className="about-bio">
            <h3 className="bio-greeting">A bit about me.</h3>
            <p className="bio-text">
              I love building software, learning new things, and solving complex problems. I enjoy looking under the hood of systems to figure out how to make them faster, more efficient, and secure.
            </p>
            <p className="bio-text">
              Over the last few years, I've focused on engineering solutions with Java, structuring data models, and designing secure application interfaces. I also completed cybersecurity training with TATA, where I specialized in Identity & Access Management (IAM) planning and compliance audits.
            </p>

            <div className="education-section">
              <h3 className="education-heading">where I've studied</h3>
              <div className="timeline">
                {education.map((edu, idx) => (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <span className="timeline-date">{edu.duration}</span>
                      <h4 className="timeline-institution">{edu.institution}</h4>
                      <p className="timeline-degree">{edu.degree}</p>
                      <p className="timeline-location">{edu.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about-skills">
            <h3 className="skills-heading">skills & tools</h3>
            <div className="skills-categories">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="skill-category-box">
                  <h4 className="category-title">{skillGroup.category}</h4>
                  <div className="skills-tags">
                    {skillGroup.items.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="cert-box">
              <h3 className="skills-heading" style={{ marginTop: '30px' }}>certifications</h3>
              <div className="skill-category-box certificate-card">
                <h4 className="category-title" style={{ color: 'var(--accent-color)' }}>TATA – Cybersecurity Analyst</h4>
                <ul className="cert-bullets">
                  <li>Gained hands-on experience in Identity and Access Management (IAM) fundamentals.</li>
                  <li>Conducted IAM strategy assessments, identified security gaps, and recommended improvements.</li>
                  <li>Designed and proposed custom IAM solutions to enhance security controls and compliance.</li>
                  <li>Developed understanding of cybersecurity principles, risk management, and secure system design.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About