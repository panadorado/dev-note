import React from "react";
import Layout from "../components/layout";
import Img from 'gatsby-image';

import { graphql, Link } from "gatsby";

import './index.scss';

export default ({ data }) => {
  return (
    <div>

      <Layout>
        {data.allMarkdownRemark.edges.map(({ node }, index) =>
          <div key={index}>
            <div className='tainer'>
              <h3>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h3>
            </div>
            <div>
              <p>
                {node.frontmatter.tags.map((tag, keytag) => 
                  <span key={keytag}>
                    <Link to={`/tag/${(tag)}`}> #{tag}</Link>
                  </span>
                )}
              </p>
            </div>
            <div>
            <Img fixed={node.frontmatter.image.childImageSharp.fixed}/>
            </div>
            <div>
              <p>{node.excerpt}</p>
            </div>
            <div>
              <div>
                <p>
                  {node.frontmatter.author}
                </p>
              </div>
              <div>
                <span>{node.frontmatter.date}</span>
              </div>
            </div>
          </div>
        )}
        
      </Layout>
    </div>
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
            author
            tags
            image {
              childImageSharp {
                fixed(width: 800, height: 410) {
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