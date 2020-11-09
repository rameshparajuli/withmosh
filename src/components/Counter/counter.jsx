import React, { useState } from "react";

const Counter = ({ value, ...props }) => {
  const { id, onDelete } = props;
  // ----------------------- constants ----------------------

  const [number, setNumber] = useState(value);
  // const [imageUrl, setImageUrl] = useState(`https://picsum.photos/200`);

  const formatCount = () => {
    return number === 0 ? "Zero" : number;
  };

  const handleIncrement = () => setNumber(number + 1);
  const handleDecrement = () => setNumber(number - 1);

  const getBadgeClasses = () => {
    let classes = "badge  m-2 badge-";
    classes += number === 0 ? "warning" : "primary";
    return classes;
  };

  return (
    // we use React.Fragment to not use another div inside of only root div inside
    // or we can use only <> </> instead of React.Fragment
    <div style={styles.container}>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button className="btn btn-secondary btn-sm" onClick={handleIncrement}>
        Increment
      </button>

      <button
        onClick={() => onDelete(id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </div>
  );
};

const styles = {
  container: {
    margin: 10,
  },
};

export default Counter;
