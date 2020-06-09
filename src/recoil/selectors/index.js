import { selector } from 'recoil'
import { activeIdsState, itemIdsState, itemState } from '../atoms'

export const itemSelector = (id) =>
  selector({
    key: `computed-item-${id}`,
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
    key: `computed-items-${key}`,
    get: ({ get }) => {
      const ids = get(state)
      if (!ids.length) {
        return []
      }
      return ids.map((id) => get(itemSelector(id)))
    },
    set: ({ set }, newValue) => {
      newValue.forEach((item) => {
        const id = item.id
        set(itemSelector(id), item)
      })
    }
  })

export const summaSelector = (key) =>
  selector({
    key: `computed-summa-${key}`,
    get: ({ get }) => {
      // TODO: normalize state
      // e.g. create a new selector with summas mapped by key
      let items

      switch (key) {
        case 'active':
          items = get(itemsSelector(key, activeIdsState))
          break
        default:
          items = get(itemsSelector(key, itemIdsState))
      }

      const summa = items
        ? items.reduce((count, item) => count + item.value, 0)
        : 0

      return summa
    }
  })
