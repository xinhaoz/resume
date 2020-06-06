import React from "react";
import BodySection from "./BodySection";
import Experience from "./Experience";

function ExperienceSection({ title, experiences }) {
  return (
    <BodySection title={title}>
      <div>
        {experiences.map(
          (entry, i) => entry.include && <Experience key={i} {...entry} />
        )}
      </div>
    </BodySection>
  );
}

export default ExperienceSection;
