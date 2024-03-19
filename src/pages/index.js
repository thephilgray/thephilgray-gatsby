import React from 'react'
// import AllPostListing from '../components/AllPostListing'
import SEO from '../components/SEO'
import Resume from './resume'

export default function blog() {
  return (
    <>
      <SEO title="Blog" />
      {/* <AllPostListing /> */}
      <Resume />
    </>
  )
}
