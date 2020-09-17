import React, { Component } from 'react';
import { googleTranslate } from "../utils/googleTranslate";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap';


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
        <div class="translateCard">
          <Card >
          <input class="input" onChange={this.handleChange.bind(this)} />
            <p class="translated"> {this.state.translated}</p>
            <button onClick={this.props.save.bind(this, this.state.translateThis, this.state.translated)} type="button" class="btn btn-outline-success ">Save</button>
          </Card>
        </div>
        )
    }
}

export default Translate
