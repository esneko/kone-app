import { atom } from 'recoil'

export const stateA = atom({
  key: 'countA',
  default: 0,
})

export const stateB = atom({
  key: 'countB',
  default: 0,
})
