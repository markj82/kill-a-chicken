import React from 'react'
import Modal from './Modal/Modal'
import './ControlPanel.css'

const ControlPanel = props => {
    return (
        <div id="control-panel"> 
            <button
                id="play"
                onClick={props.clickedGameStart}>
                Play
            </button>
            <button
                id="stop"
                onClick={props.clickedGameStop}>
                Stop
            </button>
            <button
                id="reset"
                onClick={props.clickedGameReset}>
                Reset
            </button>

            
            <div class="dropdown">
                <button class="dropbtn">Theme</button>
                <div class="dropdown-content">
                    <a onClick={props.space}>Space</a>
                    <a onClick={props.farm}>Farm</a>
                    <a onClick={props.sea}>Under the sea</a>
                </div>
            </div>

           
            <button
                onClick={props.levelChoose}
                className="levels"
                id="easy"
                >
                Easy
            </button>
            <button
                onClick={props.levelChoose}
                className="levels"
                id="medium">
                Medium
            </button>
            <button
                onClick={props.levelChoose}
                className="levels" id="hard">
                Hard
            </button>
            <button
                onClick={props.levelChoose}
                className="levels"
                id="master">
                Master
            </button>
            <h2 id="points-score">Points: {props.score}</h2>
            <h2 id="count-down">Time Left: {props.timeLeft > 9 ? props.timeLeft : `0${props.timeLeft}`}s</h2>

            {/* <button onClick={props.test}>test</button> */}
            <Modal />
        </div>
     );
}
 
export default ControlPanel;