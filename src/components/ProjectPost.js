import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SEO from './SEO'
import TagCloud from './TagCloud'

const ProjectPostLayout = styled.article`
  max-width: 50em;
  margin: auto;
  @media screen and (min-width: 1200px) {
    max-width: 800px;
    padding: 0;
  }
`

const ProjectPostHeader = styled.header`
  position: relative;
  height: 400px;
  background: linear-gradient(to right top, rgb(63, 81, 181), rgb(25, 32, 72));

  .projectPost__headerContent {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  h2 {
    flex: 3 0 75%;
    margin: 1em 0;
    text-align: center;
    color: ${({ theme }) => theme.white};
    z-index: 1;
  }

  p {
    flex: 0 1 auto;
    font-size: 150%;
    text-align: center;
    margin: 1em 0;
    color: ${({ theme }) => theme.white};
    z-index: 1;
  }
`

const ProjectPostBody = styled.div`
  a {
    font-weight: 600;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }
`
const JumboWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
  transition: inherit;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
  align-items: center;
`

const JumboImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  min-width: 100%;
  will-change: transform;
  transition: inherit;
`

const JumboOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  contain: strict;
  transition: inherit;
  background: linear-gradient(
    to right top,
    rgba(63, 81, 181, 0.7),
    rgba(25, 32, 72, 0.7)
  );
`

function ProjectPost({ data }) {
  const { markdownRemark } = data
  return (
    <>
      <SEO title={markdownRemark.frontmatter.title} />
      <ProjectPostLayout>
        <ProjectPostHeader imageExists>
          <JumboWrapper>
            {markdownRemark.frontmatter.image && (
              <>
                <JumboImage src={markdownRemark.frontmatter.image} />
                <JumboOverlay />
              </>
            )}

            <div className="projectPost__headerContent">
              <h2>{markdownRemark.frontmatter.title}</h2>

              <p>{markdownRemark.frontmatter.abstract}</p>
            </div>
          </JumboWrapper>
        </ProjectPostHeader>
        <p style={{ textAlign: 'right' }}>{markdownRemark.frontmatter.date}</p>
        <ProjectPostBody
          dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
        />
        <TagCloud tags={markdownRemark.frontmatter.tags.split(', ')} />
      </ProjectPostLayout>
    </>
  )
}

ProjectPost.propTypes = {
  data: PropTypes.object,
}

export default ProjectPost

export const query = graphql`
  query ProjectQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        slug
        tags
        abstract
        image
      }
      html
    }
  }
`
