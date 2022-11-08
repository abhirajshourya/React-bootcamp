// import redux
const redux = require("redux");

// the reducer function for redux-store
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// create redux-store
const store = redux.createStore(counterReducer);

// subcriber function
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// subscribe to the store
store.subscribe(counterSubscriber);

// dispatch-actions
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
