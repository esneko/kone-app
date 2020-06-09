import * as React from 'react'
import { useTransactionObservation_UNSTABLE } from 'recoil'

const logAction = ({ name, value, previousValue }) => {
  console.groupCollapsed('%c%s', 'color: #000', name)
  console.log('%cNew value %o', 'color: #333', value)
  console.log('%cPrevious value %o', 'color: #333', previousValue)
  console.groupEnd()
}

const RecoilLogger = () => {
  useTransactionObservation_UNSTABLE((e) => {
    e.modifiedAtoms.forEach((name) => {
      logAction({
        name,
        value: e.atomValues.get(name),
        previousValue: e.previousAtomValues.get(name)
      })
    })
  })
  return null
}

export default RecoilLogger
