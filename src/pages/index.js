import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Derping Around</h1>
    <p>Complete coursres about the best tools and design systems. Protype and build apps with React and Swift.</p>
    <Link to="/page-2/">Watch the video to see more</Link>
  </Layout>
)

export default IndexPage
