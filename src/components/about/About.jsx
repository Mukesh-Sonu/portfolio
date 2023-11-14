import "./about.css";
import im2 from "../../assests/im2.jpeg";
import { VscFolderLibrary } from "react-icons/vsc";
function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={im2} alt="About Img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>6+ Completed projects</small>
            </div>
          </div>
          <p>
            My final year of engineering at Sri Ramakrishna Engineering College
            in Coimbatore. Learning new technologies and
            experimenting in the web development field are two things that
            really excite me.
          </p>
          <p>
            As a FrontEnd Developer, I have contributed significantly to two
            dynamic tech environments. At <strong style={{ color: "#dee2e6" }}>
              LEARNYST
            </strong> since March 2023, I played a
            key role in advancing the platform, overseeing learner profile data
            and contributing to the launch of over 5000 courses generating $4
            million in sales. My tech stack includes React, TypeScript, GraphQL,
            Amazon AWS, Redux-Bundler, and Theme-UI. Previously, at <strong style={{ color: "#dee2e6" }}>
              KEEPWORKS
            </strong>, I streamlined forms, organized content,
            implemented toast notifications for a better user experience, and
            resolved UI bugs across various devices using JavaScript, NextJS,
            and GraphQL during my time at <strong style={{ color: "#dee2e6" }}>
              AT&T API Marketplace
            </strong> from March 2022
            to March 2023.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
