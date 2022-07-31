import React from 'react'
import Container from '../components/container'
import Intro from '../components/intro'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { graphql, Link } from 'gatsby'

export default function Index({ data: { site, blog } }) {
    return (
        <Container>
            <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />
            <Intro />
            <Link to={`/blog`}>Go to blog</Link>
        </Container>
    )
}

export const query = graphql`
    {
        site: datoCmsSite {
            favicon: faviconMetaTags {
                ...GatsbyDatoCmsFaviconMetaTags
            }
        }
        blog: datoCmsBlog {
            seo: seoMetaTags {
                ...GatsbyDatoCmsSeoMetaTags
            }
        }
    }
`
