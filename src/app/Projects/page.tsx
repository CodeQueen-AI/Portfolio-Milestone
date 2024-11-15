import React from "react";
import Image from "next/image"; 
import './page.css'
const Projects = () => {
  return (
    <>
      <section className="header" id="project">
        <h1>📝My Projects🏆</h1>
      </section>
      <section className="projects">
        <div className="project project1">
          <a href="https://ice-cream-website-gold.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Image src="/P1.jpg" alt="Project 1" width={500} height={300} />
          </a>
          <h2>PROJECT 1</h2>
          <p>Icecream Website</p>
        </div>
        <div className="project project2">
          <a href="https://e-commerce-website-five-coral.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Image src="/P2.jpg" alt="Project 2" width={500} height={300} />
          </a>
          <h2>PROJECT 2</h2>
          <p>E-commerce Website</p>
        </div>
        <div className="project project3">
          <a href="https://learner-platform-beta.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Image src="/P3.jpg" alt="Project 3" width={500} height={300} />
          </a>
          <h2>PROJECT 3</h2>
          <p>learner Platform</p>
        </div>
        <div className="project project4">
          <a href="https://github.com/CodeQueen-AI/Fruit-Website-Next.js" target="_blank" rel="noopener noreferrer">
            <Image src="/P4.jpg" alt="Project 4" width={500} height={300} />
          </a>
          <h2>PROJECT 4</h2>
          <p>Fruit Website</p>
        </div>
        <div className="project project5">
          <a href="https://js-calculator-psi-six.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Image src="/P5.jpg" alt="Project 5" width={500} height={300} />
          </a>
          <h2>PROJECT 5</h2>
          <p>Calculator</p>
        </div>
        <div className="project project6">
          <a href="https://meal-website-nine.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Image src="/P6.jpg" alt="Project 6" width={500} height={300} />
          </a>
          <h2>PROJECT 6</h2>
          <p>Food Website</p>
        </div>
      </section>
    </>
  );
};

export default Projects;
