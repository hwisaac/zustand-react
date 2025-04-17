import { create } from 'zustand'
import { combine } from 'zustand/middleware'

// combine 미들웨어 지식 필요
// 컴바인 미들웨어는 여러개의 스토어를 하나로 합칠 수 있게 해준다.
const useGameStore = create(
  combine(
    { 
      history: [Array(9).fill(null)], 
      currentMove: 0 
    },
    (set) => {
      return {
        setHistory: (nextHistory) => {
          set((state) => ({
            history:
              typeof nextHistory === 'function'
                ? nextHistory(state.history)
                : nextHistory,
          }))
        },
        setCurrentMove: (nextCurrentMove) => {
          set((state) => ({
            currentMove:
              typeof nextCurrentMove === 'function'
                ? nextCurrentMove(state.currentMove)
                : nextCurrentMove,
          }))
        },
      }
    },
  ),
)

export default useGameStore 