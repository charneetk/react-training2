import React, { useState } from "react";
import { counterList } from "../data/counters";
import Counter from "./counter";

export default function Counters() {
  const [counters, setCounters] = useState(counterList);

  const handleReset = () => {
    const updatedCounters = counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    setCounters(updatedCounters);
  };

  const handleDelete = (counterId) => {
    const updatedCounters = counters.filter(
      (counter) => counter.id !== counterId
    );
    console.log("updated counters ", updatedCounters);
    setCounters(updatedCounters);
  };

  const handleIncrement = (counter) => {
    console.log("Handle Increment ", counter.id);
    const updatedList = counters.map((counterObj) => {
      if (counterObj.id === counter.id) {
        counterObj.value++;
      }
      return counterObj;
    });
    setCounters(updatedList);
  };

  const handleDecrement = (counter) => {
    console.log("Handle Decrement ", counter.id);
    const updatedList = counters.map((counterObj) => {
      if (counterObj.id === counter.id) {
        counterObj.value--;
      }
      return counterObj;
    });
    setCounters(updatedList);
  };

  return (
    <div>
      <button className="btn btn-primary btn-small m-2" onClick={handleReset}>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
    </div>
  );
}
