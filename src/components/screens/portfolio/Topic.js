import React from "react";

export default function Topic(props) {
  return (
    <button
      key={props.topic.id}
      onClick={() => props.onClick(props.topic)}
      className="topic shadow-md rounded-lg text-center p-2 text-sm"
    >
      {props.topic}
    </button>
  );
}
