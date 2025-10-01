import React from "react";
import AboutHero from "./components/AboutHero/AboutHero";
import MissionSection from "./components/MissionSection/MissionSection";
import ValuesSection from "./components/ValuesSection/ValuesSection";
import StorySection from "./components/StorySection/StorySection";
import TeamSection from "./components/TeamSection/TeamSection";
import CtaSection from "./components/CtaSection/CtaSection";
import FaqSection from "./components/FaqSection/FaqSection";
import styles from "./About.module.css";
import {
  faqs,
  heroData,
  milestones,
  missionData,
  storyParts,
  teamMembers,
  values,
} from "./utils/aboutUsData";

const About: React.FC = () => {
  return (
    <div className={styles.aboutPage}>
      <AboutHero {...heroData} />
      <MissionSection {...missionData} />
      <ValuesSection values={values} />
      <StorySection storyParts={storyParts} milestones={milestones} />
      <TeamSection teamMembers={teamMembers} />
      <CtaSection />
      <FaqSection faqs={faqs} />
    </div>
  );
};

export default About;
