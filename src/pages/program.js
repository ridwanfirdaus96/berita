import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Berita from '../images/berita-logo.png'

export default ({ data }) => (
  <Layout>
    <h1>Program {data.site.siteMetadata.title}</h1>
    <p>
      <a href='https://affectionate-borg-4accd1.netlify.com/'>
        <img src={Berita} alt='Berita' />
      </a>
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
