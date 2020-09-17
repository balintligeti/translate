import React, { Component } from 'react'

export class DictItem extends Component {

    dele = () => {
        this.props.delete(this.props.dict.id).bind(this)
    }
    render() {
        return (
            <div>
                <p>{this.props.dict.foreignWord} | {this.props.dict.engWord}</p> <button onClick={this.props.delete.bind(this, this.props.dict.id)}>(X)</button>
            </div>
        )
    }
}

export default DictItem
