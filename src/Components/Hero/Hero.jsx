import React from "react";
import "./Hero.css";
import profile_img from "../../assets/about_profile.svg";
import resumeUrl from "../../assets/resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" className="profile-img" />
      <h1>
        <span>I'm Navnath Parte,</span> Full Stack developer based in India.
      </h1>
      <p>
        Experienced Software Developer specialised in Back End Development with
        the latest cutting edge development tools and procedures. Hands-on
        experience and skills in developing back-end applications based on
        Node.js
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div>
          <button className="hero-resume" onClick={handleDownload}>
            My resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
