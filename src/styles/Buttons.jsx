import styled from 'styled-components';

export const ButtonBase = styled.button`
  width: fit-content;
  height: 68px;
  padding: 20px 35px 20px 35px;
  border-radius: 14px;
  cursor: pointer;
  font-weight: 400;
  font-size: 20px;
  gap: 10px;
  line-height: 1;
`;

export const OutlinedButton = styled(ButtonBase)`
  border: 1px solid var(--dark);
  background-color: var(--white);
`;

export const PrimaryButton = styled(ButtonBase)`
  border: solid var(--dark);
  background-color: var(--dark);
  color: var(--white);
`;

export const GreenButton = styled(ButtonBase)`
  height: 68px;
  border-radius: 14px;
  padding: 20px 35px;
  gap: 10px;
  background-color: var(--green);
  color: var(--black);
  border: none;
`;
