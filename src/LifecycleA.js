import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {
constructor(props) {
    super(props)

    this.state = {
         name:'ankit'
    }
    console.log('lifecycle A  constructor')
}

static getDerivedStateFromProps(props, state){
    console.log('lifecycle A get drive from props ')
return null
}

componentDidMount(){
    console.log('component did mount A')

}

shouldComponentUpdate(){
    console.log(' LIfe cycle A  shouldComponentUpdate')
    return true
}
getSnapshotBeforeUpdate(){
    console.log(' LIfe cycle A  getSnapshotBeforeUpdate')

}
componentDidUpdate(){
    console.log(' LIfe cycle A componentDidUpdate ')

}
changeState =()=>{
    this.setState(
        {
            name:'code elelution'
        }
    )
}
    render() {
     console.log('Lifecycle A render')
     return(
        <div> 
        <div>Lifecycle A</div>
        <button onClick={this.changeState}> change</button>
        <LifecycleB/>
        </div>
     )
    }
}

export default LifecycleA
