import React, { Component } from 'react';
import { googleTranslate } from "../utils/googleTranslate";


export class Translate extends Component {

    state = {
        translateThis: "",
        translated: "",
      };

      handleChange(event) {
        let language = "en";
        let toTranslate = event.target.value;
        this.setState({translateThis: toTranslate});
        
        const translating = () => {
          this.setState({ translated: toTranslate });
        };
    
        googleTranslate.translate(toTranslate, language, function(err, translation) {
          toTranslate = translation.translatedText;
          translating(toTranslate);
        });
      }

    render() {
        return (
        <div>
            <input onChange={this.handleChange.bind(this)} />
            <p>{this.state.translated}</p>
            <button onClick={this.props.save.bind(this, this.state.translateThis, this.state.translated)}>Save</button>
        </div>
        )
    }
}

export default Translate
