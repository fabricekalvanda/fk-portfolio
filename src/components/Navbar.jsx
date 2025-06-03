import logo from "../assets/images/fk_logo_white.png";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

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
        <Link
          to="/login"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="User"
        >
          <FaUser />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
