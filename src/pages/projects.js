import React from 'react'
import SEO from '../components/SEO'
import ProjectGrid from '../components/ProjectGrid'

export default function projects() {
  return (
    <>
      <SEO title="Projects" />
      <header>
        <h1>Work, Demos, and Personal Projects</h1>
      </header>
      <ProjectGrid />
    </>
  )
}
