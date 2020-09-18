import React, { Component, useState, useEffect } from "react";
import Translate from "./layout/Translate";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './layout/Header'
import Dictionary from "./layout/Dictionary";

class App extends Component {

  saveWord = (foreign, en) => {
    if (en !== ""){
      fetch('http://localhost:3001/dictionaries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({foreign, en}),
      })
        .then(response => {
          return response.text();
      })
    }
  }
    
  render() {
    return (
      <Router>
        <div>
          <Header />
        <Route
              exact
              path="/"
              render={() => (
                <React.Fragment>
                 <Translate save={this.saveWord}/>
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/dictionary"
              render={() => (
                <React.Fragment>
                  <Dictionary />
                </React.Fragment>
              )}
            />
        </div>
      </Router>
    );
  }

  
}

export default App;