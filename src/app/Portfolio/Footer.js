// src/app/Portfolio/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <p className="transition-opacity duration-300 ease-in-out opacity-90 hover:opacity-100">Islamabad, G-9</p>
          <p className="transition-opacity duration-300 ease-in-out opacity-90 hover:opacity-100">+923215200906</p>
          <p className="transition-opacity duration-300 ease-in-out opacity-90 hover:opacity-100">arsaladnan07@gmail.com</p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Lunarfang08"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 ease-in-out opacity-90 hover:opacity-100"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/arsaladnan/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 ease-in-out opacity-90 hover:opacity-100"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
