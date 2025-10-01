import React from "react";
import styles from "./FaqSection.module.css";

export interface FAQ {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title?: string;
  faqs: FAQ[];
}

const FaqSection: React.FC<FaqSectionProps> = ({
  title = "Frequently Asked Questions",
  faqs,
}) => {
  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>{title}</h2>
        </div>
        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
