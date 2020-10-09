import React, { Component } from 'react'

 class RefDemo extends Component {
     constructor(props) {
         super(props)

         this.inputRef = React.createRef()

         this.cdRef=null
         this.setcbRef= element =>{
             this.cbRef=element
         }

     }

     componentDidMount(){
         if(this.cbRef){
             this.cbRef.focus()
         }

        //  for 1st input text field 
        this.inputRef.current.focus()
        console.log(this.inputRef)
     }

     clickHandler =()=>{
         alert(this.inputRef.current.value)
     }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
                <input type="text" ref={this.setcbRef}></input>
                <button onClick={this.clickHandler}> just click</button>
            </div>
        )
    }
}

export default RefDemo
