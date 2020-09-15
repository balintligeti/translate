import React, { Component } from 'react'

export class DictItem extends Component {

    dele = () => {
        this.props.delete(this.props.dict.id)
    }
    render() {
        return (
            <div>
                <p>{this.props.dict.foreign} | {this.props.dict.en}</p> <button onClick={this.dele}>(X)</button>
            </div>
        )
    }
}

export default DictItem
