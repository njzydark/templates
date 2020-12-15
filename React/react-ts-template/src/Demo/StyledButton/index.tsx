import styled, { css } from 'styled-components';

const enum ButtonColor {
  primary = '#A855F7',
  danger = '#F43F5E',
  default = '#fff'
}

export const Button = styled.button<{ primary?: boolean; danger?: boolean }>`
  border: none;
  padding: 8px 24px;
  background: ${ButtonColor.default};
  color: #000;
  font-size: 18px;
  border-radius: 32px;
  border: 1px solid #d9d9d9;
  cursor: pointer;

  ${props =>
    props.danger &&
    css`
      border-color: ${ButtonColor.danger};
      background: ${ButtonColor.danger};
      color: white;
    `}

  ${props =>
    props.primary &&
    css`
      border-color: ${ButtonColor.primary};
      background: ${ButtonColor.primary};
      color: white;
    `}
`;
