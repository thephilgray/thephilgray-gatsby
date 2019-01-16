import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import styled from 'styled-components'
import ProjectGridItem from './ProjectGridItem'
import { slugFilter } from '../lib/filters'

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`

const PROJECT_POST_LISTING = graphql`
  query PROJECT_POST_LISTING {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/projects/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            tags
            abstract
            image
          }
          excerpt
          id
        }
      }
    }
  }
`

const ProjectGrid = () => (
  <Grid>
    <StaticQuery
      query={PROJECT_POST_LISTING}
      render={({ allMarkdownRemark }) =>
        allMarkdownRemark.edges.map(({ node }) => {
          const { id, frontmatter } = node
          const { title, abstract, excerpt, tags, image, slug } = frontmatter
          const projectSlug = slug || slugFilter(title)
          return (
            <ProjectGridItem
              key={id}
              title={title}
              description={abstract || excerpt}
              tags={tags.split(', ')}
              image={image}
              link={`projects/${projectSlug}`}
            />
          )
        })
      }
    />
  </Grid>
)

export default ProjectGrid
