import * as React from 'react'
import { useRecoilValue } from 'recoil'
import { itemSelector } from '../recoil/selectors'
import { useUpdateItem } from '../recoil/hooks'

const Counter = ({ id }) => {
  const item = useRecoilValue(itemSelector(id))
  const increment = useUpdateItem()

  return (
    <div className="counter">
      <button onClick={() => increment({ id, value: item.value + 1 })}>
        Counter: {item.value}
      </button>
    </div>
  )
}

export default Counter
