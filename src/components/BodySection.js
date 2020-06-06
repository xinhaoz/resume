import React from "react";
import { highlight } from "../colors";

const style = {
  title: {
    fontWeight: 400,
    letterSpacing: 0.8,
    margin: 0,
    marginBottom: "0.5rem",
    textTransform: "uppercase",
    borderBottom: `4.5px solid ${highlight}`,
  },
};

function BodySection({ children, title }) {
  return (
    <div>
      <h2 style={style.title}>{title}</h2>
      {children}
    </div>
  );
}

export default BodySection;
