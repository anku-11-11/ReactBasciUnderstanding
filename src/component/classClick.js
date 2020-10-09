import React, { Component } from 'react'

export class classClick extends Component {
    clickHandler(){
        console.log('hey u click class handler')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Class click me</button>
            </div>
        )
    }
}

export default classClick
