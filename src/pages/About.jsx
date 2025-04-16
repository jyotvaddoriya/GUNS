import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to our website! We are dedicated to providing top-quality firearms for enthusiasts, collectors, and professionals. 
          With a passion for precision and innovation, our mission is to offer a wide range of firearms that cater to various needs.
        </p>
        <p className="about-description">
          Our team has years of experience in the industry, ensuring that every product we offer meets the highest standards of 
          performance and safety. Whether you are an experienced shooter or a beginner, we are here to help you find the right gun 
          for your needs.
        </p>
        <p className="about-description">
          We believe in providing a safe and secure environment for all our customers. If you have any questions, feel free to reach out to our support team.
        </p>
      </div>
    </div>
  );
};

export default About;
