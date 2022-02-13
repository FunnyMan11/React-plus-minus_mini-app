import React from 'react'
import './App.css'

export default function App(){
  const [count, setCount]=React.useState(0)

  function add(){
    setCount(count  + 1)
  }

  function substrack(){
    setCount(count - 1)
  }

  return (
    <div className="counter">
      <button className="counter-minus" onClick={substrack}> - </button>
        <h1>{count}</h1>
      <button className="counter-plus" onClick={add}> + </button>
    </div>
  )
}

