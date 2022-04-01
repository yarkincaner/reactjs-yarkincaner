import { React, useState, useEffect } from "react";
import Repo from "./Repo";
import Loading from "../../loading/Loading";

export default function Repos(props) {
  const { repos } = props;
  const [reposList, setReposList] = useState([]);

  async function listRepos(filter) {
    const list =
      (await repos.length) === 0 ? (
        <Loading />
      ) : (
        repos.data.map((repo) => (
          <Repo
            key={repo.id}
            name={repo.name}
            description={repo.description}
            topics={repo.topics}
            url={repo.html_url}
          />
        ))
      );

    setReposList(list);
  }

  useEffect(() => {
    listRepos();
  }, [repos]);

  return (
    <div className="p-2 sm:p-3 md:p-4 lg:p-5 grid grid-cols-1 md:grid-cols-2 gap-8">
      {reposList}
    </div>
  );
}
