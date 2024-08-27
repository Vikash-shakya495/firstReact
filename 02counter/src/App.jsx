import { useState } from 'react'
import './App.css'

function App() {
let [counter, setCounter] = useState(0);

  // let counter = 5;

  const addValue = ()=> {
    setCounter(counter<20 ? counter + 1 : counter);
  }
  
  const removeValue = () => {
    setCounter(counter>0 ? counter - 1 : counter);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
