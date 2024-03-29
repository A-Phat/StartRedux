// "use strict";
// import {createStore} from 'redux';

const redux = require('redux');
const createStore = redux.createStore;

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

     

let store = createStore(counter)

store.subscribe(() => {
  console.log(store.getState())
},
(err) => {
  console.log("eeeeeee");
}
)

store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1 
