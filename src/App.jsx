import React from 'react'
import { Hero, Sales } from './components';
import { heroapi } from './data/data'

const App = () => {
  return (
    <div>
      <main>
        <Hero heroapi={heroapi} />
        <Sales />
      </main>
    </div>
  )
}

export default App