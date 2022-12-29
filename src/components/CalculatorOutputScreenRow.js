import React from 'react'
import PropTypes from 'prop-types'

export function CalculatorOutputScreenRow(props) {
	CalculatorOutputScreenRow.propTypes = {
		props,
		className: PropTypes.node.isRequired,
		value: PropTypes.node.isRequired,
	}

	return (
		<div className='display'>
			<input
				className={props.className}
				type='text'
				readOnly
				value={props.value}
			/>
		</div>
	)
}
