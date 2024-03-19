import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PostListing from './PostListing'

const BLOG_POST_LISTING = graphql`
  query BLOG_POST_LISTING {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { draft: { ne: true }, archived: { ne: true } }
        fileAbsolutePath: { regex: "/posts/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            tags
            abstract
            archived
          }
          excerpt
          id
        }
      }
    }
  }
`

const AllPostListing = () => (
  <StaticQuery
    query={BLOG_POST_LISTING}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.length ? (
        allMarkdownRemark.edges.map(({ node }) => (
          <PostListing post={node} key={node.id} />
        ))
      ) : (
        <p>
          All the stuff that was here was a few years old. Currently working on
          creating some new content for this site. Check back soon.
        </p>
      )
    }
  />
)

export default AllPostListing
