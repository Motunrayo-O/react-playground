import { create } from "zustand";

interface CounterStore {
  value: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  value: 0,
  increment: () => set((store) => ({ value: store.value + 1 })),
  reset: () => set(() => ({ value: 0 })),
}));

export default useCounterStore;
