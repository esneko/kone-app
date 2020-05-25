import { atom } from 'recoil'

export const itemIdsState = atom({
  key: 'state-item-ids',
  default: [],
})

export const itemState = (id) =>
  atom({
    key: `state-item-${id}`,
    default: {
      id,
      value: 0
    },
  })
