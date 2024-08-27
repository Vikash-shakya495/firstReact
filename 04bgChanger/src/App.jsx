import { useState } from 'react'
// import ChangeColor from './components/ChangeColor';

function App() {
  const [color,setColor] = useState('olive');

  return (
    <>
    <div className='h-screen w-screen bg-slate-800 ' style={{backgroundColor: color}}>
    <div className='h-20 w-full mb-20px bg-yellow-100 flex justify-evenly items-center'>      
        <button className='h-10 w-20 f-20 bg-red-700 rounded-lg p-2' onClick={()=>setColor('red')}>Red</button>
        <button className='h-10 w-20 f-20 bg-orange-600 rounded-lg p-2' onClick={()=>setColor('orange')}>Orange</button>
        <button className='h-10 w-20 f-20 bg-yellow-600 rounded-lg p-2' onClick={()=>setColor('yellow')}>Yellow</button>
        <button className='h-10 w-20 f-20 bg-green-500 rounded-lg p-2' onClick={()=>setColor('green')}>Green</button>
        <button className='h-10 w-20 f-20 bg-cyan-400 rounded-lg p-2' onClick={()=>setColor('cyan')}>Cyan</button>
        <button className='h-10 w-20 f-20 bg-blue-900 rounded-lg p-2' onClick={()=>setColor('blue')}>Blue</button>
        <button className='h-10 w-20 f-20 bg-violet-900 rounded-lg p-2' onClick={()=>setColor('violet')}>Violet</button>
        <button className='h-10 w-20 f-20 bg-pink-500 rounded-lg p-2' onClick={()=>setColor('pink')}>Pink</button>
      </div>
    </div>
    </>
  )
}

export default App;


