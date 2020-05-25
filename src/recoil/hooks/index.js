import { useRecoilCallback } from 'recoil'
import { itemSelector } from '../selectors'

export const useUpdateItem = () =>
  useRecoilCallback(({ set }, newItem) => {
    set(itemSelector(newItem.id), newItem)
  })

export const useUpdateItems = () =>
  useRecoilCallback(({ set }, newItems) => {
    newItems.forEach((item) => {
      set(itemSelector(item.id), item)
    })
  })
