import styled from 'styled-components'
import { colors, sizes, typography } from './Theme' 

export const ButtonBase = styled.button`
  height: ${sizes.buttonHeight};
  padding: ${sizes.buttonPadding};
  border-radius: ${sizes.borderRadius};
  cursor: pointer;
  font-weight: ${typography.regular.fontWeight};
  font-size: ${typography.regular.fontSize};
  line-height: ${typography.regular.lineHeight};
  white-space: nowrap;
  gap: 10px;
  line-height: 28px;
`

export const OutlinedButton = styled(ButtonBase)`
  width: 231px;
  border: 1px solid ${colors.primary};
  background-color: ${colors.white};
`

export const PrimaryButton = styled(ButtonBase)`
  width: 264px;
  border: solid ${colors.primary};
  background-color: ${colors.primary};
  color: ${colors.white};
` 

export const GreenButton = styled(ButtonBase)`
  width: 249px;
  height: 68px;
  border-radius: 14px;
  padding: 20px 35px;
  gap: 10px;
  background-color: ${colors.green};
  color: ${colors.dark};
  border: none;
` 