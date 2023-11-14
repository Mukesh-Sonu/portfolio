import React from "react";
import CV from "../../assests/Resume_Mukesh.pdf";
function Cv() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default Cv;
