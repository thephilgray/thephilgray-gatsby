import React, { Component } from 'react'
import axios from 'axios'
import SocialMediaFeedItem from './SocialMediaFeedItem'

export default class SocialMediaFeed extends Component {
  constructor(props) {
    super(props)
    this.state = { latestPosts: [] }
  }

  async componentDidMount() {
    const { data } = await axios.get(
      'https://spreadsheets.google.com/feeds/list/18Cp7E1R8ZRWp-W4vQ1TbhbWLU8rB-jQ-DN9Tp2cur6c/od6/public/values?alt=json'
    )

    /* Get the last 3 posts and order them from newest to oldest */

    const latestPosts = data.feed.entry.slice(-3).reverse()
    this.setState({ latestPosts })
  }

  render() {
    const { latestPosts } = this.state
    return (
      <>
        {latestPosts.map(post => (
          <SocialMediaFeedItem
            key={post.id.$t}
            handle={post.gsx$handle.$t}
            html={post.gsx$value.$t}
            date={post.gsx$date.$t}
          />
        ))}
      </>
    )
  }
}
