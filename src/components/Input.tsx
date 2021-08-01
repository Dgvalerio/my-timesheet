/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';

import { darken } from 'polished';
import styled from 'styled-components';

import { IInput } from '../types/interfaces';

const Wrapper = styled.label<{ error: boolean }>`
  &,
  input {
    display: flex;
  }

  width: 100%;
  flex-direction: column;
  ${({ error }) => error && 'color: red'};

  &:focus-within::after {
    animation: active linear 8s infinite;
  }

  &::after {
    content: '';
    background: ${({ error }) =>
      error
        ? 'linear-gradient(to right, #590602, #a6f9fd, #590602)'
        : 'linear-gradient(to right, #020659, #a6f9fd, #020659)'};
    background-size: 400% 400%;

    height: 2px;
  }

  input {
    padding: 0.6rem 0.8rem;
    background-color: ${({ theme, error }) =>
      error ? darken(0.4, 'red') : theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.2rem;
    border: none;

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px
        ${({ theme }) => darken(0.02, theme.colors.background)} inset !important;
      -webkit-text-fill-color: ${({ theme }) => theme.colors.text} !important;
    }
  }

  @keyframes active {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 200% 50%;
    }
    100% {
      background-position: 400% 50%;
    }
  }
`;

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ id, type, name, required, error, ...props }, ref) => (
    <Wrapper htmlFor={id} error={error || false}>
      <input
        id={id}
        name={name || id}
        type={type || 'text'}
        required={required || true}
        ref={ref}
        {...props}
      />
    </Wrapper>
  )
);

export default Input;
