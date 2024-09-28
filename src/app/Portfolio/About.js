"use client"; // Add this line to specify that this is a Client Component
import React, { useEffect, useRef, useState } from 'react'; // Added useState import
import * as THREE from 'three';

const About = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create a rotating cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  const TypingText = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');
    let index = 0;

    useEffect(() => {
      const timer = setInterval(() => {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text[index]);
          index++;
        } else {
          clearInterval(timer);
        }
      }, speed);

      return () => clearInterval(timer);
    }, [text, speed]);

    return <p className="text-lg text-gray-700 mb-4">{displayedText}</p>;
  };

  return (
    <div id="about" className="bg-gray-50 p-8 md:p-12 lg:p-16">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="md:w-1/2">
          <img 
            src="https://avatars.githubusercontent.com/u/122212279?s=400&u=5b2ab8c53dc84f7e4db48236da593464c6deeffd&v=4" // Replace with your image URL
            alt="About Me"
            className="rounded-full shadow-lg transition-transform transform hover:scale-110 mb-6"
          />
        </div>
        <div className="md:w-1/2 flex flex-col">
          <p className="text-lg text-gray-700 mb-4">
            Hi, I'm Arsal Adnan, a passionate web developer with a focus on creating interactive and engaging user experiences. With a strong foundation in both frontend and backend development, I strive to build applications that not only meet user needs but also provide seamless functionality.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            My journey in tech began with an interest in design, and over the years, I've honed my skills in various programming languages and frameworks. I enjoy solving complex problems and continuously learning new technologies to enhance my craft.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            When I’m not coding, you can find me exercising, enjoying anime, gaming, or playing football. I'm always open to collaboration and new opportunities, so feel free to reach out!
          </p>
          <a 
            href="#contact"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg text-center transition duration-200 transform hover:bg-blue-700 hover:scale-105"
          >
            Get in Touch
          </a>
          {/* Download CV Button */}
          <a 
          target= "blank"
            href="https://arsalcv.tiiny.site/" // Replace with your CV URL
            className="mt-4 inline-block bg-green-600 text-white px-6 py-3 rounded-md text-lg text-center transition duration-200 transform hover:bg-green-700 hover:scale-105"
            download
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-3xl font-semibold text-center text-gray-800 mb-4">Skills & Technologies</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
          {[
            "JavaScript",
            "C++",
            "Python",
            "HTML5",
            "C#",
            "CSS",
            "SCSS",
            "SQL",
            "Next.js",
            "React",
            "MongoDB",
            "Express",
            "Node.js",
            "GitHub",
            "TensorFlow",
            "Pandas",
            "PyTorch",
            "WebSocket",
            "ASP.NET Web Application",
            "ASP.NET Core",
            "Git",
            "Tampermonkey"
          ].map((skill, index) => (
            <li
              key={index}
              className={`bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 opacity-0 animate-fadeIn`}
              style={{ animationDelay: `${index * 100}ms` }} // Delay for each item
            >
              <h4 className="font-bold text-lg">{skill}</h4>
            </li>
          ))}
        </ul>
      </div>

      {/* Three.js Animation Mount */}
      <div className="mt-12" style={{ width: '100%', height: '400px' }} ref={mountRef}></div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s forwards;
        }
      `}</style>
    </div>
  );
};

export default About;
