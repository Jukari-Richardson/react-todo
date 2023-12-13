import React, { useEffect, useRef } from 'react';

function InputWithLabel({ label, value, onChange }) {
  // Create a ref to hold the input DOM element
  const inputRef = useRef();

  // Effect to focus the input element on mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label htmlFor="todoTitle">{label}</label>
      {/* Pass the ref to the input element */}
      <input id="todoTitle" name="title" value={value} onChange={onChange} ref={inputRef} />
    </>
  );
}

export default InputWithLabel;
