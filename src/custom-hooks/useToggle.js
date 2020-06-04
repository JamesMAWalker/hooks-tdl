import { useState } from 'react';

function useToggle(initVal = false) {
  const [state, setThisState] = useState(initVal);

  const toggleIt = () => {
    setThisState(!state);
  };
  return [state, toggleIt];
}

export default useToggle;
