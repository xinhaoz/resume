import React from "react";
import BodySection from "./BodySection";
import { deemphasis } from "../colors";

const styles = {
  education: {
    display: "flex",
  },
  date: {
    color: deemphasis,
    fontStyle: "italic",
    marginLeft: "auto",
  },
};

function Education({ institution, program, startYear, graduationYear }) {
  return (
    <BodySection title="Education">
      <div style={styles.education}>
        <div>
          {institution} - Bachelor of {program}
        </div>
        <div style={styles.date}>
          {startYear} - {graduationYear}
        </div>
      </div>
    </BodySection>
  );
}

export default Education;
