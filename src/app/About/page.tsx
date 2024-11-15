import Image from "next/image";
import './page.css'

export default function About() {
  return (
    <section className="about-section">
      <div className="content">
        <h1 className="about-heading">About Me</h1>
        <p className="description">
          Hello! I am a passionate developer with a keen interest in Artificial Intelligence (AI) and Machine Learning (ML). I am constantly exploring new technologies to create innovative solutions and improve user experiences. My journey in tech has been full of learning, experimentation, and growth.
        </p>
        <div className="social-links">
          <a href="https://github.com/CodeQueen-AI" target="_blank" rel="noopener noreferrer">
            <Image src="/githup.png" alt="GitHub" className="icon" width={50} height={50} />
          </a>
          <a href="https://www.linkedin.com/in/sumbal-naz-601411323/" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin.png" alt="LinkedIn" className="icon" width={50} height={50} />
          </a>
        </div>
      </div>
      <div className="image-container">
        <img src="/About Pic.jpeg" alt="Profile" className="profile-image" />
      </div>
      <div className="horizontal-line"></div>
    </section>
  );
}
