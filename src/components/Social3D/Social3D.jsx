import { useState, useRef, useEffect } from "react";
import "./Social3D.css";
import profileImg from "../../assets/profile.jpg";

function Social3D() {
  const cardRef = useRef(null);
  const fileInputRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowStyle, setGlowStyle] = useState({ opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [avatar, setAvatar] = useState(null);

  // Load avatar from localStorage on component mount
  useEffect(() => {
    const savedAvatar = localStorage.getItem("portfolio-avatar");
    if (savedAvatar) {
      setAvatar(savedAvatar);
    } else {
      setAvatar(profileImg);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Mouse position relative to the card center
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const px = (x / rect.width) - 0.5;
    const py = (y / rect.height) - 0.5;
    
    // Max rotation angles (tilt intensity)
    const maxTilt = 18;
    
    setRotateY(px * maxTilt);
    setRotateX(-py * maxTilt);
    
    // Dynamic glass glow reflection following cursor
    setGlowStyle({
      opacity: 1,
      background: `radial-gradient(circle 250px at ${x}px ${y}px, rgba(16, 185, 129, 0.15), rgba(99, 102, 241, 0.05) 40%, transparent 80%)`
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlowStyle({ opacity: 0 });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setAvatar(base64String);
        localStorage.setItem("portfolio-avatar", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveAvatar = (e) => {
    e.stopPropagation();
    setAvatar(profileImg);
    localStorage.removeItem("portfolio-avatar");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const triggerFileInput = (e) => {
    e.stopPropagation();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="social-3d-wrapper">
      <div
        ref={cardRef}
        className={`social-3d-card ${isHovered ? "hovered" : ""}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
        }}
      >
        {/* Glow reflection background */}
        <div className="card-glow" style={glowStyle} />
        
        {/* Tech Grid Backdrop */}
        <div className="card-grid-backdrop" />
        
        {/* Decorative Corner Borders */}
        <div className="corner-border top-left"></div>
        <div className="corner-border top-right"></div>
        <div className="corner-border bottom-left"></div>
        <div className="corner-border bottom-right"></div>

        <div className="card-inner">
          {/* 3D Parallax Avatar */}
          <div className="avatar-container">
            <div className="avatar-orbit orbit-1"></div>
            <div className="avatar-orbit orbit-2"></div>
            <div className="avatar-box" onClick={triggerFileInput}>
              <div className="avatar-face" style={{ overflow: "hidden", position: "relative" }}>
                <img 
                  src={avatar || profileImg} 
                  alt="Vishwajeet Kumar" 
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%"
                  }}
                />
                <div className="avatar-overlay">
                  <div className="avatar-action-btn" title="Change Photo">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                  </div>
                  {avatar && avatar !== profileImg && (
                    <div 
                      className="avatar-action-btn remove-btn" 
                      title="Remove Photo"
                      onClick={handleRemoveAvatar}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleAvatarChange} 
              accept="image/*" 
              style={{ display: "none" }}
            />
          </div>

          {/* User Details */}
          <div className="user-info-section">
            <span className="user-status-badge">
              <span className="status-pulse"></span>
              SECURE SYTEMS & LOGIC
            </span>
            <h2 className="user-title-3d">Vishwajeet Kumar</h2>
            <p className="user-desc-3d">Java Developer & Security Analyst</p>
          </div>

          <div className="divider-glow"></div>

          {/* 3D Social Connect Section */}
          <div className="social-connect-container">
            <h4 className="social-header-label">ACCESS PROFILES</h4>
            
            <div className="social-layered-dock">
              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/vishwajeet-kumar-853b6b353/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-layered-btn"
                style={{ "--brand-color": "#0077b5" }}
              >
                <div className="layer-base"></div>
                <div className="layer-middle"></div>
                <div className="layer-top">
                  <svg className="brand-svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <span className="layer-text">LinkedIn</span>
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/vishwajeetkr504"
                target="_blank"
                rel="noopener noreferrer"
                className="social-layered-btn"
                style={{ "--brand-color": "#a855f7" }}
              >
                <div className="layer-base"></div>
                <div className="layer-middle"></div>
                <div className="layer-top">
                  <svg className="brand-svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </div>
                <span className="layer-text">GitHub</span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:vickey333kr@gmail.com"
                className="social-layered-btn"
                style={{ "--brand-color": "#ef4444" }}
              >
                <div className="layer-base"></div>
                <div className="layer-middle"></div>
                <div className="layer-top">
                  <svg className="brand-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <span className="layer-text">Email</span>
              </a>

              {/* PHONE */}
              <a
                href="tel:7004308818"
                className="social-layered-btn"
                style={{ "--brand-color": "#10b981" }}
              >
                <div className="layer-base"></div>
                <div className="layer-middle"></div>
                <div className="layer-top">
                  <svg className="brand-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span className="layer-text">Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social3D;
