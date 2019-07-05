import React from 'react'
import './ControlPanel.css'

const ControlPanel = props => {
    return (
        <div id="control-panel"> 
            <button id="play" onClick={props.clicked}>Play</button>
            {/* <button onClick={}></button> */}
            <button onClick={props.levelChoose} id="levels">Easy</button>
            <button onClick={props.levelChoose} id="levels">Medium</button>
            <button onClick={props.levelChoose} id="levels">Hard</button>
            <h2>Points: {props.score}</h2>
        </div>
     );
}
 
export default ControlPanel;