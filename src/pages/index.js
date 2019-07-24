import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexComponent extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div>
          <table>
           
          </table>
        </div>
      </Layout>
    )
  }
}

export default IndexComponent
