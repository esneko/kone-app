import { selector } from 'recoil'
import { activeIdsState, itemIdsState, itemState } from '../atoms'

export const summaState = selector({
  key: 'summaState',
  get: ({ get }) => {
    const summa = get(itemIdsState).reduce(
      (count, id) => count + get(itemSelector(id)).value,
      0
    )

    return summa
  },
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
    },
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
    },
  })

export const activeItems = itemsSelector('active', activeIdsState)

export const items = itemsSelector('all', itemIdsState)
