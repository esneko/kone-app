import * as React from 'react'
import { useRecoilState } from 'recoil'
import Button from '@material/react-button'
import '@material/react-button/dist/button.min.css'

const Counter = ({ stateAtom }) => {
  const [count, setCount] = useRecoilState(stateAtom)

  return (
    <div className="counter">
      <button onClick={() => setCount(count + 1)}>Counter: {count}</button>
    </div>
  )
}

export default Counter
