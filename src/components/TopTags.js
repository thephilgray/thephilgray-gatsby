import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import TagCloud from './TagCloud'
import { allTagsFromMarkdown, sortTagsByNumberOfPosts } from '../lib/filters'

const TAG_CLOUD_LISTING = graphql`
  query TAG_CLOUD_LISTING {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`

function TopTags({ tagLimit }) {
  return (
    <StaticQuery
      query={TAG_CLOUD_LISTING}
      render={({ allMarkdownRemark }) => {
        const topTags = (allTags, limit) =>
          sortTagsByNumberOfPosts(allTags).splice(0, limit)

        const tags = topTags(
          allTagsFromMarkdown(allMarkdownRemark.edges),
          tagLimit
        )

        return <TagCloud tags={tags} max={14} linkMore />
      }}
    />
  )
}

TopTags.defaultProps = {
  tagLimit: 10,
}

TopTags.propTypes = {
  tagLimit: PropTypes.number,
}

export default TopTags
