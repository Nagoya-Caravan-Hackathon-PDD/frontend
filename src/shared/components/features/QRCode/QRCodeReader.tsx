'use client';
import { useState } from 'react';
import { useZxing } from 'react-zxing';

export const QRCodeReader = () => {
  const [result, setResult] = useState('');
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });
  return (
    <>
      <video
        ref={ref}
        style={{
          width: 'calc(100vw - 32px)',
          height: '50vh',
          marginTop: '16px',
          border: '1px solid black',
        }}
      />
      <p>
        <span>{result}</span>
      </p>
    </>
  );
};
