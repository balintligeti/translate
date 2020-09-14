import React, { Component } from 'react';
import { googleTranslate } from "../utils/googleTranslate";

export class Translate extends Component {

    state = {
        question: "",
      };
    
    
    
      handleChange(event) {
        let language = "en";
        let transQuestion = event.target.value;
    
        const translating = transQuestion => {
          this.setState({ question: transQuestion });
        };
    
        // translate the question when selecting a different language
        googleTranslate.translate(transQuestion, language, function(err, translation) {
          transQuestion = translation.translatedText;
          translating(transQuestion);
        });
      }


    render() {
        return (
        <div style={this.divStyle}>
            <p>{this.state.question}</p>
            <input onChange={this.handleChange.bind(this)} />
        </div>
        )
    }
}

export default Translate
