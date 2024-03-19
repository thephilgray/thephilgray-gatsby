import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import logo from '../images/thephilgray-logo.svg'

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.white};
  margin: 0 1em 1em;
  grid-area: header;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media screen and (min-width: 480px) {
    flex-wrap: nowrap;
  }

  @media print {
    display: none;
  }
`

const StyledNav = styled.nav`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  background-attachment: local, local, scroll, scroll;
  padding: 1em;

  a {
    color: ${({ theme }) => theme.black};
    font-weight: normal;
  }

  a[aria-current='page'] {
    border-bottom: 0.75em solid #c2eae9;
    -webkit-transform: skewX(-10deg);
    transform: skewX(-10deg);
  }

  & > * {
    flex: 0 0 auto;
    padding: 0 1em;
    font-size: 1.5em;
  }
`

const SiteLogo = styled.div`
  margin-right: 1em;
  width: 100%;

  img {
    margin: 0;
  }

  @media screen and (min-width: 480px) {
    width: auto;
  }
`

const Header = ({ location }) => (
  <HeaderWrapper>
    <SiteLogo>
      <Link to="/">
        <img src={logo} alt="thephilgray logo" />
      </Link>
    </SiteLogo>
    <StyledNav>
      <Link
        to="/blog"
        aria-current={location.pathname.split('/').includes('blog') && 'page'}
      >
        Blog
      </Link>
      <Link
        to="/projects"
        aria-current={
          location.pathname.split('/').includes('projects') && 'page'
        }
      >
        Projects
      </Link>
      <Link
        to="/resume"
        aria-current={
          location.pathname === '' ||
          (location.pathname.split('/').includes('resume') && 'page')
        }
      >
        Resume
      </Link>
    </StyledNav>
  </HeaderWrapper>
)

Header.propTypes = {
  location: PropTypes.object,
}

Header.defaultProps = {
  location: ``,
}

export default Header
