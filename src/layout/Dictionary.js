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
            id: uuid.v4()
          }
        ]
    }


    render() {

        return this.state.dictionary.map((dict) => (
            <DictItem dict={dict}/>
        ))
    }
}

export default Dictionary
