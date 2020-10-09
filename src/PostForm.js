import React, { Component } from 'react'

 class PostForm extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              UserId:'',
              title:'',
              body:''

         }
     }
     
changeHandler=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}

submitHandler =(e)=>{
    e.preventDefault()
    console.log(this.state)
}

    render() {
        const {UserId,title,body}=this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="UserId" value={UserId} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="title" name="title" value={title} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="body" name="body" value={body} onChange={this.changeHandler} />
                    </div>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
