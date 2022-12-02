import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
function Experience() {
  return (
    <section id="experience">
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>HTML</h4>
              </div>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>CSS</h4>
              </div>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Java Script</h4>
              </div>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Tailwind</h4>
              </div>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>React</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
