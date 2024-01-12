import React, { useState } from 'react';

const ColorBoxes = () => {
    const possibleColors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];

    const [boxes, setBoxes] = useState(possibleColors.map(color => ({ color, changed: false })));

    const handleChangeColor = () => {
        const randomIndex = Math.floor(Math.random() * boxes.length);
        const newColor = possibleColors[Math.floor(Math.random() * possibleColors.length)];
        const updatedBoxes = [...boxes];
        updatedBoxes[randomIndex] = { color: newColor, changed: true };
        setBoxes(updatedBoxes);
    };

    return (
        <div>
            {boxes.map((box, index) => (
                <div
                    key={index}
                    className={`colorBox ${box.changed ? 'changed' : ''}`}
                    style={{ backgroundColor: box.color }}
                >
                    {box.changed ? 'changed!' : ''}
                </div>
            ))}
            <button onClick={handleChangeColor}>Change</button>
        </div>
    );
};

export default ColorBoxes;
