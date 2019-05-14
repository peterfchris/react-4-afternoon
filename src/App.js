import React, { Component } from 'react';
import {HashRouter as Router} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className='nav'>
            <div>WestSide University</div> 
            <div className='link-wrap'>
                <div className='links'>Home</div>
                <div className='links'>About</div> 
            </div>
          </nav>
        </div>
      </Router>
    )
  }
}