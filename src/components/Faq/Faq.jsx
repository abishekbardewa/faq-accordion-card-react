import React, { useState } from 'react';
import box from '../../assets/images/illustration-box-desktop.svg';
import iconArrowDown from '../../assets/images/icon-arrow-down.svg';
import faqData from '../../utils/FaqData';
import './Faq.scss';

const Faq = () => {
	const [isVisible, setVisible] = useState(false);

	const handleToggle = (idx) => {
		console.log(idx);
		if (isVisible === idx) {
			return setVisible(false);
		}
		setVisible(idx);
	};
	return (
		<>
			<main className="wrapper">
				<div className="image__wrapper">
					<div className="image__wrapper__inner"></div>
					<img src={box} className="box" alt={box} />
				</div>
				<div className="accordion__wrapper">
					<h1 className="accordion__title">FAQ</h1>
					{faqData.map((faq, idx) => {
						return (
							<div key={idx} className="accordion__questions">
								<div className="accordion__question-answer">
									<div className="question" onClick={() => handleToggle(idx)}>
										<h3 className={`${isVisible === idx ? 'question-title-active' : 'question-title'}`}>{faq.question}</h3>
										<img src={iconArrowDown} className={`${isVisible === idx ? 'icon-rotated' : 'down-icon'}`} alt={iconArrowDown} />
									</div>
									{isVisible === idx ? (
										<div className="answer">
											<p>{faq.answer}</p>
										</div>
									) : null}
								</div>
							</div>
						);
					})}
				</div>
			</main>
		</>
	);
};

export default Faq;
