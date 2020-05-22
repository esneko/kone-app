import * as React from 'react'
import { useRecoilValue } from 'recoil'
import { summaState } from '../recoil/selectors'

const Summa = () => {
  const summa = useRecoilValue(summaState)

  return <div className="summa">Summa: {summa}</div>
}

export default Summa
