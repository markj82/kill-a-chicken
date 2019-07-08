import React from 'react';
import './App.css';
import Table from './Table'
import ControlPanel from './ControlPanel'

import space from '../local-img/space.gif'
import sea from '../local-img/sea.gif'
import cows from '../local-img/cows.gif'


// import chickenSound from '../sounds/chicken-sound.mp3'

class App extends React.Component {

  state = {
    myStyle: {
      backgroundImage: `url(${cows})`,
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundSize: "cover"
    },

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
    isGameActive: false,
    points: 0,
    level: 2000,
    hideLevel: 2000,
    timeLeft: 30
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
    // play the sound here
    // chickenSound.play()
  }

  chickenGenerator = () => {
    if(this.state.isGameActive && this.state.timeLeft > 0) {
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
      },this.state.hideLevel)
    }
  }

  handleGameStart = () => {
    this.setState({
      isGameActive: true
    })
    this.intervalIndex = setInterval(this.chickenGenerator, this.state.level)
    this.intervalTimerIndex = setInterval(this.timer, 1000)
  }

  handleGameStop = () => {
    this.setState({
      isGameActive: false
    })
    clearInterval(this.intervalIndex)
    clearInterval(this.intervalTimerIndex)
  }

  handleGameReset = () => {
    this.setState({
      isGameActive: false,
      points: 0,
      timeLeft: 30
    })
  }

  handleLevel = event => {
    if(event.target.id === "easy") {
      event.target.classList.add("current-level")
      event.target.parentElement.children.medium.classList.remove("current-level")
      event.target.parentElement.children.hard.classList.remove("current-level")
      event.target.parentElement.children.master.classList.remove("current-level")
      this.setState({
        level: 1000,
        hideLevel: 4000
      })
    } else if (event.target.id === "medium") {
      event.target.classList.add("current-level")
      event.target.parentElement.children.easy.classList.remove("current-level")
      event.target.parentElement.children.hard.classList.remove("current-level")
      event.target.parentElement.children.master.classList.remove("current-level")
      this.setState({
        level: 1000,
        hideLevel: 2000
      })
    } else if (event.target.id === "hard") {
      event.target.classList.add("current-level")
      event.target.parentElement.children.easy.classList.remove("current-level")
      event.target.parentElement.children.medium.classList.remove("current-level")
      event.target.parentElement.children.master.classList.remove("current-level")
      this.setState({
        level: 800,
        hideLevel: 800
      })
    } else if (event.target.id === "master") {
      event.target.classList.add("current-level")
      event.target.parentElement.children.easy.classList.remove("current-level")
      event.target.parentElement.children.medium.classList.remove("current-level")
      event.target.parentElement.children.hard.classList.remove("current-level")
      this.setState({
        level: 200,
        hideLevel: 500
      })
    }
  }

  timer = () => {
    if(this.state.timeLeft > 0) {
      this.setState(prevState => ({
        timeLeft: prevState.timeLeft - 1
      }))
    }
  }

  // just testing things
  // handleTest = () => {
  //   const test = new Audio()
    
  //   console.log('test')
  //   this.timer()
  //   console.log(this.state.timeLeft)
  // }

  handleChangeThemeSpace = () => {
    this.setState({
      myStyle: {
        backgroundImage: `url(${space})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover"
      },
    })
  }
  handleChangeThemeFarm = () => {
    this.setState({
      myStyle: {
        backgroundImage: `url(${cows})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover"
      },
    })
  }
  handleChangeThemeSea = () => {
    this.setState({
      myStyle: {
        backgroundImage: `url(${sea})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover"
      },
    })
  }
// <header className="masthead" style={{ backgroundImage: `url(${Background})` }} >
  render() {

    


    return (
      <div className="App" style={ this.state.myStyle }>
        <ControlPanel
          clickedGameStart={this.handleGameStart}
          clickedGameStop={this.handleGameStop}
          clickedGameReset={this.handleGameReset}
          score={this.state.points}
          levelChoose={this.handleLevel}
          active={this.state.isGameActive}
          timeLeft={this.state.timeLeft}
          test={this.handleTest}
          space={this.handleChangeThemeSpace}
          farm={this.handleChangeThemeFarm}
          space={this.handleChangeThemeSpace}
          sea={this.handleChangeThemeSea}
        />
        <Table
          hit={this.handleChickenHit}
          data={this.state.allChickens}
        />
        {/* <Player /> */}
      </div>
    );
  } 
}


export default App;
