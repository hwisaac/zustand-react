import React from 'react';
import { useGrumpyStore, types } from '../zustand/reduxStyle';

export default function TestPage() {
  const dispatch = useGrumpyStore((state) => state.dispatch);
  const grumpiness = useGrumpyStore((state) => state.grumpiness);

  const handleIncrease = () => {
    dispatch({ type: 'increase', by: 1 });
  };

  const handleDecrease = () => {
    dispatch({ type: 'decrease', by: 1 });
  };

  return (
    <div>
      <h1>Grumpiness: {grumpiness}</h1>
      <button onClick={handleIncrease}>증가</button>
      <button onClick={handleDecrease}>감소</button>
    </div>
  );
}
