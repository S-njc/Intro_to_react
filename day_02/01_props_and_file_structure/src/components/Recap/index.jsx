import React, { useState } from 'react';

const Index = () => {
    console.log(useState(0));
    const [bgColour, setBgColour] = useState('lightpink');

    const changeBg = (colour) => setBgColour(colour);

    const resetColour = () => setBgColour('lightpink');

    return (
        <>
            <div
                className="box"
                style={{ backgroundColor: bgColour }}
                onMouseEnter={() => { changeBg('cadetblue'); }}
                onMouseLeave={() => { changeBg('gold'); }}
            >
                App
            </div>
            <button
                onClick={resetColour}
            >
                Reset Colour
            </button>
        </>
    );
};

export default Index;
