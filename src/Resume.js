import React from "react";
import Header from "./components/Header";
import BodySection from "./components/BodySection";
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
  const subheading = [
    ResumeInfo.institution,
    ResumeInfo.program,
    ResumeInfo.graduationYear,
  ].join(" ");
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
      <BodySection title="Experience" experiences={ResumeInfo.workExperience} />
      <BodySection title="Projects" experiences={ResumeInfo.projects} />
    </div>
  );
}

export default Resume;
