import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../../styles/index.scss";

export function Contador(props) {
	return (
		<div>
			<div className="contador">
				<p>CONTADOR:</p>
				<div>{props.fifth}</div>
				<div>{props.fourth}</div>
				<div>{props.third}</div>
				<div>{props.second}</div>
				<div>{props.first}</div>
			</div>
		</div>
	);
}

Contador.propTypes = {
	first: PropTypes.number,
	second: PropTypes.number,
	third: PropTypes.number,
	fourth: PropTypes.number,
	fifth: PropTypes.number
};

let counter = 0;

setInterval(function() {
	const one = Math.floor(counter) % 10;
	const two = Math.floor(counter / 10) % 10;
	const three = Math.floor(counter / 100) % 10;
	const four = Math.floor(counter / 1000) % 10;
	const five = Math.floor(counter / 10000) % 10;
	counter++;

	ReactDOM.render(
		<Contador
			first={one}
			second={two}
			third={three}
			fourth={four}
			fifth={five}
		/>,
		document.querySelector("#app")
	);
}, 1000);
