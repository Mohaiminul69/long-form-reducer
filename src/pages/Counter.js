import React, { useReducer } from "react";

const Counter = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    if (action.type === "INCREMENT") return state + 1;
    else if (action.type === "DECREMENT") return state - action.payload.num;
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="bg-teal-800 h-screen w-full flex items-center justify-center">
      <div className="bg-purple-500 rounded-lg p-10 text-white flex flex-col items-center">
        <h1 className="text-2xl mb-4">{state}</h1>
        <div>
          <button
            className="p-3 rounded-lg m-1 bg-red-400 text-white"
            onClick={() => dispatch({ type: "DECREMENT", payload: { num: 5 } })}
          >
            Decrement
          </button>
          <button
            className="p-3 rounded-lg m-1 bg-red-400 text-white"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
