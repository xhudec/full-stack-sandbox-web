import styled from 'styled-components'

export const Button = styled.button`
  padding: 8px 16px;
  background-color: white;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:active {
    background-color: blue;
    border-color: blue;
  }

  &:disabled {
    color: #343434;
    border-color: #343434;
    background-color: white;
    cursor: not-allowed;
  }

  &:disabled:hover {
    color: #555;
    border-color: #555;
    background-color: white;
    cursor: not-allowed;
  }

  transition: background-color 200ms ease-in-out, color 200ms ease-in-out,
    border-color 200ms ease-in-out, transform 200ms ease-in-out;
`
