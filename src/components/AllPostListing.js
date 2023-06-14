import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PostListing from './PostListing'

const BLOG_POST_LISTING = graphql`query BLOG_POST_LISTING {
  allMarkdownRemark(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {draft: {ne: true}}, fileAbsolutePath: {regex: "/posts/"}}
  ) {
    edges {
      node {
        frontmatter {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
          tags
          abstract
        }
        excerpt
        id
      }
    }
  }
}`

const AllPostListing = () => (
  <StaticQuery
    query={BLOG_POST_LISTING}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(({ node }) => (
        <PostListing post={node} key={node.id} />
      ))
    }
  />
)

export default AllPostListing
