import React from 'react'
import PropTypes from 'prop-types'
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group'

const timeout = 200
const defaultStyle = {
  transition: `opacity ${timeout}ms ease-in-out`,
  opacity: 0
}
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0,
  },
  exited:  { opacity: 0 },
}

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props

    return (
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {status => (
            <div
              style={{
                ...defaultStyle,
                ...getTransitionStyles[status],
              }}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
}

Transition.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
}

export default Transition
