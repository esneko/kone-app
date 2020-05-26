import * as React from 'react'
import { useRecoilValue } from 'recoil'
import { summaState } from '../recoil/selectors'
import { useLoadItems } from '../recoil/hooks'

const Summa = ({ ids }) => {
  const summa = useRecoilValue(summaState)

  const loadItems = useLoadItems()
  React.useEffect(() => loadItems(ids), [])

  return <div className="summa">Summa: {summa}</div>
}

export default Summa
