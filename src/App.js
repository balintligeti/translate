import React, { Component } from "react";
import Translate from "./layout/Translate";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './layout/Header'

class App extends Component {
  

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
                 <Translate />
                </React.Fragment>
              )}
            />
        </div>
      </Router>
    );
  }

  
}

export default App;