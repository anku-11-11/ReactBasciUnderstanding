import React, { Component } from 'react'

export class UserGreating extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             islogin: true
        }
    }
    
    render() {

        return this.state.islogin &&<div>welcome Ankit </div>


        // return  this.state.islogin ?
        // ( 
        //  <div>welcome ankit</div>
        // ):
        // (
        //     <div>welcome guest </div>
        // )


        
    //     let message
    //     if(this.state.islogin){
    //         message=<div>hhey welcome Ankit</div>
    //     }
    //     else{
    //         message=<div>hhey welcome guest</div>

    //     }
    //    return <div>{message}</div>



        // if(this.state.islogin){
        //     return(
        //         <div>hhey welcome Ankit</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>hhey welcome guest</div>
        //     )
        }

        // return (
        //     <div>
        //         <h1>hhey welcome Ankit</h1>
        //         <h1>hhey welcome mehaman</h1>
        //     </div>
        // )
    
}

export default UserGreating
