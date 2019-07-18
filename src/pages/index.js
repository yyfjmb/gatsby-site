import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexComponent extends React.Component {
  render() {
    const data = this.props.data.allLettersCsv.edges
    return (
      <Layout>
        <SEO title="Home" />
        <div>
          <table>
            <thead>
              <tr>
                <th>Letter</th>
                <th>ASCII Value</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={`${row.node.value} ${i}`}>
                  <td>{row.node.letter}</td>
                  <td>{row.node.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    )
  }
}

export default IndexComponent

export const IndexQuery = graphql`
  query {
    allLettersCsv {
      edges {
        node {
          letter
          value
        }
      }
    }
  }
`