import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import TagCloud from './TagCloud'

const PostHeader = styled.header`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: center;

  p {
    flex: 0 1 auto;
    text-align: right;
    margin: auto 0 auto auto;
    border-bottom: 0.25em solid #262427;
  }
  a {
    flex: 3 0 75%;
    margin: 0;
  }

  h2 {
    flex: 3 0 75%;
    margin: 0;
  }
`

const PostListing = ({ post }) => (
  <div className="posts">
    <article className="post">
      <PostHeader className="post__header">
        <Link to={`blog/${post.frontmatter.slug}`}>
          <h2 className="post__title">{post.frontmatter.title}</h2>
        </Link>
        <p className="post__date">{post.frontmatter.date}</p>
      </PostHeader>
      <main className="post__body">
        <p className="post__excerpt">
          <em>
            {post.frontmatter.abstract
              ? post.frontmatter.abstract
              : post.excerpt}
          </em>
        </p>
      </main>
      <TagCloud tags={post.frontmatter.tags.split(', ')} />
    </article>
    <hr />
  </div>
)

PostListing.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostListing
