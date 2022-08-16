import React, { useContext, useEffect, useState } from "react";
import Repos from "./Repos";
import "./Portfolio.scss";
import Loading from "../../loading/Loading";
import Context from "../../../context/context";
import axios from "axios";
import FilterBar from "./FilterBar";
import { motion } from "framer-motion";

export function Portfolio() {
  const context = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchRepos() {
    await axios
      .get("https://api.github.com/users/yarkincaner/repos")
      .then((res) => {
        context.setRepos(res.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
    >
      {isLoading ? (
        <div className="text-center mt-8">
          <Loading />
        </div>
      ) : (
        <div className="pb-12 px-2 flex flex-col justify-center items-center">
          <FilterBar />
          <Repos />
        </div>
      )}
    </motion.div>
  );
}
