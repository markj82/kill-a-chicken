import React from 'react';
import './App.css';
import Table from './Table'
import ControlPanel from './ControlPanel'

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
    ]
  }
  handleChickenHit = event => {
    const newChickens = [...this.state.allChickens]
    const id = event.target.id
    const index = newChickens.findIndex(chicken => chicken.id === id)
    newChickens[index] = {id:id, isVisible: false} 
    this.setState({
      allChickens: newChickens
    })
  }
  chickenGenerator = () => {
    const newChickens = [...this.state.allChickens]
    const randomIndex = Math.floor(Math.random() * newChickens.length)
    newChickens[randomIndex].isVisible = true
    this.setState({
      allChickens: newChickens
    })
  }

  handleGame = () => {
    console.log("game")
    setInterval(this.chickenGenerator, 800)
  }

  render() {
    return (
      <div className="App">
        <ControlPanel clicked={this.handleGame}/>
        <Table hit={this.handleChickenHit} data={this.state.allChickens}/>
      </div>
    );
  } 
}


export default App;
