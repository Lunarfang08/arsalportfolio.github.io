"use client"; // Mark as client component

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import homeStyles from "./Home.module.css"; // Renamed to homeStyles
import { motion } from "framer-motion";
import * as THREE from "three";

const Home = () => {
  const [clientCount, setClientCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0); // State for total projects
  const [experienceCount, setExperienceCount] = useState(0); // State for experience
  const targetClientCount = 15; // Target client count
  const targetProjectCount = 10; // Target project count
  const targetExperienceCount = 5; // Target experience count
  const incrementSpeed = Math.ceil(targetClientCount / 30); // Speed of counting

  const [isOpen, setIsOpen] = useState(false);
  const mountRef = useRef(null); // Ref for mounting the Three.js scene
  const sceneRef = useRef(); // Ref for storing Three.js scene properties

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const totalServices = 4; // Adjust if you have more services

  // const slideCarousel = (direction) => {
  //     setCurrentIndex((prevIndex) => {
  //         let newIndex = prevIndex + direction;
  //         if (newIndex < 0) {
  //             return totalServices - 1; // Wrap around to last item
  //         } else if (newIndex >= totalServices) {
  //             return 0; // Wrap around to first item
  //         }
  //         return newIndex;
  //     });
  // };

  // // Use effect for auto-slide if desired
  // useEffect(() => {
  //     const interval = setInterval(() => {
  //         slideCarousel(1);
  //     }, 3000); // Change slides every 3 seconds
  //     return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement); // Append the renderer to the mountRef

    // Create a sphere geometry for the ball
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      color: 0x00ff00,
      emissive: 0x00ff00,
      emissiveIntensity: 0.5,
    });
    const ball = new THREE.Mesh(geometry, material);
    scene.add(ball);

    // Add ambient light and a directional light for better illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    camera.position.z = 5; // Move the camera back so we can see the ball

    // Variables for movement
    let angle = 0; // Angle for smooth circular motion
    const radius = 2; // Radius of circular motion

    const animate = function () {
      requestAnimationFrame(animate);

      // Update the ball's position for circular motion
      ball.position.x = radius * Math.cos(angle);
      ball.position.y = radius * Math.sin(angle);

      angle += 0.02; // Increment angle for continuous motion

      renderer.render(scene, camera); // Render the scene
    };

    animate(); // Start the animation

    // Function to handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Update camera aspect ratio and renderer size
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize); // Add event listener for window resize

    // Cleanup function to remove the Three.js canvas on component unmount
    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the resize listener
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose(); // Dispose the renderer
    };
  }, []);

  useEffect(() => {
    const incrementCounts = (setCount, targetCount) => {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev < targetCount) {
            return prev + incrementSpeed;
          } else {
            clearInterval(interval);
            return targetCount; // Ensure it doesn't exceed the target
          }
        });
      }, 50); // Update every 50ms
      return () => clearInterval(interval);
    };

    // Increment clients, projects, and experience counts
    const clientInterval = incrementCounts(setClientCount, targetClientCount);
    const projectInterval = incrementCounts(
      setProjectCount,
      targetProjectCount
    );
    const experienceInterval = incrementCounts(
      setExperienceCount,
      targetExperienceCount
    );

    return () => {
      clientInterval(); // Cleanup client interval
      projectInterval(); // Cleanup project interval
      experienceInterval(); // Cleanup experience interval
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={homeStyles.container}>
      <div ref={mountRef} className={homeStyles.background}></div>{" "}
      {/* This will hold the Three.js canvas */}
      <nav className={homeStyles.navbar}>
        <div className={homeStyles.hamburger} onClick={toggleNavbar}>
          <div className={homeStyles.bar}></div>
          <div className={homeStyles.bar}></div>
          <div className={homeStyles.bar}></div>
        </div>
        <ul
          className={`${homeStyles.navLinks} ${
            isOpen ? homeStyles.active : ""
          }`}
        >
          <li>
            <Link href="#" onClick={toggleNavbar}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" onClick={toggleNavbar}>
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" onClick={toggleNavbar}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={toggleNavbar}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <header className={homeStyles.header}>
        <h1 className={homeStyles.title}>Hi! My name is Arsal Adnan</h1>
        <p className={homeStyles.subtitle}>I'm a passionate Web developer.</p>
        <Link href="#projects" className={homeStyles.button}>
          View My Work
        </Link>
      </header>
      {/* Education Section */}
      <section className={homeStyles.education}>
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            fontSize: "2rem",
            textAlign: "center",
            marginBottom: "1rem",
            color: "#333",
          }} // Style adjustments
        >
          Education
        </motion.h2>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, scale: 0.8, rotate: -10 },
              visible: { opacity: 1, scale: 1, rotate: 0 },
            }}
            transition={{ duration: 0.5 }}
            className={homeStyles.educationText}
          >
            Bahria University Islamabad
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, scale: 0.8, rotate: -10 },
              visible: { opacity: 1, scale: 1, rotate: 0 },
            }}
            transition={{ duration: 0.5 }}
            className={homeStyles.educationText}
          >
            BS(CS) 2020–2024
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, scale: 0.8, rotate: -10 },
              visible: { opacity: 1, scale: 1, rotate: 0 },
            }}
            transition={{ duration: 0.5 }}
            className={homeStyles.educationText}
          >
            Majors: Digital Image Processing, Web Engineering, Software Quality
            Assurance, Software Engineering, Artificial Intelligence, Cloud
            Computing
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, scale: 0.8, rotate: -10 },
              visible: { opacity: 1, scale: 1, rotate: 0 },
            }}
            transition={{ duration: 0.5 }}
            className={homeStyles.educationText}
          >
            Fazaia Education System School Islamabad
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, scale: 0.8, rotate: -10 },
              visible: { opacity: 1, scale: 1, rotate: 0 },
            }}
            transition={{ duration: 0.5 }}
            className={homeStyles.educationText}
          >
            ICS (Computer, Maths) 2018–2020
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, scale: 0.8, rotate: -10 },
              visible: { opacity: 1, scale: 1, rotate: 0 },
            }}
            transition={{ duration: 0.5 }}
            className={homeStyles.educationText}
          >
            Matriculation 2017
          </motion.p>
        </motion.div>
      </section>
      {/* Stats Section */}
      <section className={homeStyles.stats}>
        <h2 className={homeStyles.statsTitle}>My Achievements</h2>
        <div className={homeStyles.statsContainer}>
          <div className={homeStyles.stat}>
            <h3
              className={`${homeStyles.statCount} ${homeStyles.animateCount}`}
            >
              {clientCount}
            </h3>
            <p className={homeStyles.statLabel}>Clients Served</p>
          </div>
          <div className={homeStyles.stat}>
            <h3
              className={`${homeStyles.statCount} ${homeStyles.animateCount}`}
            >
              {projectCount}
            </h3>
            <p className={homeStyles.statLabel}>Total Projects</p>
          </div>
          <div className={homeStyles.stat}>
            <h3
              className={`${homeStyles.statCount} ${homeStyles.animateCount}`}
            >
              {experienceCount}
            </h3>
            <p className={homeStyles.statLabel}>Years of Experience</p>
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section className={homeStyles.experience}>
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={homeStyles.experienceTitle}
        >
          Experience
        </motion.h2>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
          }}
          className={homeStyles.experienceCardContainer}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
            className={homeStyles.experienceCard}
            whileHover={{ scale: 1.05 }}
          >
            <h3>The Worx Islamabad</h3>
            <p>Junior Developer July 2023 – August 2023</p>
            <p>
              Gained expertise in front-end development techniques, focusing on
              responsive design and code optimization. Learned and applied
              React.js to build dynamic user interfaces and improve project
              efficiency.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
            className={homeStyles.experienceCard}
            whileHover={{ scale: 1.05 }}
          >
            <h3>Internee.pk Islamabad</h3>
            <p>Flutter Developer Sept 2023 – Oct 2023</p>
            <p>
              Gained practical experience as a Flutter developer, focusing on
              mobile application development and enhancing user interface
              designs for optimized performance and user experience.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5 }}
            className={homeStyles.experienceCard}
            whileHover={{ scale: 1.05 }}
          >
            <h3>eGeeks Global</h3>
            <p>Research Analyst Aug 2024 – Sept 2024</p>
            <p>
              Conducted market research and data analysis to support business
              decisions. Gained experience in report writing and data
              visualization.
            </p>
          </motion.div>
        </motion.div>
      </section>
      {/* Training / Certification Section */}
      <section className={homeStyles.trainingSection}>
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={homeStyles.trainingTitle}
        >
          Training & Certifications
        </motion.h2>

        <motion.ul
          className={homeStyles.trainingList}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", staggerChildren: 0.3 }}
        >
          {[
            "Introduction to WordPress",
            "AWS Academy Cloud Architecting",
            "AWS Academy Cloud Developing",
            "Google - Introduction to Generative AI",
            "Meta - Introduction to Frontend Development",
            "Introduction to Figma",
          ].map((cert, index) => (
            <motion.li
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.1, rotate: 1 }}
              className={homeStyles.trainingItem}
            >
              {cert}
            </motion.li>
          ))}
        </motion.ul>
      </section>
      {/* Services Section */}
      <section className={homeStyles.uniqueServicesSection}>
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={homeStyles.uniqueServicesTitle}
        >
          My Services
        </motion.h2>

        <motion.div
          className={homeStyles.uniqueCardContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {[
            {
              title: "Web Development",
              imgSrc:
                "https://shourai.io/wp-content/uploads/2020/07/kindpng_1272110.png",
            },
            {
              title: "UI/UX Design",
              imgSrc:
                "https://timedoor.net/wp-content/uploads/2022/03/UI-UX.png",
            },
            {
              title: "Documentation",
              imgSrc:
                "https://clevertap.com/wp-content/uploads/2020/02/technical-documentation-post-header1.jpg?w=768",
            },
            {
              title: "Python Projects",
              imgSrc: "https://contentstatic.techgig.com/photo/81712245.cms",
            },
            {
              title: "Data Science and Machine Learning",
              imgSrc:
                "https://tdwi.org/articles/2019/06/13/-/media/TDWI/TDWI/BITW/machinelearning4.jpg",
            },
            {
              title: "Website Maintenance and Optimization",
              imgSrc:
                "https://media.licdn.com/dms/image/v2/D4E12AQF-mlbR1jN0KQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1702033454321?e=1732752000&v=beta&t=Yb1Spsybnf3EfpwJM88iGqGXlLDmC-Xavumj_X-uPJo",
            },
            {
              title: "Project Management",
              imgSrc:
                "https://www.investopedia.com/thmb/epVGSIQa52U6JotCRTAuGCpYay0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/project-management.asp-Final-0c4cd7f77aad40228e7311783c27f728.png",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className={homeStyles.uniqueServiceCard}
              initial={{ opacity: 0, y: 20 }} // Fade in and move up effect
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }} // Delay for staggered animation
            >
              <img
                src={service.imgSrc}
                alt={service.title}
                className={homeStyles.uniqueServiceImage}
              />
              <h3 className={homeStyles.uniqueServiceTitle}>{service.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Home;