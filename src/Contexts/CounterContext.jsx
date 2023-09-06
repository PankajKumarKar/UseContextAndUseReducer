import { createContext, useContext, useReducer } from "react";
import { counterReducer, initialState } from "../reducers/CounterReducer";

const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export const useCounter = () => {
  return useContext(CounterContext);
};
