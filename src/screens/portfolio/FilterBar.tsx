import React, { useState, useEffect, useContext } from "react";
import Context from "../../context/context";
import Topic from "./Topic";

export default function FilterBar() {
  const { filters } = useContext(Context);

  return (
    <div
      id="filterBar"
      className="flex flex-wrap rounded-lg p-2 gap-2 w-full md:w-7/12"
    >
      <h1 id="filterBarTitle" className="px-4 py-2 font-bold">
        Filters:
      </h1>
      {filters.length !== 0 ? (
        filters.map((filter) => {
          return <Topic name={filter} />;
        })
      ) : (
        <button className="filter p-2 rounded" disabled>
          Empty
        </button>
      )}
    </div>
  );
}
