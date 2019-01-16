import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { slugFilter } from '../lib/filters'
import SEO from './SEO'

function TagPage({ pageContext, location }) {
  return (
    <>
      <SEO title={pageContext.tag} />
      <h2>Tag: {pageContext.tag}</h2>
      <hr />
      {pageContext.filteredProjects && (
        <>
          <h2>Projects</h2>
          {pageContext.filteredProjects.map(project => (
            <Link
              key={project.frontmatter.slug}
              to={`/projects/${project.frontmatter.slug ||
                slugFilter(project.frontmatter.title)}`}
            >
              <p>{project.frontmatter.title}</p>
            </Link>
          ))}
          <hr />
        </>
      )}
      {pageContext.filteredPosts && (
        <>
          <h2>Posts</h2>
          {pageContext.filteredPosts.map(post => (
            <Link
              key={post.frontmatter.slug}
              to={`/blog/${post.frontmatter.slug ||
                slugFilter(post.frontmatter.title)}`}
            >
              <p>{post.frontmatter.title}</p>
            </Link>
          ))}
        </>
      )}
    </>
  )
}

TagPage.propTypes = {
  pageContext: PropTypes.object,
  location: PropTypes.object,
}

export default TagPage
