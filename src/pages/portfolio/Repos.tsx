import { useState, useEffect, useContext } from "react";
import { Context } from "../../context/context";
import Repo from "./Repo";

type Props = {};

const Repos = (props: Props) => {
  const context = useContext(Context);
  const [activeRepos, setActiveRepos] = useState<any>([]);

  useEffect(() => {
    setActiveRepos(
      context.filters.length !== 0
        ? context.repos.map((repo) => {
            if (context.filters.every((topic) => repo.topics.includes(topic))) {
              return <Repo repo={repo} />;
            }
          })
        : context.repos.map((repo) => {
            return <Repo repo={repo} />;
          })
    );
  }, [context.filters]);

  return (
    <div className="grid lg:grid-cols-5 gap-8 p-2 lg:p-8 w-full content-center">
      <div></div>
      <div className="grid md:grid-cols-2 gap-8 col-span-3 content-center place-items-center">
        {activeRepos ? activeRepos : <h1>There are no repositories</h1>}
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Repos;
