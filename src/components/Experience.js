import React from "react";
import LinkIcon from "../../assets/baseline_link_black_24dp.png";
import { deemphasis } from "../colors";

const style = {
  headline: {
    margin: 0,
  },
  link: {
    display: "inline-block",
    marginLeft: 8,
    verticalAlign: "middle",
  },
  description: {
    margin: 0,
    paddingLeft: "2rem",
  },
  logistics: {
    marginLeft: "auto",
  },
  subheading: {
    color: deemphasis,
    fontSize: "0.9rem",
    fontStyle: "italic",
    display: "flex",
    marginBottom: "0.2rem",
  },
  role: {
    fontWeight: 100,
    fontSize: "0.9em",
  },
  wrapper: {
    marginBottom: "0.4rem",
  },
};

function Experience({
  description,
  endDate,
  title,
  link,
  location,
  organization,
  startDate,
  technologies,
}) {
  const techUsed = technologies.join(", ");
  return (
    <div style={style.wrapper}>
      <h3 style={style.headline}>
        {organization} | <span style={style.role}>{title}</span>
        {link && (
          <a
            style={style.link}
            rel="noopener noreferrer"
            target="_blank"
            href={link}
          >
            <img src={LinkIcon} height="28px" alt="link icon" />
          </a>
        )}{" "}
      </h3>
      <div style={style.subheading}>
        <div>{techUsed}</div>
        <div style={style.logistics}>
          {startDate} - {endDate} {location ? `| ${location}` : null}
        </div>
      </div>
      <ul style={style.description}>
        {description.map((point, i) => (
          <li key={i}>{point.split(" ").map(w => `${w} `)}</li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
