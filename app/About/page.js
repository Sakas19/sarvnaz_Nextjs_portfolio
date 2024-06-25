import React from 'react';
import style from '../style /About.module.css';

const About = () => {
  return (
    <div className={style.container}>
      <h1 className={style.heading}>About Me</h1>
      <p className={style.description}>
        Hello, I am Sarvnaz Kasaei, a passionate individual currently exploring opportunities in Front-end development. I thrive on crafting user-friendly and visually appealing web experiences.
        <br /><br />
        With a background in various roles including sales at IKEA and H&M, I have developed strong interpersonal skills and a deep understanding of customer needs. My journey in the world of technology started as a self-driven learner and brought me to Changemaker Educations, where I am honing my skills as a Frontend and App Developer.
        <br /><br />
        Recently, I've been working as a Frontend Developer at Fragsheet, where I had the opportunity to implement an AI coach API for the League of Legends game. This experience has further enhanced my skills in web development and problem-solving.
        <br /><br />
        Currently, I am seeking opportunities to apply my skills and contribute to innovative projects in the realm of web development. I am enthusiastic about building intuitive and delightful digital solutions that make a difference.
        <br /><br />
        If you are looking for a motivated and dedicated individual to join your team, let us connect and explore how I can contribute to your vision.
      </p>
    </div>
  );
};

export default About;
