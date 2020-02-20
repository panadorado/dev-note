import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import './index.scss';
import Img from 'gatsby-image';
export default ({ data }) => {
  return (
    <div>

      <Layout>
        <h2>Trang chủ</h2>

        {data.allMarkdownRemark.edges.map(({ node }, index) =>

          <div key={index} className="ndexs hh">
            <div>
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
                fixed(width: 300, height: 200) {
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