import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from 'gatsby-image';

export default ({ data, pageContext }) => {
  const { category } = pageContext;
  const categoryEdges = data.allMarkdownRemark.edges.filter(({node}) => node.frontmatter.categories.includes(category));

  return (
    <Layout>
      <h1>Chuyên mục {category}</h1>

      {categoryEdges.map(({ node }, index) => 
        <div key={index}>
          <h3>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </h3>
          <div>
          <Img fixed={node.frontmatter.image.childImageSharp.fixed}/>
          </div>
          <p>
            <span>{node.frontmatter.date}</span>
          </p>
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
            categories
            image {
              childImageSharp {
                fixed(width: 350, height: 200) {
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
