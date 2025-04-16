'use client'

import React from 'react'
import styled from 'styled-components'
import IconLink from '../../public/IconLink'

const LinkWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  cursor: pointer;
  color: ${props => props.$textColor || '#000'};
  width: ${props => props.$width};
  height: ${props => props.$height};
`

export default function LinkComponent({ label, href = "#", variant = 'black', width = '41', height = '41' }) {
  const variants = {
    white: {
      circleBg: '#FFFFFF',
      iconColor: '#B9FF66',
      textColor: '#FFFFFF'
    },
    whiteSecondary: {
      circleBg: '#FFFFFF',
      iconColor: '#000000',
      textColor: '#FFFFFF'
    },
    black: {
      circleBg: '#000000',
      iconColor: '#B9FF66',
      textColor: '#000000'
    },
    blackSecondary: {
      circleBg: '#000000',
      iconColor: '#FFFFFF',
      textColor: '#000000'
    },
    green: {
      circleBg: '#B9FF66',
      iconColor: '#000000',
      textColor: '#000000'
    },
    greenSencondary: {
      circleBg: '#B9FF66',
      iconColor: '#FFFFFF',
      textColor: '#FFFFFF'
    },
    simpleGreen: {
      circleBg: 'transparent',
      iconColor: '#B9FF66',
      textColor: '#B9FF66'
    },
    simpleWhite: {
      circleBg: 'transparent',
      iconColor: '#FFFFFF',
      textColor: '#FFFFFF'
    },
    simpleBlack: {
      circleBg: 'transparent',
      iconColor: '#000000',
      textColor: '#000000'
    }
  }

  const { circleBg, iconColor, textColor } = variants[variant] || variants.black
  const isSimple = variant.startsWith('simple')

  return (
    <LinkWrapper href={href} $textColor={textColor} alt="link" height={height}>
      {isSimple ? (
        <>
          {label}
          <IconLink circleBg={circleBg} iconColor={iconColor} height={height} width={width} />
        </>
      ) : (
        <>
          <IconLink circleBg={circleBg} iconColor={iconColor} height={height} width={width} />
          {label}
        </>
      )}
    </LinkWrapper>
  )
}
