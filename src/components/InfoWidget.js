import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const InfoWidgetWrapper = styled.div`
  background: #c2eae9;
  width: 100%;
  padding: 1em;
  box-shadow: 0 1px 6px #262427;

  .socialFollow {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 100%;

    img {
      height: 2em;
      width: 2em;
      margin: 0 1em;
    }
  }
`

function InfoWidget({ children }) {
  return <InfoWidgetWrapper>{children}</InfoWidgetWrapper>
}

InfoWidget.propTypes = {
  children: PropTypes.node,
}

export default InfoWidget
