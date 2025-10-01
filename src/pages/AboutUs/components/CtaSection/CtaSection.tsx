import React from "react";
import { Link } from "react-router-dom";
import styles from "./CtaSection.module.css";
import AppButton from "../../../../components/AppButton/AppButton";

interface CtaSectionProps {
  title?: string;
  description?: string;
  primaryButton?: {
    text: string;
    link: string;
  };
  secondaryButton?: {
    text: string;
    link: string;
  };
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title = "Ready to Start Shopping?",
  description = "Join thousands of satisfied customers who trust ShopHub for their shopping needs.",
  primaryButton = { text: "Explore Products", link: "/products" },
  secondaryButton = { text: "Learn More", link: "/" },
}) => {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className={styles.ctaButtons}>
            <Link to={primaryButton.link}>
              <AppButton variant="primary" size="lg">
                {primaryButton.text}
              </AppButton>
            </Link>
            <Link to={secondaryButton.link}>
              <AppButton variant="outline" size="lg">
                {secondaryButton.text}
              </AppButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
