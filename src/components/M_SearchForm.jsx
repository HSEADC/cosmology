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
        placeholder="Найти пост"
        handleInput={handleSearchInput}
        handleSubmit={handleSearchSubmit}
      />
      {searchInputValue !== '' && (
        <A_Button
          text="X"
          type="resetField"
          disabled={false}
          handleClick={() => handleSearchInput('')}
        />
      )}
      <A_Button
        text="Поиск"
        type="primary"
        disabled={isSearchButtonDisabled}
        handleClick={handleSearchSubmit}
      />
    </div>
  )
}

export default M_SearchForm
