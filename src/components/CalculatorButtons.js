import React from 'react';
import PropTypes from 'prop-types';

function CalculatorButtons({ handleClick }) {
	CalculatorButtons.propTypes = {
		handleClick: PropTypes.node.isRequired,
	};

	const createOperators = () => {
		const operators = ['+', '-', '*', '/', '%'];

		const operatorButtons = operators.map(op => {
			return (
				<button
					className='button operatorButton'
					key={op}
					value={op}
					onClick={e => handleClick(e)}>
					{op}
				</button>
			);
		});

		return operatorButtons;
	};

	// ----------------------------------------

	const createNumbers = () => {
		const numbers = [];

		for (let i = 0; i < 10; i++) {
			numbers.push(
				<button
					key={i}
					className='button numberButton'
					value={i}
					onClick={e => handleClick(e)}>
					{i}
				</button>
			);
		}

		return numbers;
	};

	// ----------------------------------------

	const createSpecials = () => {
		const specials = ['=', 'C', 'Del'];

		const specialButtons = specials.map(sp => {
			return (
				<button
					className='button specialButton'
					key={sp}
					value={sp}
					onClick={e => handleClick(e)}>
					{sp}
				</button>
			);
		});

		return specialButtons;
	};

	// ----------------------------------------

	return (
		<div>
			<div>
				{createOperators()}
			</div>

			<div>
				{createNumbers()}
			</div>

			<div>
				{createSpecials()}
			</div>
		</div>
	);
}


export default CalculatorButtons;