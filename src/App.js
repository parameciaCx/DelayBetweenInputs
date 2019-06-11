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

		switch (e.nativeEvent) {
			case MouseEvent:
				break;

			case KeyboardEvent:
				break;

			case WheelEvent:
				break;
			default:
		}

		console.log(e);
		let a = e.timeStamp;
		let str = (a - prev).toFixed(3).toString();
		prev = a;
		const display = document.getElementById('inputDisplayer');
		const msg = document.createElement('div');

		msg.innerText = str;
		display.append(msg);
		display.scrollTop = display.scrollHeight;
	};

	render() {
		// const abcd = this.state.mainStr.map((str) => {
		// 	return <div>{`${str.toString()}`}</div>;
		// });
		return (
			<div
				id="inputDisplayer"
				tabIndex="0"
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
