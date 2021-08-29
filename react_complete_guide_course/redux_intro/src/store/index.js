

//import {createStore} from "redux";

import {configureStore} from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";


/*
function counterReducer(state = initialState, action)
{
    if(action.type === "increment")
    {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        };
    }
    else if(action.type === "decrement")
    {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    }
    else if(action.type === "changeBy")
    {
        return {
            counter: state.counter + action.amount,
            showCounter: state.counter
        };
    }
    else if(action.type === "toggleCounter")
    {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        };
    }
    else
    {
        return state;
    }
};*/

//const store = createStore(counterReducer);
//const store = createStore(counterSlice.reducer);

const store = configureStore({
    reducer: {counterReducer: counterReducer, authReducer: authReducer}
});




export default store;