import React from 'react';

function ButtonsPanel(props) {
    return (
        <div className="buttons-panel">
            <button onClick={() => {
                props.buttonMethod('add')
            }}>Add 1</button>
            <button onClick={() => {
                props.buttonMethod('reInit')
            }}>ReInit</button>
            <button onClick={() => {
                props.buttonMethod('reset')
            }}>Reset</button>
        </div>
    )
}

export default ButtonsPanel;