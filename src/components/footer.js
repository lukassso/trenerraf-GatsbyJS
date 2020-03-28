import React from 'react'
import styled, { css } from 'styled-components'

import SocialIcons from './socialIcons'

const Base = styled.div`
  height: fit-contents;
  padding: 0;
  background: #292929;
`

const FooterText = styled.div`
  padding-top: 6px;
  color: #fff;
  text-align: center;
  a {
    color: #9880dc;
  }
`

const SocialIconsStyled = styled(SocialIcons)`
  margin-left: -8px;
  text-align: left;
`

const CenteredButtonBox = styled.div`
  margin: 2em auto;
`

const GalleryContainer = styled.div`
  & > div > div {
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`

class Footer extends React.Component {
  render() {
    return (
      <Base {...this.props}>
       
                <SocialIconsStyled
                  icons={[
                    {
                      name: 'facebook',
                      href: 'https://www.facebook.com/trenerrafalkiszlo/',
                    },
                    {
                      name: 'instagram',
                      href: 'https://www.instagram.com/trener_rafal_kiszlo/?hl=pl',
                    },
                    {
                      name: 'linkedin',
                      href: 'https://www.linkedin.com/in/rafa%C5%82-kisz%C5%82o-7ab799153/',
                    },
                  ]}
                />
           
          
          
        
      </Base>
    )
  }
}

export default Footer
