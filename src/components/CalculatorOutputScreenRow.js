import React from 'react';

export function CalculatorOutputScreenRow(props) {
	return <div className='display'>
		<input type="text" readOnly value={props.value} />
	</div>
}