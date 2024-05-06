import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function ReactElement (){
  return (
    <>
    <h1>reactElement</h1>
    </>
  )
}

const anotherElement = React.createElement(
  'h1',
  {},
  'click me to visit'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  anotherElement
)
