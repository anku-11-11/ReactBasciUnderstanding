import React from 'react'

function Memo({name}) {
console.log('rendering Memo')
    return (
        <div>
            hey i am from memo{name}
        </div>
    )
}

export default React.memo(Memo) 
