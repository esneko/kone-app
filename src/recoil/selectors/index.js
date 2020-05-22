import { selector } from 'recoil'
import { stateA, stateB } from '../atoms'

export const summaState = selector({
  key: 'summaState',
  get: ({ get }) => {
    const a = get(stateA)
    const b = get(stateB)

    return a + b
  },
})
