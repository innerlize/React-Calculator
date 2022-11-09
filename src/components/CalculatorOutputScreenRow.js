import React from 'react';

export function CalculatorOutputScreenRow(props) {
	return <div className='display'>
		<input className={props.className} type="text" readOnly value={props.value} />
	</div>
}