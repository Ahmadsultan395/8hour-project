import { useState } from "react";



function App() {
 const [counter, setCounter]= useState(15);

  const addcounter = ()=>{
    if (counter<20) {
      setCounter(counter+1)
    }
  }
  const removecounter = ()=>{
    if (counter > 0) {
      setCounter(counter-1)  
    }
  }

  return (
    <div>
      <h1>counter : {counter}</h1>
      <h1>ammount : {counter}</h1>
      <h1>design : {counter}</h1>
      <h1>dozen : {counter}</h1>
      <button onClick={addcounter}>add counter</button>
      <button onClick={removecounter}>remove counter </button>
    </div>
  )
}

export default App
