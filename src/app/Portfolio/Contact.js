// src/app/Portfolio/Contact.js
import React from 'react';
import homeStyles from "./Home.module.css"; // Renamed to homeStyles

const Contact = () => {
  return (
    <div id="contact" className="relative bg-gray-100 min-h-screen flex items-center justify-center p-5 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/005/263/636/non_2x/contact-us-concept-icons-such-as-mobile-phone-e-mail-address-chat-global-communication-on-dark-blue-background-for-presentation-web-banner-article-business-and-network-connection-and-company-free-vector.jpg')" }}></div>
      <div className="relative z-10 bg-gradient-to-r from-[#1B2F47] via-[#1B2F47] to-[#1B2F47] rounded-lg shadow-lg p-8 md:w-1/2 w-full transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-bold text-center text-white mb-6 animate-bounce">Contact Me</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-200 mb-2" htmlFor="name">Name</label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              type="text"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 mb-2" htmlFor="email">Email</label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              type="email"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-200 mb-2" htmlFor="message">Message</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              id="message"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
