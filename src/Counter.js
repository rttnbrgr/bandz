// ES5
// var createStore = Redux.createStore;

// Babel && NPM
import { createStore } from 'redux';

// ES6 Destructured
// const { createStore } = Redux;

import React, { Component } from 'react';

// const counter = (state = 0)
// const store = createStore(storeReducer)

// class counter extends React.Component {
// 	render() {
// 		return (
// 		)
// 	}
// }


// const createStore = (reducer) => {
//   let state;
//   let listeners = [];
  
//   const getState = () => state;
  
//   const dispatch = (action) => {
//     state = reducer(state, action);
//     listeners.forEach(listener => listener());
//   };
  
//   const subscribe = (listener) => {
//       listeners.push(listener);
//       // unsub
//       return() => {
//         listeners = listeners.filger(l => l !== listener);
//       }
//   };
  
//   dispatch({});
  
//   return { getState, dispatch, subscribe };
  
// };

// the Reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  }
}

// counter component
const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onDecrement}>-</button>
    <button onClick={onIncrement}>+</button>
  </div>
)

const { createStore } = Redux;
const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onDecrement={() => store.dispatch({ type: 'DEC' })}
      onIncrement={() => store.dispatch({ type: 'INC' })}
    />,
    document.getElementById('root')    
  );
}

store.subscribe(render);
render();

// document.addEventListener('click', () => {
//   store.dispatch({ type: 'INC' });
// })