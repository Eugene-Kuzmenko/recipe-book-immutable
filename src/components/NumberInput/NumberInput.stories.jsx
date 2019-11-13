import React, { useState } from 'react';
import NumberInput from './NumberInput';

export default {
  title: 'NumberInput'
}

export const uncontrolled = () => (
  <NumberInput value={42} />
);

export const controlled = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <div>{value}</div>
      <NumberInput
        value={value}
        onChange={setValue}
      />
    </div>
  )
};