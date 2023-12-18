import React, { useEffect, useRef } from 'react';

function InputWithLabel({ id, value, onChange, children }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input id={id} name={id} value={value} onChange={onChange} ref={inputRef} />
    </>
  );
}

export default InputWithLabel;




