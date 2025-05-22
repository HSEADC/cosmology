import React from 'react'
import classNames from 'classnames'

const A_Text = ({ text, type }) => {
  const classes = classNames('A_Text', type)
  return <div className={classes}>{text}</div>
}

export default A_Text
