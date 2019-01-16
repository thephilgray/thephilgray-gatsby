import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  grid-area: footer;

  @media print {
    display: none;
  }
`

export default function SiteFooter() {
  return (
    <FooterWrapper>
      <div>
        <p>
          © <span>2019</span> Phil Gray |{' '}
          <a href="https://github.com/thephilgray">View Source</a>
        </p>
      </div>
    </FooterWrapper>
  )
}
