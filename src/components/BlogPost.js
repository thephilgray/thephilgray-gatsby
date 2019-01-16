import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SEO from './SEO'
import TagCloud from './TagCloud'

const BlogPostLayout = styled.article`
  max-width: 50em;
  margin: auto;
  @media screen and (min-width: 1200px) {
    max-width: 800px;
    padding: 0;
  }
`

const BlogPostHeader = styled.header`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: center;

  h1 {
    flex: 3 0 75%;
    margin: 0;
  }

  p {
    flex: 0 1 auto;
    text-align: right;
    margin: auto 0 auto auto;
    border-bottom: ${({ theme }) => `.25em solid ${theme.black}`};
  }
`

const BlogPostBody = styled.div`
  a {
    font-weight: 600;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }
`

function BlogPost({ data, location }) {
  const { markdownRemark } = data
  return (
    <>
      <SEO title={markdownRemark.frontmatter.title} />
      <BlogPostLayout>
        <BlogPostHeader>
          <h1>{markdownRemark.frontmatter.title}</h1>
          <p>{markdownRemark.frontmatter.date}</p>
        </BlogPostHeader>
        <p>
          <em>{markdownRemark.frontmatter.abstract}</em>
        </p>
        <hr />
        <BlogPostBody
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        />
        <TagCloud tags={markdownRemark.frontmatter.tags.split(', ')} />
        <hr />
      </BlogPostLayout>
    </>
  )
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
}

export default BlogPost

export const query = graphql`
  query PostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        slug
        tags
        abstract
      }
      html
    }
  }
`
