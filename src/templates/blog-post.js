import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Title from '../components/helmet.title';
import './blog-post.scss';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
    <Title title={post.frontmatter.title} />
      <div className='content--post'>
        <div className='block--title'>
          <h1>{post.frontmatter.title}</h1>
          <span>{post.frontmatter.author}</span>
          <span>{post.frontmatter.date}</span>
          <div>
            {post.frontmatter.tags.map((tag, keytag) => 
              <Link key={keytag} to={`/tag/${(tag)}`}>#{tag}</Link>
            )}
          </div>
        </div>
        <hr />
        <div className='highlight content--main' dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD-MM-YYYY")
        tags
        author
      }
    }
  }
`