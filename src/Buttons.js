import React from 'react';


function Buttons(props) {

    return (

        <div>
            <button onClick={props.buttonChangeColor}>
                red
            </button>
            <button onClick={props.buttonChangeColor}>
                blue
            </button>
            <button onClick={props.buttonChangeColor}>
                green
            </button>

        </div>

    );
}

export default Buttons


