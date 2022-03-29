import axios from "axios";
import * as React from "react";
import Loading from "../../Loading";
import Repos from "./Repos";

export function Portfolio() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [repos, setRepos] = React.useState([]);
  const myUrl = "https://api.github.com/users/yarkincaner/repos";

  async function fetchRepos() {
    try {
      const result = await axios(myUrl);
      setRepos(result);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    fetchRepos();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="pb-24 lg:pb-0 flex justify-center">
      <Repos repos={repos} />
    </div>
  );
}
