import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import PropTypes from 'prop-types'
import TagCloud from './TagCloud'

const ProjectGridItemLayout = styled.div`
  // height: 400px;
  position: relative;
  overflow: hidden;
  margin: 0.5em;
  display: flex;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  transition: transform 0.1s cubic-bezier(0.17, 0.67, 0.34, 1.54),
    -webkit-transform 0.1s cubic-bezier(0.17, 0.67, 0.34, 1.54);
  max-width: 600px;

  &:hover {
    transform: skewX(0.7deg) scale(1.1);
    cursor: pointer;
    color: ${({ theme }) => theme.orange};
    z-index: 100;
  }
`

const ProjectGridItemContent = styled.div`
  // display: flex;
  position: relative;
  padding: 1em;
  background-image: ${({ theme }) =>
    `linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), ${theme.lightBlue})`};
  background-attachment: scroll;
  background-position: 0 0;
  background-clip: border-box;
  background-origin: padding-box;
  background-size: auto auto;
  background-repeat: no-repeat;
  flex-wrap: wrap;
  background-blend-mode: normal;
  h4,
  p {
    width: 100%;
  }
  .tagsContainer {
    margin-top: auto;
  }
`

const ProjectGridItemBackground = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

function ProjectGridItem({ title, description, tags, link, image }) {
  return (
    <ProjectGridItemLayout onClick={() => navigate(link)}>
      <ProjectGridItemBackground image={image} />
      <ProjectGridItemContent>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="tagsContainer">
          <TagCloud tags={tags} max={6} linked={false} />
        </div>
      </ProjectGridItemContent>
    </ProjectGridItemLayout>
  )
}

ProjectGridItem.defaultProps = {
  tags: [],
  image: '',
}

ProjectGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string,
  tags: PropTypes.array,
}

export default ProjectGridItem
