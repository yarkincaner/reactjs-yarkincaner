import "./About.scss";
import { useState } from "react";
import SocialLinks from "./SocialLinks";
import Loading from "../../components/loading/Loading";
// import Skills from "./Skills";

type Props = {};

const About = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col px-6">
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

      <hr
        id="aboutLine"
        className="self-center h-0.5 md:w-2/3 w-11/12 border-none"
      />
      <div
        id="summary"
        className="py-4 md:p-6 md:w-2/3 w-full text-xl self-center flex-grow"
      >
        <p>
          A CSE student who has been entranced by the software development
          process. Always eager to learn new technologies. Mainly done projects
          for the mobile platforms, recently trying to improve myself as well as
          in web development. My true purpose is to be a full-stack developer.
        </p>
      </div>
    </div>
  );
};

export default About;
