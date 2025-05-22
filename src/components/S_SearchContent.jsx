import React, { useState, useEffect } from 'react'
import { getArticlesTeasers } from '../javascripts/search-data.js'
import M_PostTeaser from './M_PostTeaser.jsx'
import O_SearchBar from './O_SearchBar.jsx'

const S_SearchContent = ({ searchInputValue: initialInput }) => {
  const [postTeasers, setPostTeasers] = useState([])
  const [searchInputValue, setSearchInputValue] = useState(initialInput || '')
  const [isSearchButtonDisabled, setIsSearchButtonDisabled] = useState(true)

  useEffect(() => {
    getArticlesTeasers().then(setPostTeasers)
  }, [])

  useEffect(() => {
    setIsSearchButtonDisabled(searchInputValue.trim().length < 3)
  }, [searchInputValue])

  const handleSearchInput = (value) => setSearchInputValue(value)
  const handleSearchSubmit = () => {}

  const renderPostTeasers = () => {
    const clean = (str) =>
      str
        .replace(/[\u202F\u00A0]/g, ' ')
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        .toLowerCase()
    const value = searchInputValue.toLowerCase()

    return postTeasers
      .filter((t) => clean(t.title).includes(value))
      .map((t) => (
        <M_PostTeaser
          key={t.id}
          title={t.title}
          url={t.url}
          image={t.image}
          tag={t.tag}
        />
      ))
  }

  return (
    <div className="S_SearchContent">
      <O_SearchBar
        searchInputValue={searchInputValue}
        isSearchButtonDisabled={isSearchButtonDisabled}
        handleSearchInput={handleSearchInput}
        handleSearchSubmit={handleSearchSubmit}
        postTeasers={postTeasers}
      />
      <div className="C_PostTeasers">{renderPostTeasers()}</div>
    </div>
  )
}

export default S_SearchContent
