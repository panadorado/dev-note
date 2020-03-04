import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Title from '../components/helmet.title';
import './blog-post.scss';
import '../style/_pygments-themes.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUserAlt, faTags } from '@fortawesome/free-solid-svg-icons';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
    <Title title={post.frontmatter.title} />
      <div className='content--post'>
        <div className='block--title'>
          <h1>{post.frontmatter.title}</h1>
          <span>
            <FontAwesomeIcon icon={faUserAlt} size={"1px"} />
            {post.frontmatter.author}
          </span>
          <span>
            <FontAwesomeIcon icon={faClock} size={"1px"} />
            {post.frontmatter.date}
          </span>
          <div>
              <span>
                <FontAwesomeIcon icon={faTags} size={"1px"} />

                {post.frontmatter.tags.map((tag, keytag) => 
                  <Link key={keytag} to={`/tag/${(tag)}`}>#{tag}</Link>
                )}

              </span>
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