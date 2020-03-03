import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from 'gatsby-image';
import Title from '../components/helmet.title';
import './categories.scss';

export default ({ data, pageContext }) => {
  const { category } = pageContext;
  const categoryEdges = data.allMarkdownRemark.edges.filter(({node}) => node.frontmatter.categories.includes(category));

  return (
    <Layout>
      <Title title={category} />
      <div className='container--category'>

        <div className='category__title'>
          <h1>Chuyên mục "<span className='category--blue'>{category}</span>"</h1>
        </div>

        {categoryEdges.map(({ node }, index) => 
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
      </div>
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
            author
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
