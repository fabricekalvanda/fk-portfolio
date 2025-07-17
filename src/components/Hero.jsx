import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/images/fab-profile_web.jpg";
import resume from "../assets/files/KalvandaFabrice__Resume.pdf";
import { motion } from "framer-motion"; // fix import
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleDownloadClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      setShowLogin(true);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    // Optionally trigger download after login
    window.open(resume, "_blank");
  };

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              Fabrice Kalvanda
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Web & Mobile Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              href={isLoggedIn ? resume : "#"}
              download={isLoggedIn ? "resume" : undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 rounded bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 transition-colors"
              onClick={handleDownloadClick}
            >
              Download Resume
            </motion.a>
            {showLogin && !isLoggedIn && (
              <div className="mt-4">
                <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onError={() => alert("Google Login Failed")}
                />
                <button
                  className="block mt-2 text-xs text-gray-400 hover:underline"
                  onClick={() => setShowLogin(false)}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-2xl shadow-lg"
              src={profilePic}
              alt="Fabrice Kalvanda"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;