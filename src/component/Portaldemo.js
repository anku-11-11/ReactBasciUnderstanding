import React from 'react'
import  ReactDOM from 'react-dom'

function Portaldemo() {
    return ReactDOM.createPortal (
        <h1>
        Portals Demo
        </h1>,
        document.getElementById('portal_root')
    )
}

export default Portaldemo
