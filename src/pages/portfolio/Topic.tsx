import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import Context from "../../context/context";

type Props = {
  name: string;
};

const Topic = (props: Props) => {
  const { filters, setFilters } = useContext(Context);

  const handleClick = () => {
    var array = [...filters];
    if (filters.includes(props.name)) {
      var index = array.indexOf(props.name);
      if (index !== -1) {
        array.splice(index, 1);
        setFilters(array);
      }
    } else {
      array.push(props.name);
      array.sort();
      setFilters(array);
    }
    // console.log(filters);
  };

  return (
    <div>
      {filters.includes(props.name) ? (
        <button
          className="topic-active h-full shadow-md rounded-lg text-center p-2 text-sm flex"
          onClick={handleClick}
        >
          <div>{props.name}</div>
          <div className="ml-2">
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </button>
      ) : (
        <button
          className="topic shadow-md rounded-lg text-center p-2 text-sm"
          onClick={handleClick}
        >
          {props.name}
        </button>
      )}
    </div>
  );
};

export default Topic;
