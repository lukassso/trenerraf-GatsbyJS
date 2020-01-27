import React from 'react'
import styled, { css } from 'styled-components'
import Typist from 'react-typist'

import { media } from '../utils/style'

const StyledTypist = styled(Typist)`
  color: #fff;
  letter-spacing: 10px;
  max-width: 100%;
  font-size: 62px;
  line-height: 66px;
  font-weight: 100;
  text-transform: uppercase;
  font-family: 'Raleway';
  position: absolute;
  top: 50%;
  left: 50%;
  ${media.md`
  left: 25%;
  top: 40%;
`}
  ${media.xs`
  left: 13%;
  top: 35%;
  letter-spacing: 12px;
  font-size: 32px;
  line-height: 30px;
`}
`

class HeroText extends React.Component {
  render() {
    if (this.props.text) {
      return (
        <Typist>
          <StyledTypist {...this.props}>
            <strong>
              {this.props.text.split(' ').slice(0, 1)}
              <br />
            </strong>
            {this.props.text
              .split(' ')
              .slice(1)
              .join(' ')}
          </StyledTypist>
        </Typist>
      )
    }
    return (
      <StyledTypist cursor={{ show: false }} {...this.props}>
        <strong>Sprawiam, że</strong>
        <Typist.Delay ms={700} />
        <span>.</span>
        <Typist.Delay ms={700} />
        <span>.</span>
        <Typist.Delay ms={700} />
        <span>.</span>
        <Typist.Backspace count={15} delay={2900} />
        <span> ludzkie ciała</span>
        <Typist.Backspace count={13} delay={1300} />
        <span> wyglądają</span>
        <Typist.Backspace count={9} delay={900} />
        <span> zjawiskowo</span>
        
        <Typist.Backspace count={29} delay={4000} />
        <strong>Skontaktuj się ze mną</strong> Jak najszybciej! 😀
      </StyledTypist>
    )
  }
}

export default HeroText
