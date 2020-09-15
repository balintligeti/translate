import React, { Component } from 'react';
import DictItem from './DictItem';
import uuid from 'uuid'

export class Dictionary extends Component {

    state = {
        dictionary : [
          {
            foreign: "autó",
            en: "car",
            id: uuid.v4()
          },
          {
            foreign: "villamos",
            en: "tram",
            id:uuid.v4()
          },
          {
            foreign: "űrhajó",
            en: "spacecraft",
            id: 1
          }
        ]
    }

    componentDidMount(){
      this.setState({dictionary: [...this.state.dictionary, ...this.props.newWord]})
    }

    
    delete= (id) => {
      this.setState({ dictionary: [...this.state.dictionary.filter(word => word.id !== id)]})
    }


    render() { return this.state.dictionary.map((dict) => (
      <DictItem dict={dict} delete={this.delete}/>
  )
  )

    }
}

export default Dictionary
