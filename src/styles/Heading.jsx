import styled, { css } from 'styled-components'


const variantStyles = {
  green: css`
    background-color: #B9FF66;
    color: black;
  `,
  white: css`
    background-color: white;
    color: black;
  `,
  black: css`
    background-color: #1A1A1A;
    color: white;
  `,
}

const sizeStyles = {
  h1: css`
    font-size: 48px;
    height: 60px;
  `,
  h2: css`
    font-size: 40px;
    height: 51px;
  `,
  h3: css`
    font-size: 32px;
    height: 43px;
  `,
}

export const Heading = styled.h2`
  font-weight: 500;
  line-height: 100%;
  margin: 0px;
  display: flex;
  width: 178px;
  border-radius: 7px;
  gap: 10px;
  padding: 0px 7px;
  align-items: center;
  justify-content: center;

  ${({ variant }) => variantStyles[variant] || variantStyles.green}
  ${({ size }) => sizeStyles[size] || sizeStyles.h2}
`

export default Heading