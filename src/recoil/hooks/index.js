import { useRecoilCallback } from 'recoil'
import { itemIdsState } from '../atoms'
import { itemSelector } from '../selectors'

export const useLoadItems = () =>
  useRecoilCallback(({ set }, ids) => {
    set(itemIdsState, ids)
  })

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
