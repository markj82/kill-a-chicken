import React from 'react';
import './App.css';
import Table from './Table'
import ControlPanel from './ControlPanel'
import chickenSound from '../sounds/chicken-sound.mp3'

class App extends React.Component {

  state = {
    allChickens:[
      {id: 'a', isVisible: false},
      {id: 'b', isVisible: false},
      {id: 'c', isVisible: false},
      {id: 'd', isVisible: false},
      {id: 'e', isVisible: false},
      {id: 'f', isVisible: false},
      {id: 'g', isVisible: false},
      {id: 'h', isVisible: false},
      {id: 'i', isVisible: false},
      {id: 'j', isVisible: false},
      {id: 'k', isVisible: false},
      {id: 'l', isVisible: false},
      {id: 'm', isVisible: false},
      {id: 'n', isVisible: false},
      {id: 'o', isVisible: false},
      {id: 'p', isVisible: false}
    ],
    points: 0,
    level: 800
  }
  handleChickenHit = event => {
    const newChickens = [...this.state.allChickens]
    const id = event.target.id
    const index = newChickens.findIndex(chicken => chicken.id === id)
    newChickens[index] = {id:id, isVisible: false} 
    this.setState({
      allChickens: newChickens,
      points: this.state.points + 1
    })
    // play the sound
    // chickenSound.play()
  }
  chickenGenerator = () => {
    const newChickens = [...this.state.allChickens]
    const randomIndex = Math.floor(Math.random() * newChickens.length)
    newChickens[randomIndex].isVisible = true
    this.setState({
      allChickens: newChickens
    })
    setTimeout(() => {
      newChickens[randomIndex].isVisible = false
      this.setState({
        allChickens: newChickens
      })
    },2000)
  }

  handleGame = () => {
    setInterval(this.chickenGenerator, this.state.level)
  }

  handleLevel = event => {
    console.log(event.target)
    if(event.target.value === "Easy") {
      this.setState({
        level: 4000
      })
    }
  }

  render() {
    return (
      <div className="App">
        <ControlPanel clicked={this.handleGame} score={this.state.points} levelChoose={this.handleLevel}/>
        <Table hit={this.handleChickenHit} data={this.state.allChickens}/>
      </div>
    );
  } 
}


export default App;
