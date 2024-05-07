import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/Card'

function App() {

  const [color, setColor]=useState("olive");

let discription = "I am a software developer fully master in skils and good in commnication skills."
  return (
    <>
    <h1 className='mb-5'>card</h1>
    <Card username="Ahmad Sultan" dis={discription}  btn2="facebook" btn3="tweter" />
   
   <div className='mt-4 w-full h-screen' style={{backgroundColor:color}}>
    <div className='fixed bottom-11'>
      <button onClick={()=> setColor("red")} className='bg-red-700 ml-3  p-4 rounded-full'>red</button>
      <button onClick={()=> setColor("green")} className='bg-green-700 ml-3  p-4 rounded-full'>red</button>
      <button onClick={()=> setColor("black")} className='bg-black-700  ml-3 p-4 rounded-full'>red</button>
      <button onClick={()=> setColor("pink")} className='bg-pink-700 ml-3  p-4 rounded-full'>red</button>
    </div>
   </div>
    </>
  )
}

export default App
