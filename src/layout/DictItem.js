import React, { Component } from 'react'

export class DictItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.dict.foreign}</p>
            </div>
        )
    }
}

export default DictItem
