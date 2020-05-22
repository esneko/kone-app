import React, { useState } from 'react'
import '../styles/app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <button onClick={() => setCount(count + 1)}>Counter: {count}</button>
    </div>
  )
}

export default App
