import classes from './Counter.module.css';

import {useSelector, useDispatch} from "react-redux";

import {counterActions} from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector( state => {
    return state.counterReducer.counter;
  });
  const showCounter = useSelector(state => {
    return state.counterReducer.showCounter;
  });
  const incrementHandler = (event) => {
    //dispatch({type: "increment"});
    dispatch(counterActions.increment());
  };
  const decrementHandler = (event) => {
    //dispatch({type: "decrement"});
    dispatch(counterActions.decrement());
  };

  const change5Handler = (event) => {
    //dispatch({type:"changeBy", amount: 5});
    dispatch(counterActions.changeBy(5));// action {type: uniique_id, payload: {}}
  };
  const toggleCounterHandler = (event) => {
    //dispatch({type: "toggleCounter"});
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={change5Handler}>Change by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
