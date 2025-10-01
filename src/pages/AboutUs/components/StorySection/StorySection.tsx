import React from "react";
import styles from "./StorySection.module.css";

export interface Milestone {
  year: string;
  event: string;
}

interface StorySectionProps {
  title?: string;
  storyParts: string[];
  milestones: Milestone[];
}

const StorySection: React.FC<StorySectionProps> = ({
  title = "Our Story",
  storyParts,
  milestones,
}) => {
  return (
    <section className={styles.storySection}>
      <div className="container">
        <div className={styles.storyGrid}>
          <div className={styles.storyImage}>
            <img
              src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Our story"
            />
          </div>
          <div className={styles.storyContent}>
            <h2>{title}</h2>
            {storyParts.map((part, index) => (
              <p key={index}>{part}</p>
            ))}

            {/* Timeline */}
            <div className={styles.timeline}>
              <h4>Our Journey</h4>
              <div className={styles.milestones}>
                {milestones.map((milestone) => (
                  <div key={milestone.year} className={styles.milestone}>
                    <div className={styles.milestoneYear}>{milestone.year}</div>
                    <div className={styles.milestoneEvent}>
                      {milestone.event}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
