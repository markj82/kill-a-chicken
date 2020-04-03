import React from "react";
import Popup from "reactjs-popup";
import './Modal.css'

class MyModal extends React.Component {

    state = {
        currentPlayer: '',
        scorePlayer: 0
    }

    // ?? start game here? or by the exit from modal?
    startGame = () => {
        console.log('start game')
    }

    inputChangeHandler = e => {
        console.log(e.target.value)
        this.setState({
          currentPlayer: e.target.value
        })
    }

    // Join button, add to localStorage
    addPlayerHandler = e => {
      console.log(this.state.currentPlayer)
      localStorage.setItem('player1', this.state.currentPlayer)
    }


    render() {
      return (
        <Popup trigger={<button className="button">MENU</button>} modal>
          {close => (
            <div className="modal">
              <a className="close" onClick={close}>
                &times;
              </a>
              <div className="header"> GAME MENU </div>
              <div className="content">
                
                <input onChange={this.inputChangeHandler} id="input-name" type="text" placeholder="enter your name..."/>
                <button onClick={this.addPlayerHandler} id="join-button">Join</button>

                <br/>
                Choose Level:
                <br/>
                Choose Theme:
              
              </div>
              <div className="actions">
                
                  <button className="button" id="start-button" onClick={this.clickedGameStart} > START GAME </button>

                  <button className="button" id="quit-button"
                          onClick={() => {
                    console.log("modal closed ");
                    
                    close();
                  }}
                >
                  QUIT
                </button>
              </div>
            </div>
          )}
        </Popup>
  )
};
}
export default MyModal;

/*
const inputs = document.querySelectorAll('.form-input')

inputs.forEach(input => {
    input.addEventListener('change', () => { // this function closure a value and store it
        localStorage.setItem(input.name, input.value) // 
    })
})
  

inputs.forEach(input => {
    const inputValue = localStorage.getItem(input.name);
    input.value = inputValue
})

inputs.forEach(input => {
    input.addEventListener('change', (event) => { // this function closure a value and store it
        localStorage.setItem(event.target.name, event.target.value) 
    })
})

*/