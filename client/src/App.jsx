import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //call things from BE server.js here
  //const things = async fetch 


  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </div>

    </>
  )
}

export default App
