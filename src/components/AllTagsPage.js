import React from 'react'
import PropTypes from 'prop-types'
import SEO from './SEO'
import TagCloud from './TagCloud'

function AllTags({ pageContext }) {
  return (
    <>
      <SEO title="Tags" />
      <h2>Tags:</h2>
      <hr />
      <TagCloud tags={pageContext.siteTags} />
    </>
  )
}

AllTags.defaultProps = {
  pageContext: {},
}

AllTags.propTypes = {
  pageContext: PropTypes.object,
}

export default AllTags
