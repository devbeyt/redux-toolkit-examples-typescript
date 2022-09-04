import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";
import { RootState } from "./../../app/store";

function Counter() {
    const { count } = useSelector((state: RootState) => state.counter1); // see store.ts
    const dispatch = useDispatch();

    return (
        <div className="Counter">
          <h1>Counter </h1>
            <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
      >
        +10
      </button>
        </div>
    )
}

export default Counter