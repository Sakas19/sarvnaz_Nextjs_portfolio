import React from 'react';
import { Quicksand } from 'next/font/google';
import styles from './page.module.css';

const quicksand = Quicksand ({ subsets: ['latin'] });

const Page = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <h1 className={styles.name}>Sarvnaz Kasaei</h1>
          <p className={styles.role}>Frontend Developer</p>
        </div>
        <div className={styles.intro}>
          <p>
            I am a{" "}
            <span className={styles.highlight}>Frontend developer </span>
            based in Stockholm, Sweden. With a strong foundation in web technologies and a passion for crafting user-friendly interfaces, I am dedicated to turning innovative ideas into reality. My journey in the world of development started with curiosity and a desire to create solutions that make a positive impact.
            <br />
            <br />
            Whether I'm building a responsive website or a dynamic web application, I approach each project with creativity and a focus on delivering high-quality results. I'm constantly seeking new challenges and opportunities to learn and grow in this ever-evolving field.
            <br />
            <br />
            If you're looking for a dedicated and passionate frontend developer to contribute to your team, I'd love to connect and discuss how I can be a valuable asset to your projects.
          </p>
        </div>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/sarvnaz-kasaei-593224200/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Sakas19" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="/Sarvnaz-cv.pdf" target="_blank" rel="noopener noreferrer">CV</a>
        </div>
      </div>
    </main>
  );
};

export default Page;
