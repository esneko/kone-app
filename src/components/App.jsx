import React, { useState } from 'react'
import Button from '@material/react-button'
import { InputField } from './InputField'
import '@material/react-button/dist/button.min.css'
import '@material/react-text-field/dist/text-field.min.css'
import '../styles/app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <button onClick={() => setCount(count + 1)}>Counter: {count}</button>

      <InputField initialValue={0} />

      <Button unelevated onClick={() => console.log('Clicked!')}>
        Summa
      </Button>
    </div>
  )
}

export default App
