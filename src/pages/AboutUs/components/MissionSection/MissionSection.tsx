import React from "react";
import styles from "./MissionSection.module.css";

interface MissionSectionProps {
  title?: string;
  mission: string;
  description: string;
  stats: Array<{
    number: string;
    label: string;
  }>;
}

const MissionSection: React.FC<MissionSectionProps> = ({
  title = "Our Mission",
  mission,
  description,
  stats,
}) => {
  return (
    <section className={styles.missionSection}>
      <div className="container">
        <div className={styles.missionGrid}>
          <div className={styles.missionContent}>
            <h2>{title}</h2>
            <p>{mission}</p>
            <p>{description}</p>
            <div className={styles.missionStats}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.stat}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.missionImage}>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Our team working together"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
