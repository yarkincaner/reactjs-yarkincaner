import React from "react";
import Repo from "./Repo";

export default function Repos(props) {
  const { repos } = props;

  const listRepos =
    repos.length !== 0 ? (
      repos.data.map((repo) => (
        <Repo
          key={repo.id}
          name={repo.name}
          description={repo.description}
          topics={repo.topics}
          url={repo.html_url}
        />
      ))
    ) : (
      <h1>No Repos Found</h1>
    );

  return (
    <div className="p-2 sm:p-3 md:p-4 lg:p-5 grid grid-cols-1 md:grid-cols-2 gap-8">
      {listRepos}
    </div>
  );
}
