import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'gatsby-link'
// import { Flex, Box } from 'grid-styled'
import scrollToElement from 'scroll-to-element'
import FlickrLightbox from 'react-flickr-lightbox'

import Name from './name'
import Button from './button'
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
        <div flexWrap="wrap" justifyContent="space-around">
          <div px={2} width={[1, 1 / 2, 1 / 3, 1 / 6]}>
            <div flexDirection="column">
              <div>
                <Name block />
              </div>
              <div>
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
              </div>
            </div>
          </div>
          <div width={[1, 1 / 2, 1 / 3, 1 / 6]}>
            <div justifyContent="center" flexDirection="column">
              <div>
                <FooterText>
                  <h4>
                    Made with ❤️ using{' '}
                    <a href="https://www.gatsbyjs.org/">GatsbyJS</a>
                  </h4>
                </FooterText>
              </div>
              <CenteredButtonBox>
                <Button
                  onClick={() => {
                    scrollToElement('html')
                  }}
                  small="small"
                  dark="dark"
                  opaque="opaque"
                >
                  Top
                </Button>
              </CenteredButtonBox>
            </div>
          </div>
          <div width={[4 / 5, 1 / 2, 1 / 3, 1 / 6]} pt={2}>
            <div alignItems="center" justifyContent="center">
              <GalleryContainer>
                <FlickrLightbox
                  api_key="1b4e5b0203fab0d5731afe68f0a543e1"
                  user_id="132343752@N06"
                  limit={8}
                />
              </GalleryContainer>
            </div>
          </div>
        </div>
      </Base>
    )
  }
}

export default Footer
