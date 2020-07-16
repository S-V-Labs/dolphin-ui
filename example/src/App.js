import React from 'react'

import 'dolphin-ui/dist/index.css'

import { TypeAhead } from 'dolphin-ui'

import { colorsList } from './mock-data/colorslist'

const App = () => {
  return (
    <>
      <TypeAhead list={colorsList} />
    </>
  )
}

export default App
