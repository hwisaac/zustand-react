import { create } from 'zustand';

export const types = { increase: 'increase', decrease: 'decrease' } as const;

type Types = keyof typeof types; // 'increase' | 'decrease'

type Action = { type: Types; by?: number };

type State = { grumpiness: number };
type Dispatch = (action: Action) => void;

const reducer = (state: State, { type, by = 1 }: Action): State => {
  switch (type) {
    case 'increase':
      return { grumpiness: state.grumpiness + by };
    case 'decrease':
      return { grumpiness: state.grumpiness - by };
    default:
      return state;
  }
};

export const useGrumpyStore = create<State & { dispatch: Dispatch }>((set) => ({
  grumpiness: 0,
  dispatch: (action) => set((state) => reducer(state, action)),
}));
