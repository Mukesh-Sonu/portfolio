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
                <h4>Java Script</h4>
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
                <h4>ReactJs</h4>
              </div>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>NextJs</h4>
              </div>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Shadcn</h4>
              </div>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>GraphQl</h4>
              </div>
            </div>
            <div className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Lit (Web compoents)</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
