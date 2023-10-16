import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface CounterStore {
  value: number;
  max: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  value: 0,
  max: 5,
  increment: () => set((store) => ({ value: store.value + 1 })),
  reset: () => set(() => ({ value: 0 })),
}));

if (process.env.NODE_ENV == "development")
  mountStoreDevtool("Counter Store", useCounterStore);

export default useCounterStore;
