import React from 'react'
import classNames from 'classnames'

const A_Button = ({ text, handleClick, disabled, type }) => {
  const classes = classNames('A_Button', type, { disabled })
  return (
    <div className={classes} onClick={!disabled ? handleClick : null}>
      {text}
    </div>
  )
}

export default A_Button
