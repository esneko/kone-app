import * as React from 'react'
import { useRecoilValue } from 'recoil'
import { summaSelector } from '../recoil/selectors'
import { useLoadItems } from '../recoil/hooks'

const Summa = ({ type, itemIds }) => {
  const summa = useRecoilValue(summaSelector(type))

  const loadItems = useLoadItems(type)
  React.useEffect(() => loadItems(itemIds), [])

  return (
    <div className="summa">
      Summa ({type}): {summa}
    </div>
  )
}

export default Summa
