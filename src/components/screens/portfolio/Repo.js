import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Topic from "./Topic";

export default function Repo(props) {
  const topicsList =
    props.topics.length !== 0 ? (
      props.topics.map((topic) => (
        <Topic key={topic.id} topic={topic} onClick={props.onClick} />
      ))
    ) : (
      <p
        key={props.topics.id}
        className="topic shadow-md rounded-lg text-center p-2 text-sm"
      >
        No topics
      </p>
    );

  return (
    <div className="repo flex flex-col max-w-lg h-full md:hover:scale-110 transition rounded-2xl overflow-hidden">
      <a target="_blank" className="group flex-grow" href={props.url}>
        <div className="absolute hidden group-hover:flex p-2">
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="icon animate-pulse transition-all"
          />
        </div>

        <h1 className="repo-name text-2xl font-semibold text-center p-4">
          {props.name}
        </h1>
        <p className="repo-description text-lg p-4">{props.description}</p>
      </a>

      <footer className="repo-footer border-t-2 rounded-t-2xl bottom-0 p-2">
        <div className="flex justify-center">
          <hr className="topic-section-line h-0.5 w-2/6 mt-3 mr-2" />
          <p className="topic-section-title text-md text-center font-semibold pb-4">
            Topics related
          </p>
          <hr className="topic-section-line h-0.5 w-2/6 mt-3 ml-2" />
        </div>
        <div className="flex flex-wrap gap-2 pl-2">{topicsList}</div>
      </footer>
    </div>
  );
}
