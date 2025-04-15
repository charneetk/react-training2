import React from "react";

export default function Counter(props) {
  const { counter, onIncrement, onDecrement, onDelete } = props;
  return (
    <React.Fragment>
      <h4>Counter#{counter.id}</h4>
      <button
        className="btn btn-secondary btn-small"
        disabled={handleButtonDisabling()}
        onClick={() => onDecrement(counter)}
      >
        Decrement
      </button>
      <span className="badge badge-primary m-2">{formatCount()}</span>
      <button
        className="btn btn-secondary btn-small"
        onClick={() => onIncrement(counter)}
      >
        Increment
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => onDelete(counter.id)}
      >
        Delete
      </button>
    </React.Fragment>
  );

  function handleButtonDisabling() {
    return counter.value <= 0 ? true : false;
  }

  function formatCount() {
    console.debug("in here");
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  }
}
