import './about.css';
import im2 from '../../assests/im2.jpeg';
import { VscFolderLibrary } from 'react-icons/vsc';
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
            As a FrontEnd Developer, I have contributed significantly to two
            dynamic tech environments. At{' '}
            <strong style={{ color: '#dee2e6' }}>LEARNYST</strong> since March
            2023, I played a key role in advancing the platform, overseeing
            learner profile data.
          </p>

          <p>
            Developed and implemented platform-wide Call to Action (CTA)
            features strategically positioned to boost user engagement and drive
            conversions. Seamlessly integrated throughout the interface, these
            CTAs employed multiple templates (pop-ups, slide-ins, sticky
            banners, and embed buttons). Dynamically triggered by events such as
            elapsed time, page load, and page scroll, these CTAs optimized
            timing and relevance for users, leading to a substantial increase in
            overall course sales.
          </p>

          <p>
            Previously, at{' '}
            <strong style={{ color: '#dee2e6' }}>KEEPWORKS</strong>, I
            streamlined forms, organized content, implemented toast
            notifications for a better user experience, and resolved UI bugs
            across various devices during my time at{' '}
            <strong style={{ color: '#dee2e6' }}>AT&T API Marketplace</strong>{' '}
            from March 2022 to March 2023.
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
