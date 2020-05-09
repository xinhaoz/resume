import React from "react";
import Experience from "./Experience";
import { highlight } from "../colors";

const style = {
  title: {
    fontWeight: 400,
    letterSpacing: 0.8,
    margin: 0,
    marginBottom: "0.5rem",
    textTransform: "uppercase",
    borderBottom: `6px solid ${highlight}`,
  },
};

function BodySection({ title, experiences }) {
  return (
    <div>
      <h2 style={style.title}>{title}</h2>
      <div>
        {experiences.map(
          (entry, i) => entry.include && <Experience key={i} {...entry} />
        )}
      </div>
    </div>
  );
}

export default BodySection;
