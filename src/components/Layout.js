import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import { theme as GlobalTheme, GlobalStyle } from './Styles'
import Header from './Header'
import WidgetArea from './WidgetArea'
import SiteFooter from './SiteFooter'
import Transition from './Transition'

const SiteWrapper = styled.div`
  color: ${({ theme }) => theme.black};

  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-areas: 'header header' 'sidebar main' 'footer footer';
    grid-template-rows: 150px 3fr 50px;
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
  }
  & > * {
    margin: 0 0.25em 1em;
  }
`

export const SiteMain = styled.main`
  grid-area: main;
  max-width: 55em;
  @media screen and (min-width: 900px) {
    padding: 1em;
  }

  @media print {
    padding: 0;
    max-width: none;
  }
`

const Layout = ({ children, location }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={GlobalTheme}>
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
        `}
        render={data => (
          <SiteWrapper>
            <Header
              siteTitle={data.site.siteMetadata.title}
              location={location}
            />
            <Transition location={location}>
              <SiteMain>{children}</SiteMain>
            </Transition>
            <WidgetArea />
            <SiteFooter />
          </SiteWrapper>
        )}
      />
    </ThemeProvider>
  </>
)
Layout.defaultProps = {
  location: {},
}

Layout.propTypes = {
  location: PropTypes.object,
  children: PropTypes.node.isRequired,
}

export default Layout
