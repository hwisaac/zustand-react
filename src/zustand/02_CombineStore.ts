import { create, ExtractState } from 'zustand';
import { combine } from 'zustand/middleware';

const useUserStore = create(
  combine(
    {
      name: '홍길동',
      age: 30,
    },
    (set) => ({
      increaseAge: (by: number) => set((state) => ({ age: state.age + by })),
    })
  )
);

type UserStore = ExtractState<typeof useUserStore>;

export default useUserStore;
