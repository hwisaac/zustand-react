import { create, ExtractState, StateCreator } from 'zustand';

interface UserSlice {
  name: string;
  age: number;
  increaseAge: () => void;
}

interface SettingsSlice {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const createUserSlice : StateCreator<UserSlice & SettingsSlice, [], [], UserSlice> = (set) => ({
  name: '홍길동',
  age: 30,
  increaseAge: () =>
    set((state) => ({
      age: state.age + 1,
    })),
});

const createSettingsSlice : StateCreator<UserSlice & SettingsSlice, [], [], SettingsSlice> = (set) => ({
  theme: 'light',
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
});

const useUserStore = create<UserSlice & SettingsSlice>()(
  (...a) => ({
    ...createUserSlice(...a),
    ...createSettingsSlice(...a),
  })
);

export default useUserStore;
