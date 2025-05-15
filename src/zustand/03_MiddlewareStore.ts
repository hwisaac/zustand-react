import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface UserState {
  name: string;
  age: number;
  increaseAge: (by: number) => void;
}

const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        name: '홍길동',
        age: 30,
        increaseAge: (by) => set((state) => ({ age: state.age + by })),
      }),
      { name: 'userStore' }
    )
  )
);

export default useUserStore;
