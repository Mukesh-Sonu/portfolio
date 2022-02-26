import "./header.css";
import CV from "./Cv";
import HeaderSocials from "./HeaderSocials";
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mukesh S</h1>
        <HeaderSocials />
        <div className="text-light">FrontEnd Developer</div>
        <CV />

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
