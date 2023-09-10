import { styled } from 'styled-components';

export const StyledButton = styled.button`
  background-color: white;
  padding: 8px 16px;

  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
