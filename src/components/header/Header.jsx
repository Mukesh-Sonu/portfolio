import "./header.css";
import CV from "./Cv";
import im1 from "../../assests/im1.jpg";
import HeaderSocials from "./HeaderSocials";
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mukesh S</h1>
        <div className="text-light">FrontEnd Developer</div>
        <CV />
        <HeaderSocials />
        <div className="me">
          <img src={im1} alt="" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
