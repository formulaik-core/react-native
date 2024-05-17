import PlatformButton from '../../../../platform/button/index.native.js'
import PlatformContainer from '../../../../platform/container/index.native.js'
import React from 'react'

export default ({ onAdd, title, disabled }) => <PlatformContainer
  style={{ "display": "flex", "marginTop": "2.5rem", "marginBottom": "2.5rem", "justifyContent": "center" }}>
  <PlatformButton disabled={disabled}
    type="button"
    onClick={onAdd}>
    {title ? title : "Add"}
  </PlatformButton>
</PlatformContainer>

