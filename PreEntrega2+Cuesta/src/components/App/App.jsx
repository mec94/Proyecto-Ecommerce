import { useState } from 'react'
import './App.css'
import NavBar from '../NavBar/NavBar'
import { BrowserRouter } from 'react-router-dom'
import PageRouting from './PageRouting'

function App() {
  return (
    <BrowserRouter>
      <div className="App container w-screen h-screen">
        <header className="flex flex-col items-center gap-4">
          <NavBar />
        </header>
        <main>
          <PageRouting />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
