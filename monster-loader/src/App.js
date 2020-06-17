import React, { Component } from 'react';
import './App.css';
import {Cardlist} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component.jsx'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({monsters: users}))
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    })
    return (
      <div className="App">
        <SearchBox 
          placeholder = 'search monster'
          handleChange = {
            e => this.setState({searchField: e.target.value}) //, () => console.log(this.state) <--- do something after the event changes in the callBack
          }
        />
        <Cardlist monsters = {filteredMonsters} />
      </div>
    );
  }
}

export default App;
