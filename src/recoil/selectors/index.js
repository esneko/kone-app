import { selector } from 'recoil'
import { activeIdsState, itemIdsState, itemState } from '../atoms'

export const summaSelector = (key) =>
  selector({
    key: `summa-${key}`,
    get: () => {
      // TODO: normalize state
      // e.g. create a new selector with summas mapped by key
      let items

      switch (key) {
        case 'active':
          items = itemsSelector(key, activeIdsState)
        default:
          items = itemsSelector(key, itemIdsState)
      }

      const summa = items.reduce((count, item) => count + item.value, 0)

      return summa
    }
  })

export const itemSelector = (id) =>
  selector({
    key: `item-${id}`,
    get: ({ get }) => {
      const state = get(itemState(id))
      return state
    },
    set: ({ set }, newValue) => {
      const state = itemState(id)
      set(state, newValue)
    }
  })

export const itemsSelector = (key, state) =>
  selector({
    key: `items-${key}`,
    get: ({ get }) => {
      const ids = get(state)
      if (!ids.length) {
        return []
      }
      return ids.map((id) => itemSelector(id))
    },
    set: ({ set }, newValue) => {
      newValue.forEach((item) => {
        const id = item.id
        set(itemSelector(id), item)
      })
    }
  })
