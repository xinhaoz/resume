import React from "react";
import ContactInfo from "./ContactInfo";
import { deemphasis, emphasis } from "../colors";

const style = {
  name: {
    fontSize: "4rem",
    margin: 0,
    textTransform: "capitalize",
  },
  lastName: {
    fontWeight: 400,
    color: emphasis,
    // textTransform: "uppercase",
  },
  contact: {
    marginLeft: "auto",
  },
  root: {
    display: "flex",
    letterSpacing: 0.8,
    marginTop: "0.5rem",
    marginBottom: "0.8rem",
    alignItems: "center",
  },
  subheader: {
    color: deemphasis,
  },
};

function Header({ firstName, lastName, email, github, linkedin, subheading }) {
  return (
    <div style={style.root}>
      <div>
        <h1 style={style.name}>
          {firstName} <span style={style.lastName}>{lastName}</span>
        </h1>
        <div style={style.subheader}>{subheading}</div>
      </div>
      <ContactInfo email={email} github={github} linkedin={linkedin} />
    </div>
  );
}

export default Header;
