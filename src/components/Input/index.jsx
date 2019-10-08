import React from 'react'
import './Input.scss'

const Input = (props) => {
  return (
    <input value={props.input} className="input-style" placeholder="Input someting.." />
  )
}

export default Input