import React, { Component } from 'react';
import { googleTranslate } from "../utils/googleTranslate";
import uuid from 'uuid'


export class Translate extends Component {

    state = {
        translateThis: "",
        translated: "",
      };
    
    
    
      handleChange(event) {
        let language = "en";
        let toTranslate = event.target.value;
        this.setState({toTranslate: event.target.value});
        
        const translating = transQuestion => {
          this.setState({ translated: toTranslate });
        };
    
        googleTranslate.translate(toTranslate, language, function(err, translation) {
          toTranslate = translation.translatedText;
          translating(toTranslate);
        });
      }

      handleOnClick = () => {
        this.props.save(this.state.translateThis,this.state.translated)
      }
     
    render() {
        return (
        <div>
            <input onChange={this.handleChange.bind(this)} />
            <p>{this.state.translated}</p>
            <button onClick={this.handleOnClick}>Save</button>
        </div>
        )
    }
}

export default Translate
