import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialLinks() {
  return (
    <div className="self-center pb-4 flex gap-4">
      <a
        href="https://www.linkedin.com/in/ali-yarkin-caner/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedinIn}
          size="2x"
          className="bg-transparent border-2 border-solid rounded-full border-white p-3 fa linkedin-about"
          color="white"
        />
      </a>

      <a href="https://github.com/yarkincaner" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={faGithub}
          size="2x"
          className="bg-transparent border-2 border-solid rounded-full border-white p-3 fa github-about"
          color="white"
        />
      </a>

      <a
        href="https://www.hackerrank.com/yarkincaner"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faHackerrank}
          size="2x"
          className="bg-transparent border-2 border-solid rounded-full border-white p-3 fa hackerrank-about"
          color="white"
        />
      </a>
    </div>
  );
}
