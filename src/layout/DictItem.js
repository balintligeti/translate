import React, { Component } from 'react'

export class DictItem extends Component {

    dele = () => {
        this.props.delete(this.props.dict.id).bind(this)
    }
    render() {
        return (
            <div class="dictItem">
                <p onClick={this.props.delete.bind(this, this.props.dict.id)} class="wordText">{this.props.dict.foreignWord} | {this.props.dict.engWord}</p>
            </div>
        )
    }
}

export default DictItem
