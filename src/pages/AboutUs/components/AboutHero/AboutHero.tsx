import React from "react";
import styles from "./AboutHero.module.css";

interface AboutHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSubtitle}>{subtitle}</p>
          <p className={styles.heroDescription}>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
