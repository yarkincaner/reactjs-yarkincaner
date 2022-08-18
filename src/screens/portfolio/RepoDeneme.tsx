import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Topic from "./Topic";

interface Props {
  repo: {
    id: number;
    name: string;
    html_url: string;
    description: string;
    topics: Array<string>;
  };
}

const RepoDeneme = (props: Props) => {
  return <div>RepoDeneme</div>;
};

export default RepoDeneme;
