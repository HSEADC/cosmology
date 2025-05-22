import React from 'react'
import A_Text from './A_Text.jsx'

const M_PostTeaser = ({ title, url, tag = [] }) => {
  return (
    <a className="M_PostTeaser" href={url}>
      <A_Text type="h3" text={title} />
      <div className="C_postTeaserTags">
        {tag.map((tag, i) => (
          <A_Text type="tag" text={tag} key={i} />
        ))}
      </div>
    </a>
  )
}

export default M_PostTeaser
