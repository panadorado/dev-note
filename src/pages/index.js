import React from "react";
import Layout from "../components/layout";
import Img from 'gatsby-image';

import { graphql, Link } from "gatsby";
import Title from '../components/helmet.title';
import './index.scss';


export default ({ data }) => {
  return (
    <div>

      <Layout>
        <Title title='Trang chủ' />
        {data.allMarkdownRemark.edges.map(({ node }, index) =>
          <div className='container' key={index}>
            <div className='d__img'>
              <Link to={node.fields.slug}>
                <Img className='img__link' objectFit="cover" objectPosition="50% 50%" fixed={node.frontmatter.image.childImageSharp.fixed}/>
              </Link>
            </div>

            <div className='content'>
              <div>
                <h2>
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </h2>
              </div>

              <div>
                <p className='content__tag'>
                  {node.frontmatter.tags.map((tag, keytag) => 
                    <span key={keytag}>
                      <Link to={`/tag/${(tag)}`}> #{tag}</Link>
                    </span>
                  )}
                </p>
              </div>
              

              <div className='content__text'>
                <p>{node.excerpt}</p>
              </div>
              <div className='content__footer'>
                <div>
                  <p>
                    <span>
                      {node.frontmatter.author}
                    </span>
                    
                    <span>
                      {node.frontmatter.date} 
                    </span>
                  </p>
                </div>
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
                fixed(width: 410, height: 215, quality: 95) {
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