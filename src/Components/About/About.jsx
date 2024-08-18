import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm Navnah Parte, a passionate full-stack developer with over 2.5
              years of experience. I specialize in React.js, Nest.js,
              Express.js, blockchain, MongoDB, PostgreSQL, AWS, GCP.
            </p>
            <p>
              I’m dedicated to continuous learning and thrive in team
              environments, where I focus on effective communication to deliver
              high-quality solutions.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Nest JS</p>
              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "45%" }} />
            </div>

            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: "60%" }} />
            </div>

            <div className="about-skill">
              <p>PostgreSQL</p>
              <hr style={{ width: "65%" }} />
            </div>

            <div className="about-skill">
              <p>AWS</p>
              <hr style={{ width: "40%" }} />
            </div>

            <div className="about-skill">
              <p>GCP</p>
              <hr style={{ width: "43%" }} />
            </div>

            <div className="about-skill">
              <p>Blockchain</p>
              <hr style={{ width: "50%" }} />
            </div>

          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2.5+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>4+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        {/* <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div> */}
      </div>
    </div>
  );
};

export default About;
