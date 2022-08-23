import { useContext, useEffect, useState } from "react";
import Repos from "./Repos";
import "./Portfolio.scss";
import Loading from "../../components/loading/Loading";
import Context from "../../context/context";
import axios from "axios";
import FilterBar from "./FilterBar";

type Props = {};

const Portfolio = (props: Props) => {
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
    <div>
      {isLoading ? (
        <div className="text-center grid content-center">
          <Loading />
        </div>
      ) : (
        <div className="px-2 flex flex-col justify-center items-center">
          <FilterBar />
          <Repos />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
