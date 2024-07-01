import React from "react";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import Image from 'next/image';
import styles from '../style /Projects.module.css';

const projects = [
  {
    name: "weather_app",
    description: "This is the first assignment that we done with vite",
    image: "/weather-app.png",
    github: "https://github.com/Sakas19/project1",
    link: "http://weather-app-sakas19.vercel.app",
  },
  {
    name: "cocktail-founder",
    description: "This is the first experiment with typescript",
    image: "/candm.png",
    github: "https://github.com/Sakas19/cocktail-founder",
    link: "https://cocktail-founder-3.vercel.app/",
  },
  {
    name: "Todo App",
    description: "This is fullstack todo app with vite and python",
    image: "/to-do.png",
    github: "https://github.com/Sakas19/ToDo_app-frontend",
    link: "/https://to-do-app-frontend-tau.vercel.app/",
  },
  {
    name: "Magic8-ball",
    description: "This is my version of the famous magic 8 ball game",
    image: "/magic-8-ball.png",
    github: "https://github.com/Sakas19/Magic-8-ball",
    link: "https://magic-8-ball-sakas19.vercel.app/",
  },
];

const Projects = () =>{
  return (
    <div>
      <h1 className={styles.heading}>Projects</h1>
      <div className={styles.list}>
        {projects.map((project, idx) => (
          <div key={idx} className={styles.project}>
            <div className={styles.imageContainer}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image src={project.image} alt="" width={400} height={300} />
              </a>
            </div>
            <div className={styles.content}>
              <h2 className={styles.title}>{project.name}</h2>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.buttons}>
                <a
                  className={`${styles.button} ${styles.githubButton}`}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub className={styles.icon} />
                  View Code
                </a>
                <a
                  className={`${styles.button} ${styles.linkButton}`}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsArrowUpRightSquare className={styles.icon} />
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};
export default Projects;