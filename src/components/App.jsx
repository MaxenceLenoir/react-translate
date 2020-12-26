import React, { Component } from 'react';
import UserCreate from './userCreate'
import { LanguageStore } from '../contexts/LanguageContext'
import ColorContext from '../contexts/colorContext'
import LanguageSelector from './LanguageSelector';
class App extends Component {

  render(){
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value='primary'>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore> 
      </div>
    )
  }
}

export default App