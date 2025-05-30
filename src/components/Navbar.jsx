import logo from "../assets/images/fk_logo_white.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/fabricekalvanda/",
    github: "https://github.com/fabricekalvanda?tab=repositories",
  };

  return (
    <nav className="mb-1 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-4 w-10" src={logo} alt="FabriceKalvanda" />
      </div>
      <div className="m-2 flex items-center justify-center gap-3 text-xl">
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
