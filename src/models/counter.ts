import {useState,useCallback} from "react";

const counter = () => {
  const [counter, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(counter + 1);
  }, [counter]);

  const decrement = useCallback(() => {
    setCount(counter - 1);
  }, [counter]);
  return {counter, increment, decrement}
}
export default counter;