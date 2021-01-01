import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface Parameters {
  name: string;
  type: string;
  placeholder: string;
  label?: string;
  width?: string;
  '...rest'?: any[];
}

export default function Input({
  name,
  type,
  placeholder,
  label = '',
  width = 'auto',
  ...rest
}: Parameters) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container width={width}>
      <label htmlFor={fieldName}>{label}</label>
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </Container>
  );
}
