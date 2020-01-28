import React from 'react'
import styled, { css } from 'styled-components'
import Typist from 'react-typist'

import { media } from '../utils/style'

const StyledTypist = styled(Typist)`
  color: #fff;
  letter-spacing: 10px;
  max-width: 95%;
  font-size: 62px;
  line-height: 66px;
  font-weight: 200;
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
      position: absolute;
    
    top: 35%;
    left: 0;
    right: 0;
    width: 90%;
    transform: translate(10%, 10%);
    letter-spacing: 12px;
    font-size: 25px;
    line-height: 40px;
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
