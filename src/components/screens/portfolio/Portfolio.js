import axios from "axios";
import { React, useState, useEffect } from "react";
import Repos from "./Repos";
import "./Portfolio.scss";
import Loading from "../../loading/Loading";

export function Portfolio() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [repos, setRepos] = useState([]);

  // async function getRepos() {
  //   var self = this;
  //   await axios
  //     .get(myUrl)
  //     .then((res) => {
  //       console.log(res.data);
  //       const result = res.data;
  //       console.log(result);
  //       setRepos(result);
  //       console.log(repos);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  // useEffect(() => {
  //   if (repos.length === 0) {
  //     getRepos();
  //     // console.log(repos);
  //     console.log("here");
  //   }
  //   // console.log(repos);
  // }, [repos]);
  return (
    <div className="pb-24 lg:pb-0 flex justify-center">
      <Repos />
    </div>
  );
}
