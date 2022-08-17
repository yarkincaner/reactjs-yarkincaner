import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../context/context";
import Repo from "./Repo";

export default function Repos() {
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
    <div className="grid md:grid-cols-2 gap-8 p-2 md:p-8">
      {activeRepos ? activeRepos : <h1>There are no repositories</h1>}
    </div>
  );
}
