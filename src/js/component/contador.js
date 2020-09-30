import React from "react";
//import { render } from "react-dom";
import "../../styles/index.scss";

export class Contador extends React.Component {
	constructor() {
		super();
		this.state = {
			contador: 1
		};

		setInterval(
			() => this.setState({ contador: this.state.contador + 1 }),
			1000
		);
	}

	render() {
		return (
			<div className="container">
				<p>CONTADOR:</p>
				<div className="row">
					<div className="col">
						<p>{this.state.contador}</p>
					</div>
				</div>
			</div>
		);
	}
}

//render(<SecondsCounter />, document.getElementById("app"));
