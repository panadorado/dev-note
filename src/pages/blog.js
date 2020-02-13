import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Helmets from '../components/helmets'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Sidebar from '../components/sidebar'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
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
                        }
                        excerpt
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Helmets title='Blog' />
            <h1>Blog</h1>
            <div className={blogStyles.main}>
                <ol className={blogStyles.posts}>
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${(edge.node.fields.slug).split("---")[1]}`}>
                                    <h2>{edge.node.frontmatter.title}</h2>
                                    <p>{edge.node.frontmatter.date}</p>
                                    <i>{edge.node.excerpt}</i>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </div>
            <div className={blogStyles.sidebar}>
                <Sidebar />
            </div>
        </Layout>
    )
}


export default BlogPage