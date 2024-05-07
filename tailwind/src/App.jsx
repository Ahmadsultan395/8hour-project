import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/Card'

function App() {
 
let discription = "I am a software developer fully master in skils and good in commnication skills."
  return (
    <>
    <h1 className='mb-5'>card</h1>
    <Card username="Ahmad Sultan" dis={discription}  btn2="facebook" btn3="tweter" />
    </>
  )
}

export default App
