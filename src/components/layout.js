import React from 'react';
import '../style/resert.scss';
import layoutStyles from './layout.module.scss';

import Menu from './menu';
// import Footer from './footer';
import Sidebar from './sidebar';

import { StaticQuery, graphql } from 'gatsby';

export default props => {
  const { children } = props;

  return (
    <StaticQuery
      query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        },
        topics: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              frontmatter {
                categories
                tags
              }
            }
          }
        }
      }
    `}

      render={data => (
        <div className={layoutStyles.container}>
          <div className={layoutStyles.cMenu}>
            <Menu title={data.site.siteMetadata.title} />
          </div>
          <div className={layoutStyles.dContext}>
            <div className={layoutStyles.main}>
              <div>{children}</div>
            </div>
            <div className={layoutStyles.sidebar}>
              <Sidebar edges={data.topics.edges} />
            </div>
          </div>
        </div>
      )}
    />
  )
}