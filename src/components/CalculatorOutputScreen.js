import React from 'react';
import { CalculatorOutputScreenRow } from './CalculatorOutputScreenRow.js';

export function CalculatorOutputScreen({question, answer}) {
	return <div>
		<br />
		<br />
		
		First values:
		<CalculatorOutputScreenRow value={question} />

		<br />

		Result:
		<CalculatorOutputScreenRow value={answer} />
	</div>
}