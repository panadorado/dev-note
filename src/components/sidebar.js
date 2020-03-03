import React from "react";
import slug from "slug";
import { Link } from "gatsby";
import sidebarStyle from "./sidebar.module.scss";

export default (props) => {
  const { edges } = props;
  let tags = [];
  let categories = [];

  edges.forEach(({ node }) => {
    tags = Array.from(new Set([...tags, ...node.frontmatter.tags]));
    categories = Array.from(new Set([...categories, ...node.frontmatter.categories]));
  });

  return (
    <div className={sidebarStyle.container__sidebar}>
      <div className={sidebarStyle.sidebar__categories}>
        <h3>Chuyên mục bài viết.</h3>
        {
          categories.map((category, index) => (
            <Link to={`/category/${slug(category).toLowerCase()}/`}>
              <p key={index}>
                {category}
              </p>
            </Link>
          ))
        }
      </div>

      <div className={sidebarStyle.sidebar__tags}>
        <h3>Thẻ.</h3>
        {
          tags.map((tag, index) => (
            <span key={index}>
              <Link to={`/tag/${slug(tag).toLowerCase()}/`}>#{tag}</Link>
                {" "}
            </span>
          ))
        }
      </div>
    </div>
  )
}