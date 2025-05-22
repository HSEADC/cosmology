import React from 'react'
import A_Text from './A_Text.jsx'

const M_PostSuggestion = ({ title, url }) => {
  return (
    <a className="M_PostSuggestion" href={url}>
      <A_Text type="h3" text={title} />
    </a>
  )
}

export default M_PostSuggestion
