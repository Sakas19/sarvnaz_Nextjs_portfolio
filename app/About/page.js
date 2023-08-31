import React from 'react';
import style from '../style /About.module.css'



const About = () => {
  return (
    <div className={style.container}>
      <h1 className={style.heading}>About Me</h1>
      <p className={style.description}>
        Hello, I am Sarvnaz Kasaei, a passionate individual currently seeking an exciting Front-end development internship opportunity (LIA) in Sweden. I thrive on crafting user-friendly and visually appealing web experiences.
        <br /><br />
        With a background in various roles including sales at IKEA and H&M, I have developed strong interpersonal skills and a deep understanding of customer needs. My journey in the world of technology started as a self-driven learner and brought me to Changemaker Educations, where I am honing my skills as a Frontend and App Developer.
        <br /><br />
        Through my experience at IKEA as a Sales Associate since September 2019, and at H&M as a Salesperson from July 2022 to December 2022, I've gained valuable insights into customer behavior and effective communication.
        <br /><br />
        Currently, I am pursuing opportunities to apply my skills and contribute to innovative projects in the realm of web development. I am enthusiastic about building intuitive and delightful digital solutions that make a difference.
        <br /><br />
        If you are looking for a motivated and dedicated individual to join your team, let us connect and explore how I can contribute to your vision.
      </p>
    </div>
  );
};

export default About;

