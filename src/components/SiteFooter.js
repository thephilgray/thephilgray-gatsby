import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  grid-area: footer;

  @media print {
    display: none;
  }
`

const currentYear = new Date().getFullYear()

export default function SiteFooter() {
  return (
    <FooterWrapper>
      <div>
        <p>
          © <span>{currentYear}</span> Phil Gray |{' '}
          <a href="https://github.com/thephilgray" target="_blank">
            View Source
          </a>
        </p>
      </div>
    </FooterWrapper>
  )
}
