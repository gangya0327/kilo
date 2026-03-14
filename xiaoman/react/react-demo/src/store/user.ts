import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface User {
  gourd: {
    oneChild: string
    twoChild: string
  }
  updateGourd: () => void
}

// 创建 store
const useUserStore = create<User>()(
  immer((set) => ({
    // 初始化葫芦娃状态
    gourd: {
      oneChild: '大娃',
      twoChild: '二娃',
    },
    // 更新方法
    updateGourd: () =>
      // set((state) => ({
      //   gourd: {
      //     ...state.gourd, // 需要手动合并状态
      //     oneChild: '大娃-超进化',
      //   },
      // })),
      set(state=>{
        state.gourd.oneChild = '大娃-超进化'
      })
  }))
)

export default useUserStore
