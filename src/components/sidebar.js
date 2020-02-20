import React from "react";
import "./sidebar.module.scss";
import slug from "slug";
import { Link } from "gatsby";

export default (props) => {
  const { edges } = props;
  let tags = [];
  let categories = [];

  edges.forEach(({ node }) => {
    tags = Array.from(new Set([...tags, ...node.frontmatter.tags]));
    categories = Array.from(new Set([...categories, ...node.frontmatter.categories]));
  });

  return (
    <aside>
      <div>
        <h3>Chuyên mục bài viết</h3>
        {
          categories.map((category, index) => (
            <p key={index}>
              <Link to={`/category/${slug(category).toLowerCase()}/`}>{category}</Link>
            </p>
          ))
        }
      </div>

      <div>
        <h3>Thẻ</h3>
        {
          tags.map((tag, index) => (
            <span key={index}>
              <Link to={`/tag/${slug(tag).toLowerCase()}/`}>#{tag}</Link>{" "}
            </span>
          ))
        }
      </div>
    </aside>
  )
}