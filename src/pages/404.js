import React from 'react'
import { navigate } from 'gatsby'
import Layout from '../layout'


const PageNotFound = () => (
  <Layout>
    
    <div opaque light onClick={() => navigate('/')}>
      Return To Home Page
    </div>
    <div text="404 Page Not Found" />
  </Layout>
)

export default PageNotFound
