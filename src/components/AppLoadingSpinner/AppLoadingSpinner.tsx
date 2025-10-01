import React from "react";
import styles from "./AppLoadingSpinner.module.css";

interface AppLoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const AppLoadingSpinner: React.FC<AppLoadingSpinnerProps> = ({
  size = "md",
  className = "",
}) => {
  return (
    <div className={`${styles.spinnerContainer} ${className}`}>
      <div className={`${styles.spinner} ${styles[size]}`}></div>
    </div>
  );
};

export default AppLoadingSpinner;
