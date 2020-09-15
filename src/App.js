import React, { Component } from "react";
import Translate from "./layout/Translate";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './layout/Header'
import Dictionary from "./layout/Dictionary";
import uuid from 'uuid'

class App extends Component {

  state = {
    foreign: "",
    en: "",
    id: uuid.v4()
  };

  saveWord(fore, engl){
    let forei = fore;
    let eng = engl;
    if(eng){
      this.setState({en: eng})
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