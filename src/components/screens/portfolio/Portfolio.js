import { React, useState } from "react";
import Repos from "./Repos";
import "./Portfolio.scss";
import Loading from "../../loading/Loading";

export function Portfolio() {
  // const [isLoading, setLoading] = useState(true);
  return (
    <div className="pb-12 flex flex-col items-center">
      {/* {isLoading ? <Loading /> : null} */}
      <Repos />
    </div>
  );
}
