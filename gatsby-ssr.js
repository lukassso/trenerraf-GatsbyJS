/* eslint-disable import/prefer-default-export, react/prop-types */
import React from 'react'
import Layout from './src/layout/layout'

export const wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
