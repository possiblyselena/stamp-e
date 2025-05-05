import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({villager}) => {
  return (
    <div>
      <h2>{villager}</h2>
    </div>
  )
}

const App = () => {
  return (
    <div class="bg-bell-yellow h-screen flex flex-col items-center justify-center">
      <h1 className="text-Sour Gummy">
        Stampe
      </h1>

    </div>
  )
}



export default App
