import * as React from 'react'
import { useRecoilValue } from 'recoil'
import { summaState } from '../recoil/selectors'
import { useLoadItems } from '../recoil/hooks'

const Summa = ({ key }) => {
  const summa = useRecoilValue(summaState(key))

  const loadItems = useLoadItems()
  React.useEffect(() => loadItems(ids), [])

  return (
    <div className="summa">
      Summa ({key}): {summa}
    </div>
  )
}

export default Summa
