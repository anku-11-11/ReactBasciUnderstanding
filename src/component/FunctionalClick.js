import React from 'react'

function FunctionalClick() {
    function clickHandler(){
        console.log('button is being clicked')
    }
    return (
        <div>
        <button onClick={clickHandler}>click</button>
        </div>
    )
}

export default FunctionalClick
