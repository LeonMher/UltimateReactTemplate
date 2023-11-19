import { useState } from "react";
import "./styles.css";
import { Button } from "./components/Button/Button";
export const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Edited React Template {process.env.name}</h1>
      <p>{count}</p>
      <Button onClick={handleIncrement} variant='outlined'>
        increment
      </Button>
    </>
  );
};
