import React from "react";
import styles from "./ValuesSection.module.css";

export interface Value {
  icon: string;
  title: string;
  description: string;
}

interface ValuesSectionProps {
  title?: string;
  subtitle?: string;
  values: Value[];
}

const ValuesSection: React.FC<ValuesSectionProps> = ({
  title = "Our Values",
  subtitle = "The principles that guide everything we do",
  values,
}) => {
  return (
    <section className={styles.valuesSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <div className={styles.valuesGrid}>
          {values.map((value) => (
            <div key={value.title} className={styles.valueCard}>
              <div className={styles.valueIcon}>{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
