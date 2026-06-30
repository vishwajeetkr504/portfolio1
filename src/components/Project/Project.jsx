import { useState } from 'react'
import "./Project.css"
import Card from "../Cards/Card"

function Project() {
  const projectsData = [
    {
      title: "Online Donation Platform",
      description: "Built this MERN application to handle user charity donations. Implemented JWT session-based token auth and coded custom backend aggregation endpoints to stream metrics to the dashboard.",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST APIs"],
      githubUrl: "https://github.com/vishwajeetkr504/online-donation-platform.git",
      liveUrl: "https://online-donation-platform-djtr.onrender.com",
      category: "Full Stack"
    },
    {
      title: "Smart Card Clustering",
      description: "Applied K-Means and DBSCAN models in Python to discover daily transit user routines based on smart card scan logs. Paired the findings with an interactive web dashboard.",
      tags: ["Python", "Scikit-Learn", "React.js", "Pandas", "Matplotlib"],
      githubUrl: "https://github.com/vishwajeetkr504/smart-card-clustering",
      liveUrl: "https://smart-card-clustering.onrender.com",
      category: "Machine Learning"
    },
    {
      title: "Mess Management System",
      description: "Programmed a utility database system in Java to manage student dining logs, track monthly meal consumption quotas, and automate accurate billing schedules.",
      tags: ["Java", "SQL", "DBMS", "OOP principles", "Console/GUI"],
      githubUrl: "#",
      liveUrl: "#",
      category: "Database & Systems"
    }
  ];

  const categories = ["All", "Full Stack", "Machine Learning", "Database & Systems"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects">
      <div className="container project-container">
        <div className="section-header">
          <h2 className="section-title">projects</h2>
          <div className="section-line"></div>
        </div>

        {/* Project Filters */}
        <div className="project-filters">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <Card
              key={idx}
              title={project.title}
              description={project.description}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project

