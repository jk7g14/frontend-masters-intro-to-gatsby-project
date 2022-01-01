import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const query = graphql`
  query CocktailQuery {
    file(name: { eq: "cocktail" }) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`

export default function AboutPage({ data }) {
  return (
    <Layout
      title="About This Site"
      description="More information about this site"
    >
      <GatsbyImage image={getImage(data.file)} alt="sjdfklsdjkfls sjflksdjf" />
      <h1>About This Page</h1>
      <Link to="/">Go home</Link>
    </Layout>
  )
}
