"use client"; // Mark as client component
import React, { useEffect, useState } from 'react';

const Loading = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // Change this duration to your desired loading time

        return () => clearTimeout(timer); // Cleanup timer
    }, []);

    return (
        <div className={`loading-container ${loading ? 'loading' : 'loaded'}`}>
            {loading ? (
                <>
                    <div className="logo-circle">
                        <div className="logo">A</div>
                        <div className="loading-ring"></div>
                    </div>
                    <div className="glitch-message">Let's play a game, just me and you!</div>
                    <div className="loading-bar-container">
                        <div className="loading-bar"></div>
                    </div>
                </>
            ) : (
                <div className="portfolio">Welcome to My Portfolio!</div> // Replace with your portfolio component
            )}
            <style jsx>{`
                .loading-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-color: black; /* Background color */
                    opacity: 1;
                    transition: opacity 0.5s ease; /* Smooth transition */
                }
                .loading {
                    opacity: 1; /* Show loading state */
                }
                .loaded {
                    opacity: 0; /* Hide after loading */
                }
                .logo-circle {
                    position: relative;
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    background-color: white; /* White background for the logo */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 20px; /* Space between logo and loading bar */
                    overflow: hidden;
                }
                .logo {
                    font-size: 50px;
                    color: black; /* Logo color */
                    z-index: 1; /* Ensure logo is above the loading ring */
                }
                .loading-ring {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    border: 5px solid transparent; /* Transparent border for effect */
                    border-top-color: black; /* Color for the top part */
                    animation: loadingAnimation 2s linear infinite; /* Rotating animation */
                    z-index: 0; /* Behind the logo */
                }
                .loading-bar-container {
                    width: 80%; /* Width of the loading bar */
                    height: 10px; /* Height of the loading bar */
                    background-color: grey; /* Background color of the bar */
                    border-radius: 5px; /* Rounded corners */
                    overflow: hidden; /* Hide overflow */
                }
                .loading-bar {
                    height: 100%;
                    width: 0; /* Initial width */
                    background-color: black; /* Color of the loading bar */
                    animation: loadingBarAnimation 3s forwards; /* Duration matches timer */
                }
                .glitch-message {
                    color: #00ffcc; /* Bright cyan color for cyberpunk effect */
                    font-size: 24px; /* Font size */
                    margin-top: 10px; /* Space above the message */
                    position: relative; /* For glitch effect */
                    animation: glitch 1s infinite; /* Glitch animation */
                    text-shadow: 
                        2px 0 #ff00ff, 
                        -2px 0 #00ccff, 
                        2px 2px #ff00ff, 
                        -2px -2px #00ccff; /* Multiple shadows for glitch effect */
                }
                @keyframes loadingAnimation {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes loadingBarAnimation {
                    0% { width: 0; }
                    100% { width: 100%; }
                }
                @keyframes glitch {
                    0% { text-shadow: 2px 0 #ff00ff, -2px 0 #00ccff; }
                    20% { text-shadow: -2px 0 #ff00ff, 2px 0 #00ccff; }
                    40% { text-shadow: 2px 2px #ff00ff, -2px -2px #00ccff; }
                    60% { text-shadow: -2px -2px #ff00ff, 2px 2px #00ccff; }
                    80% { text-shadow: 2px -2px #ff00ff, -2px 2px #00ccff; }
                    100% { text-shadow: 0 0 black; }
                }
                .portfolio {
                    color: white; /* Portfolio text color */
                    font-size: 24px; /* Font size */
                }
            `}</style>
        </div>
    );
};

export default Loading;
