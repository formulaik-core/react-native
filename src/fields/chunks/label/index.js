import React from 'react'
import PlatformText from '../../../platform/text/index.native.js'
import PlatformContainer from '../../../platform/container/index.native.js'

export default (props) => {
  const { label, hideLabel } = props.item
  if (hideLabel || !label) {
    return null
  }

  return <React.Fragment>
    <PlatformContainer
      style={{
        marginBottom: "0.5rem",
      }}
    >
      <PlatformText>{label}</PlatformText>
    </PlatformContainer>
  </React.Fragment>
}
