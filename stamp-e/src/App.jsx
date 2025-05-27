import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Orange = () => {
  return (
    <div>
      <img src="Orange.svg"></img>
    </div>
  )
}


const Start = () => {
  return (
    <div class="bg-red-balloon px-4 py-2 rounded-lg flex items-center justify-center">
      <button type="button">Play</button>
      <h1>hello</h1>
    </div>
  )   
  
}
const App = () => {
  return (
    <div class="bg-bell-yellow h-screen flex flex-col items-center justify-center">
      <Orange/> 
    </div>
  )
}



export default App
