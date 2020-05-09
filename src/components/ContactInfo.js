import React from "react";
import Link from "./Link";
import MailIcon from "../../assets/email-black-18dp.png";
import GithubMark from "../../assets/GitHub-Mark-32px.png";
import LinkedInMark from "../../assets/In-Black-14px.png";

const style = {
  contact: {
    marginLeft: "auto",
  },
};

function ContactInfo({ email, github, linkedin }) {
  const contactInfo = [
    {
      icon: <img src={MailIcon} width="14px" alt="github-mark" />,
      content: <Link url={`mailto:${email}`} label={email} />,
    },
    {
      icon: <img src={GithubMark} width="14px" alt="github-mark" />,
      content: (
        <Link
          url={`http://www.github.com/${github}`}
          label={`github.com/${github}`}
        />
      ),
    },
    {
      icon: <img src={LinkedInMark} width="14px" alt="github-mark" />,
      content: (
        <Link
          url={`http://www.linkedin.com/in/${linkedin}`}
          label={`linkedin/${linkedin}`}
        />
      ),
    },
  ];
  return (
    <div style={style.contact}>
      {contactInfo.map((info, i) => (
        <div key={i}>
          {info.icon} {info.content}
        </div>
      ))}
    </div>
  );
}

export default ContactInfo;
