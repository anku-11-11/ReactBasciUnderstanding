import React, { Component } from 'react'

export class LifecycleB extends Component {
constructor(props) {
    super(props)

    this.state = {
         name:'ankit'
    }
    console.log('lifecycle B  constructor')
}

static getDerivedStateFromProps(props, state){
    console.log('lifecycle B get drive from props ')
return null
}

componentDidMount(){
    console.log('component did mount B')
}

shouldComponentUpdate(){
    console.log(' LIfe cycle B shouldComponentUpdate')
    return true
}
getSnapshotBeforeUpdate(){
    console.log(' LIfe cycle B  getSnapshotBeforeUpdate')
    
}
componentDidUpdate(){
    console.log(' LIfe cycle B componentDidUpdate ')

}
    render() {
     console.log('Lifecycle B render')
     return <div>lifecycle B</div>
    }
}

export default LifecycleB
