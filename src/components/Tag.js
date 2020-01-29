import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { slugFilter } from '../lib/filters'

const StyledTag = styled.span`
  margin: 0.5em;
  border: 1px solid #262427;
  background: #fff;
  padding: 0 0.5em;
  a {
    text-decoration: none;
  }
`

function Tag({ tagName, linked, more }) {
  return (
    <StyledTag>
      {linked ? (
        <Link to={more ? `/tags/` : `/tags/${slugFilter(tagName)}`}>
          {tagName}
        </Link>
      ) : (
        tagName
      )}
    </StyledTag>
  )
}

Tag.defaultProps = {
  linked: true,
  more: false,
}

Tag.propTypes = {
  linked: PropTypes.bool,
  more: PropTypes.bool,
  tagName: PropTypes.string.isRequired,
}

export default Tag
