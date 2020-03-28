import React from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'

import Layout from '../layout/layout'
import Button from '../components/button'
import HeroText from '../components/heroText'

const HomeButton = styled(Button)`
  position: absolute;
  bottom: 35%;
  left: 20%;
`

const PageNotFound = () => (
  <Layout>
    
    <HomeButton opaque light onClick={() => navigate('/')}>
      Return To Home Page
    </HomeButton>
    <HeroText text="404 Page Not Found" />
  </Layout>
)

export default PageNotFound
