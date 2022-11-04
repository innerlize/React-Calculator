import React from 'react';

export function CalculatorButtons({handleClick}) {

	const createOperators = (e) => {
		const operators = ['+', '-', '*', '/', '%']

		const operatorButtons = operators.map((op) => {
			return <button className='operatorButton' value={op} onClick={e => handleClick(e)}>{op}</button>
		})

		return operatorButtons;
	}

	// ----------------------------------------

	const createNumbers = (e) => {
		const numbers = [];

		for(let i = 0; i < 10; i++) {
			numbers.push(<button className='numberButton' value={i} onClick={e => handleClick(e)}>{i}</button>)
		}

		return numbers;
	}

	// ----------------------------------------

	const createSpecials = (e) => {
		const specials = ['=', 'C', 'Del']

		const specialButtons = specials.map((sp) => {
			return <button className='specialButton' value={sp} onClick={e => handleClick(e)}>{sp}</button>
		})

		return specialButtons;
	}

	// ----------------------------------------

	return <div>
		{createOperators()}
		{createNumbers()}
		{createSpecials()}
	</div>;

}