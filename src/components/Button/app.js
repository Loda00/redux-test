import React from 'react'

const Button = (props) => {
    const { click, name } = props
    return (
        <div>
            <button onClick={click} >{name}</button>
        </div>
    )
}

export default Button