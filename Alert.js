import React from 'react'

const Alert = ({type,text}) => {
    return (
        //this is a dynamic class
        <div className={`alert alert-${type}`}>{text}
        </div>
    )
}

export default Alert
