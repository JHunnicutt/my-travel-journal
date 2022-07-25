import React from 'react'

import './App.css'
import Header from './Header'
import Card from './Card'
import data from './data'

function App() {
  const trips = data.map((trip) => {
    return (
      <Card 
        data={trip}
      />
    )
  })
  return (
    <div className="App">
      <Header />
      <div className="container">
        <main>
          {trips}
        </main>
      </div>
    </div>
  )
}

export default App
