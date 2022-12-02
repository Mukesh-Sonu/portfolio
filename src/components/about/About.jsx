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
            in Coimbatore just ended. Learning new technologies and
            experimenting in the web development field are two things that
            really excite me.
          </p>

          <p>
            I currently work with{" "}
            <strong className="company">KeepWorks Technologies</strong> in
            Bangalore and have 10 months of experience. I'm a part of {""}
            <strong style={{ color: "#dee2e6" }}>
              AT&T API Marketplace
            </strong>{" "}
            team. It is among the country's biggest telecom providers.
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
