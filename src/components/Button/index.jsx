import React from 'react'
import './Button.scss'

const Button = props => {
  const isOperator = (val) => {
    return !isNaN(val)
  }
  return (
    <div className={`wrapper-btn ${isOperator(props.children) ? null : "operator"}`} onClick={() => props.onHandleClick(props.children)}>
      {props.children}
    </div>
  )
}

export default Button