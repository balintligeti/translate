import React, { Component } from 'react'

export class DictItem extends Component {

    dele = () => {
        this.props.delete(this.props.dict.id).bind(this)
    }
    render() {
        return (
            <div class="dictItem">
                <p class="wordText">{this.props.dict.foreignWord} | {this.props.dict.engWord}</p>
                <button class="btn mt-n3 btnText btn-outline-dark"onClick={this.props.delete.bind(this, this.props.dict.id)}>X</button> 
            </div>
        )
    }
}

export default DictItem
