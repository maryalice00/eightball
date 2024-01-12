import React from 'react';
import EightBall from './EightBall';
import ColorBoxes from './ColorBoxes';

function App() {
    return (
        <div>
            <div id="eightBallContainer">
                <EightBall />
            </div>
            <div id="colorBoxesContainer">
                <ColorBoxes />
            </div>
        </div>
    );
}

export default App;
