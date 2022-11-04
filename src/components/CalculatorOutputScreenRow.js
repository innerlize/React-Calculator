import React from 'react';

export function CalculatorOutputScreenRow(props) {
	return <div>
		<input type="text" readOnly value={props.value} />
	</div>
}