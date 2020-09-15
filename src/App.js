import React, { Component } from "react";
import Translate from "./layout/Translate";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './layout/Header'
import Dictionary from "./layout/Dictionary";
import uuid from 'uuid'

class App extends Component {

  state = {
    dictionary : []
}

  saveWord = (translateThis, translated) => {
    let word = {
       foreign : translateThis,
       en : translated,
       id: uuid.v4()
    }
   
    this.setState({dictionary: [...this.state.dictionary, word]})
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
                  <Dictionary newWord={this.state.dictionary} />
                </React.Fragment>
              )}
            />
        </div>
      </Router>
      
    );
  }

  
}

export default App;