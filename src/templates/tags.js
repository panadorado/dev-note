import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from 'gatsby-image';

export default ({ data, pageContext }) => {
  const { tag } = pageContext;
  const tagEdges = data.allMarkdownRemark.edges.filter(({node}) => node.frontmatter.tags.includes(tag));

  return (
    <Layout>
      <h1>Thẻ #{tag}</h1>

      {tagEdges.map(({ node }, index) => 
        <div key={index}>
          <h3>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            <div>
              <Img fixed={node.frontmatter.image.childImageSharp.fixed}/>
            </div>
            <p>
              <span>{node.frontmatter.date}</span>
            </p>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      )}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD-MM-YYYY")
            tags
            image {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
