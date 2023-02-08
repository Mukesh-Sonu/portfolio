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
            Bangalore and have 1 year of experience. I'm a working on {""}
            <strong style={{ color: "#dee2e6" }}>
              AT&T API Marketplace
            </strong>{" "}
            project.
            <br />
            It is one among the largest telecom providers in the United States,
            that will allow customers to manage their underlying users, purchase
            phone numbers, and assign voice plans based on monthly
            subscriptions.
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
