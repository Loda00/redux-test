import React from 'react'

const Input = (props) => {
    const { label, type, placeholder, value, name, change } = props
    return (
        <div>
            <label>{label}</label>
            <input type={type} onChange={change} placeholder={placeholder} value={value} name={name} />
        </div>
    )
}

export default Input