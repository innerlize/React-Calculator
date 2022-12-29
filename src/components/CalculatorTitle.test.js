import { render, screen } from '@testing-library/react';
import CalculatorTitle from './CalculatorTitle.js';


test('Check if renders buttons', () => {
    render(<CalculatorTitle />)

    const title = screen.getByText(/calculator/i)
    const subTitle = screen.getByText(/by alan aguilar/i)

    expect(title).toBeInTheDocument;
    expect(subTitle).toBeInTheDocument;
})