import React from 'react'
import A_Input from './A_Input.jsx'
import A_Button from './A_Button.jsx'

const M_SearchForm = ({
  searchInputValue,
  isSearchButtonDisabled,
  handleSearchInput,
  handleSearchSubmit
}) => {
  return (
    <div className="M_SearchForm">
      <A_Input
        value={searchInputValue}
        placeholder="Самая большая планета в солнечной системе"
        handleInput={handleSearchInput}
        handleSubmit={handleSearchSubmit}
      />
      <A_Button
        text="Найти"
        type="primary"
        disabled={isSearchButtonDisabled}
        handleClick={handleSearchSubmit}
      />
    </div>
  )
}

export default M_SearchForm
