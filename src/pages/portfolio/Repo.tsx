import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const Repo = (props: Props) => {
  return (
    <div className="repo flex flex-col w-full h-full md:hover:scale-110 transition rounded-2xl overflow-hidden">
      <a className="group flex-grow" target="_blank" href={props.repo.html_url}>
        <div className="absolute hidden group-hover:flex p-2">
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="icon animate-pulse transition-all"
          />
        </div>

        <h1 className="repo-name text-2xl font-semibold text-center p-4">
          {props.repo.name}
        </h1>
        <p className="repo-description text-lg p-4">{props.repo.description}</p>
      </a>

      <footer className="repo-footer border-t-2 rounded-t-2xl bottom-0 p-2">
        <div className="flex justify-center">
          <hr className="topic-section-line h-0.5 w-2/6 mt-3 mr-2" />
          <div className="grid grid-cols-2">
            <p className="topic-section-title text-md text-left font-semibold pb-4">
              Topics
            </p>
            <p className="topic-section-title text-md text-right font-semibold pb-4">
              related
            </p>
          </div>
          <hr className="topic-section-line h-0.5 w-2/6 mt-3 ml-2" />
        </div>
        <div className="flex flex-wrap gap-2 pl-2">
          {props.repo.topics.length !== 0 ? (
            props.repo.topics.map((topic: any) => (
              <Topic key={topic.id} name={topic} />
            ))
          ) : (
            <p className="topic shadow-md rounded-lg text-center p-2 text-sm">
              No topics
            </p>
          )}
        </div>
      </footer>
    </div>
  );
};

export default Repo;
