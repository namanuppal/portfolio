import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12 text-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Naman Uppal</h3>
            <p className="text-sm leading-relaxed">
              Passionate web developer crafting beautiful and functional websites.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center text-gray-300 hover:text-white transition duration-300"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="mr-2" />
              Back to Top
            </button>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contact</h4>
            <p className="flex items-center space-x-2">
              <FaEnvelope className="text-lg" />
              <a href="mailto:namanuppal678@gmail.com" className="hover:underline transition duration-300">
                namanuppal678@gmail.com
              </a>
            </p>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/namanuppal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-300 transition duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/naman-uppal-65405a268/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-300 transition duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section     */}
        <div className="mt-8 pt-8 border-t border-purple-500 text-lg">
          <p className="text-center">
            &copy; {new Date().getFullYear()}  Naman Uppal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
