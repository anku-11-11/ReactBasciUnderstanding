import React, { Component, memo } from 'react'
import Purecomponent from './Purecomponent'
import RegularComp from './RegularComp'
import Memo from './Memo'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'ankit'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'ankit'
            })
        },2000)
    }
    
    render() {
        return (
            <div>
                Parent Comp
                <Memo name={this.state.name}/>
                {/* <RegularComp name={this.state.name} />
                <Purecomponent name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp
