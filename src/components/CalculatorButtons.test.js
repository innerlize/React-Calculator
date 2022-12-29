import React from 'react';
import { render, screen } from '@testing-library/react';
import CalculatorButtons from './CalculatorButtons';

beforeAll(() => {
	render(<CalculatorButtons />);
});


test('Check if renders buttons', () => {
	const expectedValues = [
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'Del',
		'C',
		'=',
		'+',
		'-',
		'/',
		'*',
		'%',
	];

	const buttons = screen.getAllByRole('button');

	buttons.map(button => expect(expectedValues).toContain(button.value));
});
