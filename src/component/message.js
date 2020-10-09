import React, {Component } from 'react'

class Message extends Component{

   constructor(){
       super()
       this.state={
           message: 'welcome visitor'
       }
   }

changeMessage()
{
    this.setState({
        message: 'hey thank you for susbscribing'
    })
}

    render(){
        return(
            <div>
            {/* state is being used */}
                <h1> {this.state.message} </h1>
                <button onClick={() => this.changeMessage()}> suscriber </button>
            </div>
        )

    }
}

export default Message