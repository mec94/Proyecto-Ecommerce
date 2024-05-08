import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Brand from './components/Brand/Brand'

function App() {
  return (
    <>
      <div className="App container w-screen h-screen">
        <header className="flex flex-col items-center gap-4">
          <Brand name='CeluShop'/>
          <NavBar />
        </header>
        <footer className="flex justify-center">
          <ItemListContainer greeting='Bienvenidos'/>
        </footer>
      </div>
    </>
  )
}

export default App
