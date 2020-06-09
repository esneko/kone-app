import { useRecoilCallback } from 'recoil'
import { activeIdsState, itemIdsState } from '../atoms'
import { itemSelector } from '../selectors'

// import { v4 as uuid4 } from 'uuid'
// const generateId = () => uuid4()

// export const useNewItem = () =>
//   useRecoilCallback(async ({ getPromise }, param) => {
//     const newId = generateId()
//     const item = await getPromise(itemSelector(newId))

//     return item
//   })

// export const useLoadItems = () =>
//   useRecoilCallback(
//     async ({ getPromise }, itemIds) =>
//       await Promise.all(itemIds.map((id) => getPromise(itemSelector(id))))
//   )

export const useLoadItems = (key) =>
  useRecoilCallback(({ set }, itemIds) => {
    switch (key) {
      case 'active':
        set(activeIdsState, itemIds)
        break
      default:
        set(itemIdsState, itemIds)
    }
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
