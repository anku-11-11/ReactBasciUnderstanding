import React, { Component } from 'react'
import Input from './Input'

 class Focus extends Component {
     constructor(props) {
         super(props)
     
        this.componentRef=React.createRef()
     }
     clickHandler=()=>{
         this.componentRef.current.focusInput()
     }
     
    render() {
        return (
            <div>
            <Input ref={this.componentRef}/>
                <button onClick={this.clickHandler}>focus input </button>
            </div>
        )
    }
}

export default Focus
