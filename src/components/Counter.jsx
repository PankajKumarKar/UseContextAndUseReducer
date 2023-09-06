import React from "react";
import { useCounter } from "../Contexts/CounterContext";

export default function Counter() {
  const { state, dispatch } = useCounter();

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-y-5">
      <h1 className="text-3xl font-extrabold">{state.count}</h1>
      <div className="flex gap-x-6">
        <button
          onClick={handleIncrement}
          className="bg-red-400 px-2 py-2 rounded-md shadow-sm hover:bg-red-600 text-lg font-semibold text-white"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="bg-red-400 px-2 py-2 rounded-md shadow-sm hover:bg-red-600 text-lg font-semibold text-white"
        >
          Decrement
        </button>

        <button
          onClick={() => dispatch({ type: "incrementByAmount", payload: 10 })}
          className="bg-red-400 px-2 py-2 rounded-md shadow-sm hover:bg-red-600 text-lg font-semibold text-white"
        >
          incrementByAmount
        </button>

        <button
          onClick={handleReset}
          className="bg-red-400 px-2 py-2 rounded-md shadow-sm hover:bg-red-600 text-lg font-semibold text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
