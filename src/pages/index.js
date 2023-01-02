import React from 'react'
import AllPostListing from '../components/AllPostListing'
import SEO from '../components/SEO'

export default function blog() {
  return (
    <>
      <SEO title="Blog" />
      <AllPostListing />
    </>
  )
}
