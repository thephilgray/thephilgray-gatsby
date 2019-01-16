import React from 'react'
import SocialMediaFeed from '../components/SocialMediaFeed'

import SEO from '../components/SEO'

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p style={{ textAlign: 'center' }}>The latest posts from @thephilgray</p>
    <SocialMediaFeed />
  </>
)

export default IndexPage
