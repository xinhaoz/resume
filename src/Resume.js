import React from "react";
import Header from "./components/Header";
import ExperienceSection from "./components/ExperienceSection";
import Education from "./components/Education";
import ResumeInfo from "./ResumeInfo";

const width = 800;

const style = {
  resume: {
    margin: "0 auto",
    padding: "20px 40px",
    width,
    height: (11 / 8.5) * width,
    fontFamily: "Roboto",
    boxSizing: "border-box",
  },
};

function Resume() {
  const subheading = "Software Developer • UWaterloo Computer Science 2021";
  return (
    <div style={style.resume}>
      <Header
        email={ResumeInfo.email}
        firstName={ResumeInfo.firstName}
        lastName={ResumeInfo.lastName}
        subheading={subheading}
        github={ResumeInfo.githubUsername}
        linkedin={ResumeInfo.linkedin}
      />
      <ExperienceSection
        title="Experience"
        experiences={ResumeInfo.workExperience}
      />
      <ExperienceSection title="Projects" experiences={ResumeInfo.projects} />
      <Education {...ResumeInfo.education} />
    </div>
  );
}

export default Resume;
