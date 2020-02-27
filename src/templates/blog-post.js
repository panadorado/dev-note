import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Title from '../components/helmet.title';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
    <Title title={post.frontmatter.title} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        {post.frontmatter.tags.map((tag, keytag) => 
          <Link key={keytag} to={`/tag/${(tag)}`}>-{tag}</Link>
        )}
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
      }
    }
  }
`