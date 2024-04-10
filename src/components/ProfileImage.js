import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Image = () => (
  <StaticImage
    src="../images/profile.png"
    alt="headshot of Phil Gray"
    placeholder="blurred"
    layout="constrained"
    width={200}
  />
)
export default Image
