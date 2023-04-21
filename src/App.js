import React from "react"
import './App.css';

export default function App() {
  const [count, setCount] = React.useState(0)

  function increment() {
    setCount(prevCount => {
      return prevCount + 1;
    })
  }

  function decrement() {
    setCount(prevCount => {
      return prevCount - 1;
    })
  }

  return (
    <div className="app-container">
      <div className="count"><h1>{count}</h1></div>
      <div className="button-container">
        <button onClick={increment} className="button">+</button>
        <button onClick={decrement} className="button">-</button>
      </div>
    </div>
  )

}


