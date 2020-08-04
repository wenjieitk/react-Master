import React, { Component } from 'react'
import Ninjas from './component/ninja'
import AddNinja from './component/addNinja'
import './ninja.css'

class App extends Component {
  state = {
    ninjas: [
      { name: 'ninja1', age: 10, belt: "black", id: 1 },
      { name: 'ninja2', age: 20, belt: "green", id: 2 },
      { name: 'ninja3', age: 30, belt: "red", id: 3 }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = this.state.ninjas.length + 1
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => ninja.id !== id)
    this.setState({
      ninjas
    })
  }

  componentDidMount() {
    console.log('component mounted')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component updated')
    console.log({prevProps})
    console.log({prevState})
  }

  render() {
    return (
      <div className="App">
        <h1>My React App!</h1>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    )
  }
}

export default App;
