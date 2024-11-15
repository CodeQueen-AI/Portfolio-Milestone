import React from 'react';
import './page.css'; // Import the custom CSS file

function Skills() {
  return (
    <section id="skill" className="py-16 bg-gray-100">
      <div className="skill">
        <h1 className="index">🚀 My Skills</h1>
        <div className="grid">
          <div className="skill-box">
            <img src="/Html.png" alt="HTML" />
            <h3>HTML</h3>
            <span>80%</span>
          </div>

          <div className="skill-box">
            <img src="/css.png" alt="CSS" />
            <h3>CSS</h3>
            <span>60%</span>
          </div>

          <div className="skill-box">
            <img src="/js.png" alt="JavaScript" />
            <h3>JavaScript</h3>
            <span>60%</span>
          </div>

          <div className="skill-box">
            <img src="/Ts.png" alt="TypeScript" />
            <h3>TypeScript</h3>
            <span>70%</span>
          </div>

          <div className="skill-box">
            <img src="/React.png" alt="React" />
            <h3>React</h3>
            <span>50%</span>
          </div>

          <div className="skill-box">
            <img src="/Next.png" alt="Next.js" />
            <h3>Next.js</h3>
            <span>50%</span>
          </div>

          <div className="skill-box">
            <img src="/figma.png" alt="UI/UX Design" />
            <h3>UI/UX Design</h3>
            <span>50%</span>
          </div>

          <div className="skill-box">
            <img src="/canva.png" alt="Canva" />
            <h3>Canva</h3>
            <span>70%</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
