import "./About.scss";
import { React, useState } from "react";
import SocialLinks from "./SocialLinks";
import Loading from "../../loading/Loading";

export function About() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col p-6 h-full">
      <div className="w-full text-center justify-center p-6">
        {isLoading ? <Loading /> : null}
        <div className="header">
          <img
            id="profilePic"
            src="img/self_image.jpg"
            alt="Ali Yarkın Caner"
            onLoad={() => setIsLoading(false)}
            style={isLoading ? { display: "none" } : {}}
            className="mx-auto h-auto max-w-xs max-h-80 border-4 border-solid rounded-full"
          />
          <h1 className="font-bold text-4xl pt-2">Hey there! It's Yarkın</h1>
        </div>
      </div>

      <SocialLinks />

      <hr id="aboutLine" className="self-center h-0.5 border-none" />
      <div id="summary" className="p-6 w-2/3 text-xl self-center">
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
