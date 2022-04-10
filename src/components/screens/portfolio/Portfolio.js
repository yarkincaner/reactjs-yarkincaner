import { React } from "react";
import Repos from "./Repos";
import "./Portfolio.scss";

export function Portfolio() {
  return (
    <div className="pb-24 lg:pb-0 flex flex-col items-center">
      <Repos />
    </div>
  );
}
