import React, { useState } from 'react';
import answers from './answers.json';

const EightBall = () => {
    const [currentAnswer, setCurrentAnswer] = useState({ msg: 'Think of a Question', color: 'black' });

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        const newAnswer = answers[randomIndex];
        setCurrentAnswer(newAnswer);
    };

    return (
        <div id="eightBall" style={{ backgroundColor: currentAnswer.color }} onClick={handleClick}>
            {currentAnswer.msg}
        </div>
    );
};

export default EightBall;
