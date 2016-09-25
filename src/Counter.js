import React, { Component } from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

class Counter extends React.Component {
	// @observable count = 0;
	@observable count = 0;
	// handleInc = ()  => {
	// 	this.count++;
	// }
	
	// handleDec = ()  => {
	// 	this.count--;
	// }
	
	render() {
		return (
			<div className="counter">
				<div className="count">{this.count}</div>
				<div className="counter__button-wrap">
					<button onClick={this.handleDec}>-</button>
					<button onClick={this.handleInc}>+</button>
				</div>
			</div>
		)
	}
}

export default Counter;