import React, { Component } from 'react';

let prev = 0;
class App extends Component {
	constructor() {
		super();

		this.state = {
			mainStr: []
		};
		this.eventHandler.bind = this.eventHandler.bind(this);
	}

	eventHandler = (e) => {
		e.persist();
		let a = e.timeStamp;
		this.setState({ mainStr: [ ...this.state.mainStr, (a - prev).toString() ] });
		prev = a;
	};

	render() {
		const abcd = this.state.mainStr.map((str) => {
			return <div>`\n${str.toString()}`</div>;
		});
		return (
			<div
				tabIndex="0"
				className="App"
				onKeyDown={this.eventHandler}
				onKeyUp={this.eventHandler}
				onMouseDown={this.eventHandler}
				onMouseUp={this.eventHandler}
				onWheel={this.eventHandler}>
				PERFORM INPUTS HERE
				{abcd}
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
