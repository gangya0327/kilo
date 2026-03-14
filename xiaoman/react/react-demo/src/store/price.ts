import { create } from 'zustand'

type PriceState = {
  price: number
  state: number
  increment: () => void
  decrement: () => void
  reset: () => void
  getPrice: () => number
}

const usePriceStore = create<PriceState>((set, get) => ({
  price: 0,
  state: 123,
  increment: () => set((state) => ({ price: state.price + 1 })),
  decrement: () => set((state) => ({ price: state.price - 1 })),
  reset: () => set(() => ({ price: 0 })),
  getPrice: () => get().price,
}))

export default usePriceStore
