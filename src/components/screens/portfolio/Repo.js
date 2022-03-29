import React from "react";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Repo(props) {
  const topicsList =
    props.topics.length !== 0 ? (
      props.topics.map((topic) => (
        <p className="bg-gray-800 shadow-md rounded-lg text-center text-gray-200 p-2 text-sm">
          {topic}
        </p>
      ))
    ) : (
      <p className="bg-gray-800 shadow-md rounded-lg text-center text-gray-200 p-2 text-sm">
        No topics
      </p>
    );

  return (
    <a
      href={props.url}
      className="group flex flex-col max-w-lg h-full font-mono font-extralight border border-gray-200 rounded overflow-hidden bg-inherit self-center"
    >
      <div className="absolute hidden group-hover:flex p-2">
        <FontAwesomeIcon icon={faShare} size="2x" className="text-gray-200" />
      </div>

      <h1 className="text-gray-200 text-2xl font-semibold text-center p-4">
        {props.name}
      </h1>
      <p className="text-gray-200 flex-grow text-lg p-4">{props.description}</p>
      <footer className="bg-gray-200 border-t-2 border-gray-200 rounded-t-2xl bottom-0 p-2">
        <p className="text-md font-semibold pb-4 pt-2 pl-2 text-gray-800">
          Topics related:{" "}
        </p>
        <div className="flex flex-wrap gap-2">{topicsList}</div>
      </footer>
    </a>
  );
}
