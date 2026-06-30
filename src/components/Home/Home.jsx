import "./Home.css"
import { Link } from "react-scroll"
import Social3D from "../Social3D/Social3D"

function Home() {
  return (
    <section id="home">
      <div className="grid-overlay"></div>
      
      <div className="container home-container">
        <div className="home-content">
          <div className="home-tagline">
            <span className="tagline-dot"></span>
            open to new roles
          </div>
          <h1 className="home-title">
            Hey, I'm Vishwajeet.
          </h1>
          <h2 className="home-subtitle">I build software and design secure systems.</h2>
          <p className="home-description">
            I'm a computer science grad based in Ranchi. I spend most of my time writing Java backend logic, building interactive frontends with React, and studying security systems (currently focused on IAM). 
          </p>
          <div className="home-actions">
            <Link to="projects" smooth={true} duration={500} offset={-80}>
              <button className="btn btn-primary">see my work</button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <button className="btn btn-secondary">say hello</button>
            </Link>
          </div>
        </div>

        <div className="home-visual">
          <Social3D />
        </div>
      </div>
    </section>
  )
}

export default Home