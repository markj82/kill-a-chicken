import React from 'react'
import './ControlPanel.css'

const ControlPanel = props => {
    return (
        <div id="control-panel"> 
            <button onClick={props.clicked}>Play</button>
            {/* <button onClick={}></button> */}
            <h2>Points: 0</h2>
        </div>
     );
}
 
export default ControlPanel;