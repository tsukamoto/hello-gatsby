import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/page-3/">Go to page 3</Link>
    <Link to="/css-plugin/">Go to CSS PLUG-IN</Link> (NOT WORK, => <Link to="/page-3/">Go to page 3</Link>)
  </Layout>
)

export default IndexPage
