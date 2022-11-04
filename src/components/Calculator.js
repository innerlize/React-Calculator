import React, { useState } from 'react';
import { CalculatorTitle } from './CalculatorTitle.js';
import { CalculatorOutputScreen } from './CalculatorOutputScreen.js';
import { CalculatorButtons } from './CalculatorButtons.js';


export function Calculator(props) {

	let [question, setQuestion] = useState('');
	let [answer, setAnswer] = useState('');

	function handleClick(e) {

		let value = e.target.value;


		switch(value) {
			case '=': {

				if (question !== '') {

					var ans = '';

					try {
						ans = eval(question)
					} catch(err) {
						setAnswer('Math Error');
					}

					if (answer === undefined) {
						setAnswer('Math Error');
					} else {
						setAnswer(ans);
						setQuestion('');
					}

					console.log(ans);

					break;
				}
			}

			case 'C': {
				setQuestion('');
				setAnswer('');

				break;
			}

			case 'Del': {
				var str = question;

				str = str.substr(0, str.length - 1);

				setQuestion(str);

				break;
			}

			default: {
				setQuestion( question += value )
				console.log(question);

				break;
			}
		}
	}

	return <section>
		<CalculatorTitle />
		<CalculatorOutputScreen question={question} answer={answer} />
		<CalculatorButtons handleClick={e => handleClick(e)} />
	</section>
}