import React from "react";
import styles from "../styles/experience.module.css"; // Import module CSS

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Digital Darwin (Virtual)",
      duration: "Dec 2024 – Present",
      description:
        "Working on scalable React applications, integrating REST APIs, optimizing performance, and ensuring responsive UI across platforms."
    },
    {
      role: "Frontend Developer Intern",
      company: "Digital Darwin (Virtual)",
      duration: "Jun 2024 – Dec 2024",
      description:
        "Developed responsive web apps using React, Redux, and Chakra UI. Collaborated with cross-functional teams and delivered production-ready features."
    }
  ];

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.wrapper}>
          {experiences.map((exp, index) => (
            <div className={styles.card} key={index}>
              <h3 className={styles.role}>{exp.role}</h3>
              <h4 className={styles.company}>{exp.company}</h4>
              <span className={styles.duration}>{exp.duration}</span>
              <p className={styles.description}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
