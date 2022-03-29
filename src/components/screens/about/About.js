import "./About.scss";
import React from "react";
import SocialLinks from "./SocialLinks";

export function About() {
  return (
    <div className="flex flex-col p-6">
      <div className="w-full text-center justify-center p-6">
        <img
          src="img/self_image.jpg"
          alt="Ali Yarkın Caner"
          className="mx-auto h-auto max-w-xs max-h-80 border-4 border-solid rounded-full border-white hidden sm:flex"
        />
        <h1 className="text-white font-bold text-4xl pt-2">
          Hey there! It's Yarkın
        </h1>
      </div>

      <SocialLinks />

      <hr className="self-center w-2/3 h-0.5 border-none bg-white" />
      <div className="p-6 w-11/12 text-xl text-white self-center sm:w-2/3">
        <p>
          A CSE student who has been entranced by the software development
          process. Always eager to learn new technologies. Mainly done projects
          for the mobile platforms, recently trying to improve myself as well as
          in web development. My true purpose is to be a full-stack developer.
        </p>
      </div>

      <footer className="pb-24 md:pb-0 w-full text-center">
        <div className="inline">
          <p className="text-gray-300">
            Email me via{" "}
            <a
              href="mailto:yarkincaner@gmail.com"
              target="_blank"
              rel="noreferrer"
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