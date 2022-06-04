import React from 'react'
import Card from './Card'
import '../styles/Home.css'

const App = () => {
  return (
    <main className='main-container'>
      <div className="container">
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  )
}

export default App