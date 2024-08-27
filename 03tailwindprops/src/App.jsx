import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username : 'vikas',
    age: 21
  }
  let newArr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-md mb-10'>Tailwind Test</h1>
      <Card username="chai aur code" someObje = {newArr} />
      <Card username="vikash and devClub"/>

    </>
  )
}

export default App
