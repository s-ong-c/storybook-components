import { useState, useCallback } from 'react';

export default function useInput(defaultValue: string) {
  const [input, setInput] = useState(defaultValue);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const sliced = e.target.value.replace(/\n/g, '').slice(0, 500);
      setInput(sliced);
    },
    [],
  );
  const onReset = useCallback(() => setInput(''), []);
  return [input, onChange, onReset] as [
    string,
    typeof onChange,
    typeof onReset,
  ];
}
