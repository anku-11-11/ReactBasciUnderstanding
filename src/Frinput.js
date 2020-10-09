import React, { Component } from 'react'

//  class Frinput extends Component {
//     render() {
//         return (
//             <div>
//                 <input type ="text" />
//             </div>
//         )
//     }
// }
 const Frinput = React.forwardRef((props, ref)=>{
     return(
         <div>
             <input type="text" ref={ref} />
         </div>
     )
 })

export default Frinput
