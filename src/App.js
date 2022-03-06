import "./App.scss";

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default class App extends Component {
  render() {
    return (
      <div className="flex flex-col p-6">
        <div className="w-full text-center justify-center p-6">
          <img
            id="profilePic"
            src="/img/self_image.jpg"
            alt="Ali Yarkın Caner"
            className="mx-auto h-auto max-w-xs max-h-80 border-4 border-solid rounded-full border-white"
          />
          <h1 className="text-white font-bold text-5xl pt-2">
            Hey there! It's Yarkın
          </h1>
        </div>

        <div className="self-center pb-4 flex gap-4">
          <a href="https://www.linkedin.com/in/ali-yarkin-caner/">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="2x"
              className="bg-transparent border-2 border-solid rounded-full border-white p-3 fa fa-linkedin"
              color="white"
            />
          </a>

          <a href="https://github.com/yarkincaner">
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="bg-transparent border-2 border-solid rounded-full border-white p-3 fa fa-github"
              color="white"
            />
          </a>
        </div>

        <hr className="self-center w-4/6 h-0.5 border-none bg-white" />
        <div className="p-6 w-2/3 text-xl text-white self-center">
          <p>
            A CSE student who has been entranced by the software development
            process. Always eager to learn new technologies. Mainly done
            projects for the mobile platforms, recently trying to improve myself
            as well as in web development. My true purpose is to be a full-stack
            developer.
          </p>
        </div>

        <footer className="left-0 bottom-0 w-full text-center">
          <div className="inline">
            <p className="text-gray-300">
              Email via{" "}
              <a
                href="mailto:yarkincaner@gmail.com"
                className="text-white underline"
              >
                here
              </a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
