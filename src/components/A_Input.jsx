import React, { useRef } from 'react'

const A_Input = ({ value, placeholder, handleInput, handleSubmit }) => {
  const input = useRef()

  const onInput = () => handleInput(input.current.value)

  return (
    <input
      className="A_Input"
      ref={input}
      value={value}
      placeholder={placeholder}
      onInput={onInput}
      onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
    />
  )
}

export default A_Input
