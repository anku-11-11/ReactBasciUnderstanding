import React from 'react'

function Childcomponent(props) {
    return (
        <div>
            <button onClick={props.greetHandler}>i am from child</button>
        </div>
    )
}

export default Childcomponent
