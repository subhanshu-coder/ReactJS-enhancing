import { createContext, useState } from "react";

export const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

import { useContext } from "react";
import { CounterContext } from "./CounterContext";

function Counter() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;

import { createContext, useContext } from "react";

const UserContext = createContext();

function User() {
  const user = useContext(UserContext);

  return <h1>Hello {user}</h1>;
}

function Example() {
  return (
    <UserContext.Provider value="Subhanshu">
      <User />
    </UserContext.Provider>
  );
}