import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

export default function IndexPage() {
  return (
    <Layout>
      <h1>Hello frontend masters</h1>
      <Link to="/about">About this page</Link>
    </Layout>
  )
}
