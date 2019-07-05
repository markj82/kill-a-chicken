import React from 'react';
import './App.css';
import Table from './Table'
import ControlPanel from './ControlPanel'

class App extends React.Component {

  handleChickenHit = event => {
    console.log('HIT!!')
    console.log(event.target.id)
  }
  render() {
    return (
      <div className="App">
        <ControlPanel />
        <Table hit={this.handleChickenHit}/>
      </div>
    );
  } 
}


export default App;
