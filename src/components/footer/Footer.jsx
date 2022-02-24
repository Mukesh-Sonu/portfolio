import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelegram } from "react-icons/bs";
function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        EGATOR
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials" target="blank">
        <a href="https://linkedin.com">
          <BsLinkedin />
        </a>
        <a href="https://github.com" target="blank">
          <FaGithub />
        </a>
        <a href="https://api.whatsapp.com/send?phone+6379428124" target="blank">
          <BsWhatsapp />
        </a>
        <a href="https://web.telegram.org/z/" target="blank">
          <BsTelegram />
        </a>
        <a href="mailto:mukeshmuki761@gmail.com" target="blank">
          <MdOutlineEmail />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
