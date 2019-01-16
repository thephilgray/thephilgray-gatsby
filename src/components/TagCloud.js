import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import IndividualTag from './Tag'

const TagCloudWrapper = styled.div`
  margin: 1em 0;
  display: flex;
  flex-wrap: wrap;
`

function TagCloud({ tags, max, linkMore, linked }) {
  /* return true if the number of tags is greater than the provided max value */
  const maxReached = (tagsArray, maxTags) => tagsArray.length > maxTags

  /* return a new array of only the max number of tags */
  const tagsArrayAbridged = (tagsArray, maxTags) =>
    maxReached ? tagsArray.slice(0, maxTags - 1) : tagsArray

  /* render tag components from an array */

  const renderTags = arr =>
    arr.map(tag => <IndividualTag key={tag} tagName={tag} linked={linked} />)

  return (
    <TagCloudWrapper>
      {max ? renderTags(tagsArrayAbridged(tags, max)) : renderTags(tags)}
      {max && maxReached(tags, max) && (
        <IndividualTag
          key="more..."
          linked={linked || linkMore}
          more={linkMore}
          tagName="more..."
        />
      )}
    </TagCloudWrapper>
  )
}

TagCloud.defaultProps = {
  tags: [],
  max: null,
  linkMore: false,
  linked: true,
}

TagCloud.propTypes = {
  tags: PropTypes.array,
  max: PropTypes.number,
  linkMore: PropTypes.bool,
  linked: PropTypes.bool,
}

export default TagCloud
