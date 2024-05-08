import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[length,setLength]= useState(8)
  const[numberAllow,setNumberAllow]=useState(false)
  const[charAllow,setCharAllow]=useState(false)
  const[password,setPassword]=useState('');
const passwordRef = useRef(null);


  const passwordGenerater = useCallback(()=>{
    let pass=""
    let str="qwertyuipasdfghjklmnbvcxzQWERTYUIOPLKJHGFDSAZXCVBNM";

    if (numberAllow) str += "0123456789"
    if (charAllow)  str += "!@~#$%^&*(){}"

    for (let i = 1; i <= length; i++) {
     const char = Math.floor(Math.random() * str.length+1)
     pass += str.charAt(char);
    }
    setPassword(pass);
   
  },[length,charAllow,numberAllow,setPassword]);
  
  useEffect(()=>{
    passwordGenerater();

  },[length,numberAllow,charAllow,passwordGenerater])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,9)
    window.navigator.clipboard.writeText(password);
    // document.getElementById("copy").display.style.color="red";
  },[password])
  return (
  <>
 <div style={{display:"flex",height:"10vh"}}>
 <div className=' flex flex-wrap  max-w-md p-2 bg-red-700'> 
 <div className='flex justify-start w-full'>
 <input className='p-1 rounded w-full' type="text"
  value={password}
  placeholder='password'
  readOnly
  ref={passwordRef}
  />
  <button className='py-1 px-3 ml-1'
  onClick={copyPasswordToClipboard}
  id='copy'
  >copy</button>
 </div>
 <div className='flex justify-start w-full'>
  <input type="range"
  min={8}
  max={100}
  value={length}
  onChange={(e)=>{setLength(e.target.value)}}
  className='cursor-pointer mr-1'
  />
  <label htmlFor="range" className='mr-3'
  >length: {length}</label>

  <input type="checkbox"
  defaultChecked={numberAllow}
  id='numberInput'
  className='cursor-pointer mr-1'
  onChange={()=>{
    setNumberAllow((prev)=> !prev)
  }}
  />
  <label htmlFor="numberInput" className='mr-3'
  >number</label>
 
  <input type="checkbox"
  defaultChecked={charAllow}
  id='charInput'
  className='cursor-pointer mr-1'
  onChange={()=>{
    setCharAllow((prev)=> !prev)
  }}
  />
  <label htmlFor="charInput" className='mr-3'
  >character</label>
 </div>
  </div>
 </div>
  </>
  )
}

export default App
