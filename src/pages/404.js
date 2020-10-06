import React from 'react'
import {navigate} from 'gatsby'
import Layout from '../layout'

const PageNotFound = () => (
    <Layout>
        <div onClick={() => navigate('/')}>
            Powróć do strony głównej
        </div>
        {/* <div text="404 Page Not Found"/> */}
    </Layout>
)

export default PageNotFound
