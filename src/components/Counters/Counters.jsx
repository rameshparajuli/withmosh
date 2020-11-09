import React, { useState } from "react";
import { Counter } from "../Counter";
const counts = [
  {
    id: 0,
    value: 0,
  },
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
  {
    id: 3,
    value: 0,
  },
  {
    id: 4,
    value: 0,
  },
];

const Counters = () => {
  const [allCounters, setAllCounters] = useState(counts);
  const handleDelete = (id) => {
    const counters = allCounters.filter((item) => item.id !== id);
    setAllCounters(counters);
  };

  return (
    <div>
      {allCounters.map((item) => (
        <Counter
          key={item.id}
          value={item.value}
          id={item.id}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};
export default Counters;
