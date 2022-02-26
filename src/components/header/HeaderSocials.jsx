import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/mukesh-s-385505214/" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Mukesh-Sonu" target="blank">
        <FaGithub />
      </a>
    </div>
  );
}

export default HeaderSocials;
