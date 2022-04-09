import { React, useState, useEffect } from "react";
import axios from "axios";
import Repo from "./Repo";
import Loading from "../../loading/Loading";

export default function Repos() {
  const [repos, setRepos] = useState([]);
  const [repoList, setRepoList] = useState([]);
  const [filters, setFilters] = useState([]);
  const myUrl = "https://api.github.com/users/yarkincaner/repos";

  function manageFilters(passedFilter) {
    if (filters.includes(passedFilter)) {
      var array = [...filters];
      var index = array.indexOf(passedFilter);
      if (index !== -1) {
        array.splice(index, 1);
        setFilters(array);
      }
    } else {
      var array = [...filters];
      array.push(passedFilter);
      array.sort();
      setFilters(array);
    }
  }

  const mapRepoList = () => {
    setRepoList(
      filters.length === 0
        ? repos.map((repo) => {
            return (
              <Repo
                key={repo.id}
                name={repo.name}
                description={repo.description}
                topics={repo.topics}
                url={repo.html_url}
                onClick={manageFilters}
              />
            );
          })
        : repos.map((repo) => {
            if (filters.every((topic) => repo.topics.includes(topic))) {
              // console.log(repo.name);
              return (
                <Repo
                  key={repo.id}
                  name={repo.name}
                  description={repo.description}
                  topics={repo.topics}
                  url={repo.html_url}
                  onClick={manageFilters}
                />
              );
            }
          })
    );
  };

  const initialize = async () => {
    await axios
      .get(myUrl)
      .then((res) => setRepos(res.data))
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (repos.length === 0) {
      initialize();
    } else {
      mapRepoList();
    }
  }, [repos]);

  useEffect(() => {
    mapRepoList();
  }, [filters]);

  return (
    <div className="p-2 mb-4 sm:p-3 md:p-4 lg:p-5 grid grid-cols-1 md:grid-cols-2 gap-8">
      {repos.length !== 0 ? repoList : <Loading />}
    </div>
  );
}
