import React from 'react'
import M_SearchForm from './M_SearchForm.jsx'
// import M_PostSuggestion from './M_PostSuggestion.jsx'

const O_SearchBar = ({
  searchInputValue,
  isSearchButtonDisabled,
  postTeasers,
  handleSearchInput,
  handleSearchSubmit
}) => {
  const renderPostSuggestions = () => {
    const searchLower = searchInputValue.toLowerCase()
    const clean = (str) =>
      str
        .replace(/[\u202F\u00A0]/g, ' ')
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        .toLowerCase()

    // return (
    //   <div className="C_PostSuggestions">
    //     {postTeasers
    //       .filter((t) => clean(t.title).includes(searchLower))
    //       .map((t) => (
    //         <M_PostSuggestion key={t.id} title={t.title} url={t.url} />
    //       ))}
    //   </div>
    // )
  }

  return (
    <div className="O_SearchBar">
      <M_SearchForm
        searchInputValue={searchInputValue}
        isSearchButtonDisabled={isSearchButtonDisabled}
        handleSearchInput={handleSearchInput}
        handleSearchSubmit={handleSearchSubmit}
      />
      {searchInputValue.length >= 3 &&
        !isSearchButtonDisabled &&
        renderPostSuggestions()}
    </div>
  )
}

export default O_SearchBar
