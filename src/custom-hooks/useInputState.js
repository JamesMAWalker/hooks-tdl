import { useState } from 'react';

export default (initVal) => {
  const [val, setVal] = useState(initVal);

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const resetInput = () => {
    setVal('');
  };
  return [val, handleChange, resetInput];
};
