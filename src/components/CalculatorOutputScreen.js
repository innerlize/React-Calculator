import React from 'react';
import { CalculatorOutputScreenRow } from './CalculatorOutputScreenRow.js';

export function CalculatorOutputScreen({question, answer}) {
	return <div>
		<br />
		<br />
		
		First values:
		<CalculatorOutputScreenRow className='firstValue' value={question} />

		<br />

		Result:
		<CalculatorOutputScreenRow className='result' value={answer} />
	</div>
}