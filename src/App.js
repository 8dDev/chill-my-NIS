import React from 'react'
import './App.css'
import HomeZone from './components/HomeZone'
import Info from './components/Info'
import Join from './components/Join'
import Navbar from './components/Navbar'
import Rules from './components/Rules'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      link: '👀'
    }
  }

  render() {
    return (
      <div className="components">
        <Navbar/>
        <HomeZone/>
        <Rules/>  
        <Join link={this.state.link}/>
        <Info/>
      </div>
    )
  }
}

export default App
