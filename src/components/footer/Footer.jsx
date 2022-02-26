import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
function Footer() {
  return (
    <footer>
      <div className="footer__logo">#Findmebelow...</div>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">My Skills</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials" target="blank">
        <a href="https://www.linkedin.com/in/mukesh-s-385505214/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Mukesh-Sonu" target="blank">
          <FaGithub />
        </a>
        <a href="https://api.whatsapp.com/send?phone+6379428124" target="blank">
          <BsWhatsapp />
        </a>

        <a href="mailto:mukeshmuki761@gmail.com" target="blank">
          <MdOutlineEmail />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
