import React from "react";
import styles from "./TeamSection.module.css";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
}

interface TeamSectionProps {
  title?: string;
  subtitle?: string;
  teamMembers: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({
  title = "Meet Our Team",
  subtitle = "The passionate people behind ShopHub",
  teamMembers,
}) => {
  return (
    <section className={styles.teamSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.teamCard}>
              <div className={styles.memberImage}>
                <img src={member.image} alt={member.name} />
              </div>
              <div className={styles.memberInfo}>
                <h3>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberDescription}>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
