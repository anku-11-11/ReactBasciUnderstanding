import React, { Component } from 'react'

export class Eventbind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'hello'
        }
        // this.clickHandler = this.clickHandler.bind(this) best approch
    }

    // clickHandler(){
    // this.setState({
    //     message:'good bye'
    // })
    // console.log(this)
    // }
    clickHandler =()=>
    {
        this.setState({
            message: 'good bye'
        })
    }

    render() {
        return (
            <div>
            <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
                {/* <button onClick={() => this.clickHandler()}>click</button> */}
                <button onClick={this.clickHandler}>click</button> 

            </div>
        )
    }
}

export default Eventbind
