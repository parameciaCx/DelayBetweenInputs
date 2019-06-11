import React, { Component } from 'react';
import './style.css';
let prev = 0;
class App extends Component {
	constructor() {
		super();
		this.eventHandler.bind = this.eventHandler.bind(this);
	}

	eventHandler = (e) => {
		e.persist();
		let a = e.timeStamp;
		let str = (a - prev).toFixed(3).toString();
		prev = a;
		const display = document.getElementById('1234');
		const msg = document.createElement('div');
		msg.innerText = str;
		display.append(msg);
	};

	render() {
		// const abcd = this.state.mainStr.map((str) => {
		// 	return <div>{`${str.toString()}`}</div>;
		// });
		return (
			<div
				id="1234"
				tabIndex="0"
				className="App"
				onKeyDown={this.eventHandler}
				onKeyUp={this.eventHandler}
				onMouseDown={this.eventHandler}
				onMouseUp={this.eventHandler}
				onWheel={this.eventHandler}>
				PERFORM INPUTS HERE
			</div>
		);
	}
}
//
//nativeEvent: MouseEvent,KeyboardEvent,WheelEvent
//wheel: up = negative y, down=pos
//mouse: button 0=l, 1=m, 2=r type=keyup keydown
//kb: type=keyup keydown, key="x"

export default App;
