import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import './index.css';

// ReactDOM.render(
//   <Counter />,
//   document.getElementById('root')
// ); 

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
  <div className="counter">
    <h1>{value}</h1>
    <button onClick={onDecrement}>-</button>
    <button onClick={onIncrement}>+</button>
  </div>
)

// const { createStore } = Redux;
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
