import React from 'react'
import styled from 'styled-components';
import LogoImage from './logoImage';

const LogoImageStyled = styled.div`
  max-width: 200px;

`

export default function Logo() {
  return (
    <LogoImageStyled>
      <LogoImage/>
    </LogoImageStyled>
  )
}
