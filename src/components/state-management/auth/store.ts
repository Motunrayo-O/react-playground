import { create } from "zustand";
interface AuthStore {
  user: string;
  login: () => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: "",
  login: () => set((store) => ({ user: "Ayra Star" })),
  logout: () => set(() => ({ user: "" })),
}));

export default useAuthStore;
