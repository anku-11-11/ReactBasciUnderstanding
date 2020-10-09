import React from 'react'
import Person from './Person'

function NewList() {
    
        const persons =[
            {
            id:1,
            name:'Ankit'
            },
            {
            id:2, 
            name:'laur'
            },
            {
            id:3,
            name:'lakshi'
            }
        ]
        
        // const personList = persons.map (person => (
        // <h2>i am {person.id}. i am {person.name}</h2>

        const personList = persons.map (person => 
        <Person person={person}/> 
        )
        return <div>{personList}</div>    
        }

        export default NewList

// const names =['ankit', 'zoomia', 'anima']
// const nameList = names.map(name => <h2>{names}</h2>)
// return<div>{nameList}</div>

//      return (
//        <div>
//           {
//               names.map(name =><h2>{name}</h2>)
//           }


//        <h2>{names[0]}</h2>
//        <h2>{names[1]}</h2> 
//        <h2>{names[2]}</h2>    

//        </div>
//  )
// }




