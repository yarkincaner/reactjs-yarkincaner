import { React, useState, useEffect } from "react";

export default function FilterBar(props) {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setFilters(props.filters);
    console.log(filters);
  }, [props]);

  return (
    <div id="filterBar" className="flex flex-wrap rounded-lg p-4 gap-2">
      <h1 id="filterBarTitle" className="px-4 py-2 font-bold">
        Filters:{" "}
      </h1>
      {filters.length !== 0 ? (
        filters.map((filter) => {
          return (
            <p key={filters.indexOf(filter)} className="filter p-2 rounded">
              {filter}
            </p>
          );
        })
      ) : (
        <p className="filter p-2 rounded">Empty</p>
      )}
    </div>
  );
}
