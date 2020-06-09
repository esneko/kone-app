import { atom } from 'recoil'

export const itemIdsState = atom({
  key: 'atom-item-ids',
  default: [],
  persistence_UNSTABLE: {
    type: 'log'
  }
})

export const activeIdsState = atom({
  key: 'atom-active-ids',
  default: [],
  persistence_UNSTABLE: {
    type: 'log'
  }
})

export const itemState = (id) =>
  atom({
    key: `atom-item-${id}`,
    default: {
      id,
      value: 0
    },
    persistence_UNSTABLE: {
      type: 'log'
    }
  })
