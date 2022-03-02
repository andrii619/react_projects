//npm init
//npm install redux 


const redux = require('redux');



const counterReducer = (state={counter:0}, action) => {
	
	console.log("state reducer:", state);
		return {
			counter: state.counter + 1
		};
}

const store = redux.createStore(counterReducer);

console.log(store.getState());

const counterSubscriber = () => {
	
	
	//gives the latest state
	console.log("state subscriber1: ");
	const state = store.getState();
	console.log("state subscriber2: ",state);
}

// subscribe to state updates
store.subscribe(counterSubscriber);



//store.dispatch({type: "increment"});
