import React from 'react'
import twitter from 'twitter-text'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SocialMediaFeedItemLayout = styled.article`
  background: #f8efb6;
  text-align: center;
  padding: 0.25em;
  border: 0.25em solid #262427;

  & + article {
    margin-top: 1em;
  }

  blockquote {
    word-wrap: break-word;
  }
`
function SocialMediaFeedItem({ date, html, handle }) {
  return (
    <SocialMediaFeedItemLayout>
      <p>{handle}</p>
      <blockquote>
        <h3
          // eslint-disable-next-line
          dangerouslySetInnerHTML={{
            __html: twitter.autoLink(html),
          }}
        />
      </blockquote>
      <p>{date}</p>
    </SocialMediaFeedItemLayout>
  )
}

SocialMediaFeedItem.defaultProps = {
  date: '',
  handle: '@thephilgray',
}

SocialMediaFeedItem.propTypes = {
  html: PropTypes.string.isRequired,
  date: PropTypes.string,
  handle: PropTypes.string,
}

export default SocialMediaFeedItem
