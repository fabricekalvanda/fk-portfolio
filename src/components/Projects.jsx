import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";

const Projects = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pendingLink, setPendingLink] = useState(null);

  const handleProjectClick = (e, link) => {
    if (!isLoggedIn) {
      e.preventDefault();
      setPendingLink(link);
      setShowLogin(true);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    if (pendingLink) {
      window.open(pendingLink, "_blank");
      setPendingLink(null);
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <a
                href={isLoggedIn ? project.link : "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleProjectClick(e, project.link)}
              >
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="mb-6 rounded"
                />
              </a>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
        {showLogin && !isLoggedIn && (
          <div className="mt-4 flex justify-center">
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={() => alert("Google Login Failed")}
            />
            <button
              className="ml-4 text-xs text-gray-400 hover:underline"
              onClick={() => setShowLogin(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;