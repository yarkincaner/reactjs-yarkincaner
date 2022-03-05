import "./App.css";

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default class App extends Component {
  render() {
    return (
      <div className="grid grid-cols-6">
        <div className="flex flex-col w-1/6 h-screen text-center justify-center fixed bg-black">
          <img
            src="/img/self_image.jpg"
            alt="Ali Yarkın Caner"
            className="mx-auto h-auto max-w-xs max-h-40 border-0 border-solid rounded-full border-white border-opacity-80"
          />
          <h1 className="text-white font-bold text-xl p-3">
            Hey there! It's Yarkın
          </h1>
        </div>

        <div className="col-start-2 col-span-5 flex flex-col h-screen pl-10 justify-center">
          <div className="linkedin-icon">
            <a
              className="border-black"
              href="www.linkedin.com/in/ali-yarkin-caner"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size={"lg"}
                className="bg-black border-2 border-solid rounded-full border-black p-4 fa-hover"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
