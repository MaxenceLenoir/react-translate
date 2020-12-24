import React, { Component } from 'react';
import UserCreate from './userCreate'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/colorContext'

class App extends Component {
  state = {language: 'english'}

  OnLanguageChange = language => {
    this.setState({language});
  }

  render(){
    return (
      <div className="ui container">
        <div>
          Select a language
          <i onClick={() => this.OnLanguageChange('english')} className="flag us"></i>
          <i onClick={() => this.OnLanguageChange('dutch')} className="flag nl"></i>
        </div>
        <ColorContext.Provider value='primary'>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    )
  }
}

export default App