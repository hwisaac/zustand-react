import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type Props = {};
type JungleStore = {
    bears: number
    addBear: () => void
    fishes: number
    addFish: () => void
  }

// redux devtools 의 용도
// 1. 상태 변화 추적 (어떤 액션이 발생했고, 상태가 어떻게 변했는가?)
// 2. 타임 트래블링 디버깅 (이전 상태로 되돌리기, 점프하기, 되감기 등)
// 3. 수동 dispatch (직접 액션 실행 가능)
// 4. 상태 스냅샷 저장 및 복원 (현재 상태를 json 으로 저장하기)
// 5. 멀티 스토어 관리 (여러개의 스토어를 따로 디버깅 )

const useJungleStore = create<JungleStore>()(
  devtools((set) => ({
    bears: 0,
    addBear: () =>
      set((state) => ({ bears: state.bears + 1 }), undefined, 'jungle/addBear'),
    fishes: 0,
    addFish: () =>
      set(
        (state) => ({ fishes: state.fishes + 1 }),
        undefined,
        'jungle/addFish'
      ),
  }))
);

export default function DevtoolsPage({}: Props) {
    const {bears, addBear,fishes, addFish} = useJungleStore()
  return <div>DevtoolsPage
    <p>bears: {bears}</p>
    <p>fishes: {fishes}</p>
    <div onClick={addBear}>addBear</div>
    <div onClick={addFish}>addFish</div>
  </div>;
}
