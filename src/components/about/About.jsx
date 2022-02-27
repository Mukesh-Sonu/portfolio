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
            I'm in my Final year of Engineering, studying in the department of{" "}
            <strong>Electrical and Electronics Engineering </strong> <br />
            <br />
            I'm a self-taught passionate FrontEnd developer. I'm very much
            interested in learning new technologies and exploring in the web
            development space !!
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
