import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import SEO from '../components/SEO'

const RESUME_DATA = graphql`
  query RESUME_DATA {
    allDataYaml {
      edges {
        node {
          name
          overview
          tools
          experience {
            company
            years
            location
            titles
            description
          }
          education {
            title
            location
            years
            degree
            concentration
            honors
          }
          certifications {
            title
            years
          }
        }
      }
    }
  }
`

const ResumeLayout = styled.div`
  p {
    font-size: 1.2em;
    line-height: 1.6;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 2.074em;
    line-height: 1.4;
    margin: 0.25em 0;
  }

  h3 {
    font-size: 1.728em;
    line-height: 1.4;
    margin: 0.25em 0;
  }

  h4 {
    font-size: 100%;
  }

  h4,
  h5 {
    margin: 0.25em 0;
    line-height: 1.4;
  }

  .print-only {
    display: none;
  }

  @media print {
    font-size: 90%;

    header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      flex-wrap: wrap;

      h1 {
        padding-right: 1em;
        margin: 0;
      }

      .print-only {
        display: block;
        text-align: right;
      }
    }
  }
`

const ResumeSection = styled.section`
  @media print {
    page-break-before: ${({ pageBreak }) => (pageBreak ? 'always' : 'inherit')};
  }
`

const RelevantExperienceLayout = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-gap: 1em;
    grid-column: col 3 / span 2;
    grid-row: row 2;
    grid-template-columns: 1fr 1fr;
  }
  @media print {
    display: grid;
    grid-gap: 1em;
    grid-column: col 3 / span 2;
    grid-row: row 2;
    grid-template-columns: 1fr 1fr;
  }
`

const RelevantExperienceItem = styled.div`
  margin: 0.5em;
  border-left: none;
  padding-left: 0;

  .relevant-experience__info {
    margin: 0.5em 0;
  }

  .relevant-experience__years {
    background: #262427;
    color: #fff;
    border: 1px solid #262427;
    padding: 0.25em;
  }

  .relevant-experience__location {
    display: inline;
    margin-left: 0.5em;
    border-bottom: 0.25em solid #262427;
  }

  @media (min-width: 768px) {
    &:not(:last-child):not(:nth-last-child(2)) {
      border-bottom: 2px solid #262427;
    }

    &:first-child {
      grid-column: 1/3;
      grid-row: 1;
    }
  }

  @media print {
    margin: 0.5em;
    border-left: none;
    padding-left: 0;

    &:nth-child(1) {
      grid-column: 1 / 3;
      grid-row: 1;
    }
    &:nth-child(2) {
      grid-column: 1;
      grid-row: 2;
    }
    &:nth-child(3) {
      grid-column: 2;
      grid-row: 2;
    }

    &:not(:last-child):not(:nth-last-child(2)) {
      border-bottom: 2px solid #999;
    }
    .relevant-experience__location {
      border-bottom: 0.25em solid #999;
    }
  }
`

const Resume = () => (
  <>
    <SEO title="Resume" />
    <StaticQuery
      query={RESUME_DATA}
      render={({ allDataYaml }) => {
        const {
          name,
          overview,
          tools,
          education,
          experience,
          certifications,
        } = allDataYaml.edges[0].node
        return (
          <ResumeLayout>
            <header>
              <h1>{name}</h1>
              <div className="print-only">
                <a href="http://thephilgray.com">thephilgray.com</a>
                <br />
                <a href="mailto:thephilgray@gmail.com">thephilgray@gmail.com</a>
              </div>
            </header>
            <ResumeSection>
              <h2>Overview</h2>
              <p>{overview}</p>
            </ResumeSection>
            <ResumeSection className="skills-and-tools">
              <div className="tools">
                <h2>Tools</h2>
                <p className="tools__text">
                  {tools.map((tool, i) => (
                    <span key={tool || `tool-${i}`}>{`${tool +
                      (i === tools.length - 1 ? '' : ', ')}`}</span>
                  ))}
                </p>
              </div>
            </ResumeSection>
            {/* <ResumeSection>
              <h2>Projects</h2>
            </ResumeSection> */}
            <ResumeSection>
              <h2>Education</h2>
              {education.map((school, i) => (
                <p key={school.title || `school-${i}`}>
                  {school.title}, {school.location}
                  <br />
                  {school.degree} ({school.years}), {school.concentration},{' '}
                  {school.honors}
                </p>
              ))}
            </ResumeSection>
            <ResumeSection>
              <h2>Certifications</h2>
              <p>
                {certifications.map((cert, i) => (
                  <React.Fragment key={cert.title || `cert-${i}`}>
                    <span>
                      {cert.title} ({cert.years})
                    </span>
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </ResumeSection>
            <ResumeSection pageBreak>
              <h2>Relevant Experience</h2>
              <RelevantExperienceLayout>
                {experience.map((ex, i) => (
                  <RelevantExperienceItem key={ex.company || `ex-${i}`}>
                    <div className="relevant-experience__info">
                      <span className="relevant-experience__years">
                        {ex.years}
                      </span>
                      <div className="relevant-experience__location">
                        <small>{ex.location}</small>
                      </div>
                    </div>
                    <h3>{ex.company}</h3>
                    {ex.titles.map((jobTitle, i) => (
                      <h4 key={jobTitle || `jobTitle-${i}`}>{jobTitle}</h4>
                    ))}
                    <p>{ex.description}</p>
                  </RelevantExperienceItem>
                ))}
              </RelevantExperienceLayout>
            </ResumeSection>
          </ResumeLayout>
        )
      }}
    />
  </>
)

export default Resume
