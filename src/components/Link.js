import React from "react";
import { emphasis } from "../colors";

function Link({ label, url }) {
  return (
    <a
      style={{ color: emphasis }}
      href={url}
      rel=" noopener noreferrer"
      target="_blank"
    >
      {label}
    </a>
  );
}

export default Link;
