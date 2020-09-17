import React, { Component } from 'react';
import DictItem from './DictItem';

export class Dictionary extends Component {

    state = {
      database_dictionary : []
    }

    //DATABASE//
    getDictionaries() {
      fetch('http://localhost:3001')
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.setState({database_dictionary: data})
        });
    }
  
    deleteWord = (id) => {
      fetch(`http://localhost:3001/dictionaries/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          this.getDictionaries();
        });
    }
    ////////////
    componentDidMount(){
      this.getDictionaries();
      this.deleteWord(14)

    }

    delete= (id) => {
      this.setState({ dictionary: [...this.state.dictionary.filter(word => word.id !== id)]})
    }

    render()
    { 
      return this.state.database_dictionary.map((dict) => (
      <DictItem dict={dict} delete={this.deleteWord}/>))
    }
}

export default Dictionary
