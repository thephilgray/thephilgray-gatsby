import React from 'react'
import styled from 'styled-components'
import TopTags from './TopTags'
import InfoWidget from './InfoWidget'
import ProfileImage from './ProfileImage'
import GithubIcon from '../images/github.svg'
import TwitterIcon from '../images/twitter.svg'

const WidgetAreaWrapper = styled.aside`
  background-image: ${({ theme }) =>
    `radial-gradient(circle at center,${theme.pink},${theme.white})`};
  text-align: center;
  grid-area: sidebar;

  @media print {
    display: none;
  }
`

const WidgetAreaHeader = styled.header`
  padding: 1em;
  img {
    border-radius: 50%;
  }
`

const WidgetArea = () => (
  <WidgetAreaWrapper>
    <WidgetAreaHeader>
      <ProfileImage />
    </WidgetAreaHeader>
    <InfoWidget>
      <h3>Phil Gray</h3>
      <p>
        <em>Web Developer </em>
        <br />
        <span>Node + React/Vue + CSS</span>
      </p>
      <div className="socialFollow">
        <a href="https://twitter.com/thephilgray" alt="Follow me on Twitter">
          <img src={TwitterIcon} alt="Twitter icon" />
        </a>
        <a href="https://github.com/thephilgray" alt="Follow me on Github">
          <img src={GithubIcon} alt="Github icon" />
        </a>
      </div>
    </InfoWidget>
    <TopTags tagLimit={15} />
  </WidgetAreaWrapper>
)

export default WidgetArea
