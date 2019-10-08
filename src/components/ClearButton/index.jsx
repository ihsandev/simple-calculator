import React from 'react'
import './ClearButton.scss'

const ClearButton = props => {
  return (
    <div className="wrapper-clear-btn" onClick={props.onClear}>
      {props.children}
    </div>
  )
}

export default ClearButton