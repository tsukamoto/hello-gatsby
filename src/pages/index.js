import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <p>Welcome to my new React site.</p>
    <p>Now go build something great.</p>
    <ul>
      <li><Link to="/page-2/">Go to page 2</Link></li>
      <li><Link to="/page-3/">Go to page 3</Link></li>
      <li>{/* <Link to="/css-plugin/"> */}Go to CSS PLUG-IN{/* </Link>  */}(NOT WORK, => <Link to="/page-3/">Go to page 3</Link>)</li>
      <li><Link to="/data/">Go to Data Out Put Page</Link></li>
      <li><Link to="/hn/">Go to Hacker News Page</Link></li>
    </ul>
  </Layout>
)

export default IndexPage
