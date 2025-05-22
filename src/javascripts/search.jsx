import React from 'react'
import { createRoot } from 'react-dom/client'

import S_SearchContent from '../components/S_SearchContent.jsx'

function getSearchRequest() {
  const url = new URL(window.location.href)
  const searchParams = new URLSearchParams(url.search)

  if (searchParams.has('request')) {
    return searchParams.get('request')
  }
}

const app = document.querySelector('.W_ReactModule')
const root = createRoot(app)
root.render(<S_SearchContent searchInputValue={getSearchRequest()} />)
