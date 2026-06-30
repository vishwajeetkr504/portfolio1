import './App.css'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Project from './components/Project/Project'
import Contect from './components/Contect/Contect'

function App() {
  return (
    <>
      <div className="bg-glow-container">
        <div className="glow-circle glow-circle-1"></div>
        <div className="glow-circle glow-circle-2"></div>
        <div className="glow-circle glow-circle-3"></div>
      </div>
      <Nav />
      <main>
        <Home />
        <About />
        <Project />
        <Contect />
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '40px 24px',
        borderTop: '1px solid var(--border-color)',
        color: 'var(--text-muted)',
        fontSize: '14px',
        background: 'var(--bg-secondary)',
        position: 'relative',
        zIndex: '1'
      }}>
        <p>&copy; {new Date().getFullYear()} Vishwajeet Kumar. All rights reserved.</p>
      </footer>
    </> 
  )
}

export default App

