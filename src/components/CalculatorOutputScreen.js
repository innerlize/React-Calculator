import React from 'react'
import { CalculatorOutputScreenRow } from './CalculatorOutputScreenRow.js'
import PropTypes from 'prop-types'

export function CalculatorOutputScreen({ question, answer }) {
	CalculatorOutputScreen.propTypes = {
		question,
		answer: PropTypes.node.isRequired,
	}

	return (
		<div>
			<br />
			<br />
			First values:
			<CalculatorOutputScreenRow className='firstValue' value={question} />
			<br />
			Result:
			<CalculatorOutputScreenRow className='result' value={answer} />
		</div>
	)
}
