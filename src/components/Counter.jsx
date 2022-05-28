import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counterReducer";

const Counter = () => {
  const num = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>

      <p>The Count is: {num}</p>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </>);
};

export { Counter };