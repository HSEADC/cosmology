import '../index.css'

import React from 'react'
import { createRoot } from 'react-dom/client'

import O_Container from '../components/O_Container.jsx'

const app = document.querySelector('#app')
const root = createRoot(app)
root.render(<O_Container />)
